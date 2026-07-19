# proyectos/ — repositorio del Bibliotecario

Un archivo markdown por proyecto. El Bibliotecario (`.claude/agents/bibliotecario.md`) es el único agente que debería escribir aquí directamente.

## Frontmatter esperado en cada ficha

```yaml
nombre: ...
tipo: personal | trabajo
dominio: automatizacion | analisis_datos | data_engineering | multi
estado: activo | pausado | cerrado
complejidad: baja | alta
herramientas_objetivo: [...]
disponibilidad_confirmada: true | false
ultima_actualizacion: fecha
tags: [personal|trabajo, dominio, ...]
```

El cuerpo del archivo: resumen vivo del proyecto, decisiones clave, historial de entregables. Los proyectos relacionados se enlazan con wikilinks `[[nombre-del-otro-proyecto]]`.

## Reglas

- Se actualiza por hito (decisión, entregable, cambio de estado), no solo al cierre. Esta carpeta **es** el registro de auditoría — no existe un hook aparte para eso.
- Nunca contiene datos corporativos (cifras, clientes, contenido de tablas) — solo describe el proyecto.
- Cada actualización se commitea al Git del sistema.
- Al inicio de cada sesión, un hook `SessionStart` resume automáticamente qué fichas tienen `estado: activo` — así el Maestro nunca "olvida" en qué estabas, a diferencia de una sesión nueva en blanco.

## Tip: ábrelo como vault de Obsidian

Esta carpeta (o `agentes-hector/` completa) es markdown plano — puedes abrirla directamente como vault en Obsidian (PC o celular) para navegar el grafo de proyectos, backlinks y tags sin pasar por Claude Code. No requiere ningún MCP. Si prefieres que esto viva dentro de tu vault personal existente en vez de aquí, dile al Maestro dónde está para ajustar la ruta.

Aún no hay fichas — el primer proyecto piloto (recomendado: Data Engineering) creará la primera.
