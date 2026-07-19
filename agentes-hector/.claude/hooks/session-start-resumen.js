#!/usr/bin/env node
'use strict';

// Hook SessionStart: esta es la ventaja concreta frente a abrir una sesión
// nueva de Claude/Claude Code en blanco. Al iniciar (o resumir) la sesión,
// escanea proyectos/*.md y le recuerda al Maestro (vía additionalContext,
// sin gastar una llamada a subagente) qué proyectos siguen activos.

const fs = require('fs');
const path = require('path');

const projectDir = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const proyectosDir = path.join(projectDir, 'proyectos');

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kv) fm[kv[1].trim()] = kv[2].trim();
  }
  return fm;
}

let activos = [];
try {
  const files = fs.readdirSync(proyectosDir).filter((f) => f.endsWith('.md') && f !== 'README.md');
  for (const f of files) {
    const text = fs.readFileSync(path.join(proyectosDir, f), 'utf8');
    const fm = parseFrontmatter(text);
    if (fm && fm.estado === 'activo') {
      activos.push(fm);
    }
  }
} catch (e) {
  // proyectos/ no existe todavía o no se pudo leer -- no bloquear el inicio de sesión.
}

let context;
if (activos.length === 0) {
  context =
    'Sistema de agentes orquestados (Maestro): no hay proyectos con estado "activo" registrados en proyectos/ todavía.';
} else {
  const lineas = activos
    .map(
      (p) =>
        `- ${p.nombre || '(sin nombre)'} [${p.tipo || 'n/d'} / ${p.dominio || 'n/d'}] — actualizado ${p.ultima_actualizacion || 'n/d'}`
    )
    .join('\n');
  context = `Sistema de agentes orquestados (Maestro): hay ${activos.length} proyecto(s) con estado "activo" en proyectos/:\n${lineas}\n\nSi la solicitud de Hector se relaciona con alguno de estos, pide al Bibliotecario la ficha completa antes de delegar, en vez de pedirle a Hector que repita contexto.`;
}

const output = {
  hookSpecificOutput: {
    hookEventName: 'SessionStart',
    additionalContext: context,
  },
};

process.stdout.write(JSON.stringify(output));
process.exit(0);
