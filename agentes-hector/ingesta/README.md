# ingesta/ — bandeja de entrada de proyectos pasados

Deposita aquí archivos markdown de proyectos que Hector ya hizo antes de que existiera este sistema. El skill `asimilar` (`.claude/skills/asimilar/SKILL.md`) los procesa en 3 salidas: ficha en `proyectos/`, lecciones técnicas al skill del dominio correspondiente, y patrones de estilo/decisión a `estilo-hector.md`.

Formato libre — no hace falta que el MD original traiga el frontmatter de `proyectos/`, el skill `asimilar` lo deriva.

Los archivos ya procesados se marcan (sufijo `.procesado.md` o se mueven a `ingesta/procesados/`) para no reprocesarlos.
