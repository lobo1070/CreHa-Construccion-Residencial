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
```

El cuerpo del archivo: resumen vivo del proyecto, decisiones clave, historial de entregables.

## Reglas

- Se actualiza por hito (decisión, entregable, cambio de estado), no solo al cierre.
- Nunca contiene datos corporativos (cifras, clientes, contenido de tablas) — solo describe el proyecto.
- Cada actualización se commitea al Git del sistema.

Aún no hay fichas — el primer proyecto piloto (recomendado: Data Engineering) creará la primera.
