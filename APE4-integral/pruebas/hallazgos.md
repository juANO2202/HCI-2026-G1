# Hallazgos de la prueba

Fuente: `resultados.csv` (v1 y v2, P01 y P02).

## Resumen de métricas

| Tarea | v1 tiempo medio (s) | v1 éxito | v2 tiempo medio (s) | v2 éxito |
|---|---|---|---|---|
| T1 | 21,5 | 2/2 | 12,5 | 2/2 |
| T2 | 85,0 | 2/2 (con 5 errores en total) | 57,5 | 2/2 (2 errores) |
| T2-E | 52,0 | 1/2 completa, 1 parcial | 24,5 | 2/2 |
| T3 | 35,5 | 0/2 (ambas parciales) | 15,5 | 2/2 |

Muestra de 2 participantes: sirve para detectar problemas, no para generalizar estadísticamente.

## Hallazgos priorizados (3 corregidos + 2 de accesibilidad)

| ID | Hallazgo | Evidencia | Heurística | Gravedad | Issue | Cambio en v2 |
|---|---|---|---|---|---|---|
| H1 | El error aparece solo al final de la página como «datos incompletos»; no dice qué campo. | P01 no lo vio; P02 tardó 96 s y 3 errores en T2. | H9 / H5 | Alta | #10 | Error junto a cada campo, resumen con enlaces y foco al primero. |
| H2 | No hay indicación de carga clara y el botón sigue activo; se puede enviar dos veces. | P02 creó dos tutorías en T3. | H1 | Alta | #11 | Botón deshabilitado «Guardando…» y texto de estado. |
| H3 | La confirmación («Listo ✔») no da datos ni código. | P01 y P02 no supieron si se guardó (T3 parcial, emoción -2). | H1 | Alta | #12 | Pantalla de éxito con código, materia, docente, fecha y hora. |
| A1 | Texto de ayuda gris `#999` sobre blanco: contraste ≈ 2,8:1 (< 4,5:1). | Cálculo WCAG. | Accesibilidad | Media | #12 (comentario) | Color `#4a4a5a` (≈ 8,7:1). |
| A2 | Controles sin contorno de foco (`outline: none`); en las horas no se ve dónde está el foco con Tab. | Recorrido solo con teclado. | Accesibilidad | Alta | #12 (comentario) | `:focus-visible` con contorno de 3 px en todos los controles. |

## Emociones observadas (no son métricas medidas)
Valoración del observador, escala -2 a +2. Los valores más bajos en v1 se concentran en T5–T6 (envío y mensaje). Ver `recorrido-emocional.csv`.

## Revisión de accesibilidad
| Condición | v1 | v2 |
|---|---|---|
| A1 Contraste de texto ≥ 4,5:1 | No cumple (2,8:1) | Cumple (≈ 8,7:1) |
| A2 Operación con teclado y foco visible | No cumple (foco invisible) | Cumple |
