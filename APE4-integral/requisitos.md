# Requisitos · Agendar tutoría

Cada requisito tiene un solo verbo, es medible y se origina en un problema del diagnóstico.

| ID | Requisito | Criterio medible | Origen |
|---|---|---|---|
| R1 | El usuario **accede** a «Agendar tutoría» desde la pantalla de inicio. | Un solo clic desde Inicio; ≤ 20 s en T1. | P3 |
| R2 | El usuario **selecciona** materia, docente y fecha. | 3 listas con opción vacía inicial; sin campos ocultos. | P5 |
| R3 | El usuario **elige** una hora disponible. | 6 horas visibles como botones de selección única; operable con teclado. | P5 |
| R4 | El usuario **describe** el motivo de la tutoría. | Texto mínimo de 10 caracteres, con indicación visible. | P4 |
| R5 | El usuario **corrige** un error sin perder lo escrito. | El mensaje nombra el campo o el motivo; los datos se conservan al 100 %; reintento en 1 acción. | P2, P4 |
| R6 | El usuario **confirma** y recibe comprobante. | Al guardar se muestra carga con texto, y luego éxito con código, materia, docente, fecha y hora. | P1 |

## Requisitos no funcionales mínimos
- **Accesibilidad:** contraste de texto ≥ 4,5:1; foco visible en todos los controles; mensajes anunciados a lector de pantalla.
- **Conexión lenta:** estado de carga con texto; botón bloqueado para evitar doble envío.
