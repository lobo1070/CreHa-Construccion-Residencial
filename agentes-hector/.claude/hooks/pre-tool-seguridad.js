#!/usr/bin/env node
'use strict';

// Hook PreToolUse determinista (sección 6 del handbook): intercepta acciones
// potencialmente irreversibles y exige confirmación explícita ("ask"), nunca
// bloqueo silencioso ni ejecución automática.

const fs = require('fs');

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch (e) {
    return '';
  }
}

function ask(reason) {
  const output = {
    hookSpecificOutput: {
      hookEventName: 'PreToolUse',
      permissionDecision: 'ask',
      permissionDecisionReason: reason,
    },
  };
  process.stdout.write(JSON.stringify(output));
  process.exit(0);
}

function allow() {
  process.exit(0);
}

let input;
try {
  input = JSON.parse(readStdin() || '{}');
} catch (e) {
  // Entrada no parseable: falla abierto (no bloquea), pero no es el caso esperado.
  allow();
  return;
}

const toolName = input.tool_name || '';
const toolInput = input.tool_input || {};
const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();

if (toolName === 'Bash') {
  const command = String(toolInput.command || '');

  const rmFragments = command.match(/\brm\b[^|;&\n]*/gi) || [];
  for (const fragment of rmFragments) {
    const pathTokens = fragment.match(/(?:^|\s)(\/[^\s]+|\.\.\/[^\s]+)/g) || [];
    const escapesWorkspace = pathTokens.some((tok) => {
      const p = tok.trim();
      if (p.startsWith('/')) return !p.startsWith(projectDir);
      return p.startsWith('../');
    });
    if (escapesWorkspace || pathTokens.length === 0) {
      ask(
        `Comando 'rm' detectado con posible alcance fuera del workspace del proyecto (${projectDir}): "${fragment.trim()}". Confirma antes de continuar.`
      );
      return;
    }
  }

  if (/\b(DROP|DELETE|TRUNCATE)\b/i.test(command)) {
    ask(
      `Comando SQL potencialmente destructivo (DROP/DELETE/TRUNCATE) detectado: "${command}". Confirma antes de continuar contra una base personal.`
    );
    return;
  }

  const paidApiHints = /\b(api\.openai\.com|api\.anthropic\.com\/v1\/messages|stripe\.com|checkout\.|billing\.)\b/i;
  if (paidApiHints.test(command)) {
    ask(
      `Comando con posible gasto en una API de pago detectado: "${command}". Confirma antes de continuar.`
    );
    return;
  }
}

if (/^mcp__n8n__(update_workflow|publish_workflow|unpublish_workflow|archive_workflow)$/.test(toolName)) {
  ask(
    `La acción "${toolName}" puede sobrescribir o cambiar el estado de un workflow de n8n ya existente. Confirma antes de continuar.`
  );
  return;
}

allow();
