---
name: power-automate
description: Convenciones para generar flows de Power Automate exportables/importables y límites conocidos de import. Úsalo cuando el agente de Automatización (o sus sub-agentes) va a generar o revisar un flow.
---

# Power Automate — convenciones y límites conocidos

## Convenciones para flows exportables

- Nombra cada acción del flow de forma descriptiva (evita los nombres genéricos por defecto tipo "Condición 2") para que Hector pueda leer el flow importado sin tener que abrir cada paso.
- Prefiere conectores nativos de Power Platform sobre HTTP genérico cuando exista un conector oficial — es más fácil de mantener y de que Hector lo audite.
- Cuando el flow dependa de una conexión (credencial), documenta explícitamente en las instrucciones de entrega qué conexión necesita Hector crear/seleccionar al importar — nunca asumas que ya existe.
- Entrega siempre el JSON del flow en un archivo, listo para "Importar paquete" en Power Automate — no como texto pegado en el chat.

## Límites conocidos de import

*(Se completa con la experiencia real de Hector — por ahora vacío, se llena vía retrospectiva del Bibliotecario o el skill `asimilar`.)*

## Errores conocidos

*(Vacío. El Bibliotecario consolida aquí los errores técnicos y sus soluciones después de cada retrospectiva de cierre de proyecto, o el skill `asimilar` los trae de proyectos pasados. Formato sugerido: `### <síntoma del error>` seguido de la causa y la solución aplicada.)*
