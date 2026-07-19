#!/usr/bin/env node
'use strict';

// Hook SubagentStop determinista (sección 6 del handbook): registra cada
// delegación en bitacora/ejecuciones.md sin depender de que el agente se
// acuerde de escribirla. Nota real: este hook no recibe un resultado
// estructurado del subagente -- solo metadata de la llamada.

const fs = require('fs');
const path = require('path');

function readStdin() {
  try {
    return fs.readFileSync(0, 'utf8');
  } catch (e) {
    return '';
  }
}

let input = {};
try {
  input = JSON.parse(readStdin() || '{}');
} catch (e) {
  input = {};
}

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const bitacoraPath = path.join(projectDir, 'bitacora', 'ejecuciones.md');

const agente = input.subagent_type || input.agent_type || input.name || 'desconocido';
const modelo = input.model || 'n/d';
const modo = input.mode || 'n/d';
const resultado = 'finalizado (sin resultado estructurado -- ver transcript de la sesión)';
const timestamp = new Date().toISOString();

const linea = `| ${timestamp} | ${agente} | ${modelo} | ${modo} | ${resultado} |\n`;

try {
  fs.appendFileSync(bitacoraPath, linea, 'utf8');
} catch (e) {
  // No bloquear el flujo si falla la escritura de la bitácora.
}

process.exit(0);
