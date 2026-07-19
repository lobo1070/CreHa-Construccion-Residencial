---
name: asimilar
description: Ingiere MDs de proyectos pasados depositados en ingesta/ y los procesa en tres salidas — ficha en proyectos/, lecciones técnicas al skill del dominio correspondiente, y patrones de estilo/decisión a estilo-hector.md. Úsalo cuando Hector deposite uno o más archivos en ingesta/ y pida procesarlos.
---

# Asimilar — ingesta de proyectos pasados

Procedimiento para que el sistema herede lo que Hector ya resolvió antes de su primer proyecto real en cada dominio.

## Entrada

Uno o más archivos markdown en `ingesta/` — notas, resúmenes o documentación de proyectos que Hector ya hizo antes de que existiera este sistema. Formato libre: no asumas que traen el frontmatter YAML de `proyectos/`.

## Procesamiento — 3 salidas por archivo

1. **Ficha en `proyectos/`** — invoca o actúa como el Bibliotecario: crea (o actualiza si ya existe una relacionada) una ficha con el frontmatter estándar (`nombre`, `tipo`, `dominio`, `estado: cerrado` normalmente, `complejidad`, `herramientas_objetivo`, `disponibilidad_confirmada`, `ultima_actualizacion`) y un resumen del proyecto. Aplica la regla de datos del Bibliotecario: nunca copies cifras o datos corporativos del MD original, solo el resumen del proyecto.
2. **Lecciones técnicas al skill del dominio** — identifica errores técnicos, workarounds o soluciones documentadas en el MD original, y agrégalas (consolidando, no solo apendizando) a la sección "Errores conocidos" del skill correspondiente (`power-automate/SKILL.md`, `etl-vba-afo/SKILL.md`, etc.). Si el skill del dominio no tiene esa sección todavía, créala.
3. **Patrones de estilo/decisión a `estilo-hector.md`** — si el MD revela cómo decide Hector, qué formatos prefiere, o qué soluciones evita, agrégalo (consolidando) a `estilo-hector.md`.

## Regla de consolidación

Igual que la retrospectiva del Bibliotecario: reescribe y compacta lo existente, no acumules un log infinito. El objetivo es criterio destilado.

## Al terminar

Mueve o marca el archivo de `ingesta/` como procesado (ej. renómbralo con sufijo `.procesado.md` o muévelo a `ingesta/procesados/`) para no reprocesarlo en la próxima corrida.
