---
name: empaquetado
description: Formatea y entrega el resultado de un proyecto (trabajo o personal) — convierte el output a un formato portable y lo envía por correo/Teams vía el MCP de Microsoft 365. Úsalo al cierre de cualquier proyecto o hito de entrega, después de que el Bibliotecario actualizó proyectos/.
---

# Empaquetado y Entrega

Procedimiento reusable para el paso final de cualquier proyecto: formatear → verificar → enviar.

## 1. Formato de salida

Convierte el entregable del agente de dominio al formato portable que corresponda:

| Contenido | Formato |
|---|---|
| Reporte/análisis con narrativa | `.docx` o `.pdf` |
| Presentación ejecutiva | `.pptx` |
| Datos/tablas | `.xlsx` o `.csv` |
| Query/pipeline | `.sql` o `.py` |

## 2. Regla de formato según complejidad

- **Plug-and-play** (Hector solo necesita abrir y usar): entrega **solo el archivo**.
- **Complejidad alta** (requiere pasos de Hector para activarlo — importar un flow, correr un script con sus credenciales, pegar una macro): entrega **archivo + instrucciones paso a paso** en el cuerpo del mensaje o en un `.md`/`.docx` adjunto.

## 3. Checklist antes de enviar (obligatorio, sin excepción)

1. **Sin credenciales** — ninguna clave, token, contraseña o connection string en el archivo o en el mensaje.
2. **Sin rutas/URLs de infraestructura personal** — nada que exponga rutas de disco, IPs, URLs internas del ambiente personal de Hector.
3. **Sin datos que no vinieran del propio proyecto** — no se cuela contenido de otro proyecto, otro cliente, u otra fuente ajena a esta entrega.

Si cualquiera de los 3 falla, **no envíes** — corrige primero.

## 4. Envío

- **Trabajo:** envía por correo o Teams vía el MCP de Microsoft 365, a Hector (nunca a un tercero sin que él lo pida explícitamente).
- **Personal:** si el trabajo ya se ejecutó directo en el ambiente personal (no hay artefacto que entregar), **no envíes archivo** — genera solo un resumen de confirmación de lo que se hizo.

## 5. Después de enviar

Confirma al Maestro que el envío se completó (o que se generó el resumen de confirmación en modo personal) para que quede registrado en la bitácora.
