# Prototipo v1 (antes de la prueba) · Figma

**Archivo Figma:** https://www.figma.com/design/c1B497wZukkYE1xtiP256N (página **v1**)
Para recorrerlo: abrir el archivo, página `v1`, elegir un frame y pulsar **Presentar** (▶). Puntos de inicio: «Flujo 1 y 2: agendar tutoría (éxito y error)» y «Flujo 3: ver y cancelar tutorías».
> Compartir el archivo con «Cualquier persona con el enlace puede ver» antes de entregar.

**Técnica y fidelidad:** prototipo clic a clic en Figma, fidelidad media en aspecto y alta en interacción; horizontal (pocas pantallas, todos los flujos principales). No prueba rendimiento real ni datos reales.
**Réplica en código:** `index.html` (+ `styles.css`, `app.js`) reproduce lo mismo y permite probar teclado y foco con doble clic en el archivo.

## Estados (frames)
| Frame | Estado |
|---|---|
| 01 Inicio | normal |
| 02 Formulario (sin hora) | normal |
| 03 Formulario (10:00 elegido) | normal con selección |
| 04 Guardando… (10:00) | carga (solo spinner, sin texto; botón activo) |
| 05 Error: horario ocupado | error (mensaje genérico al final) |
| 06 Formulario (11:00 elegido) | normal con selección |
| 07 Guardando… (11:00) | carga |
| 08 Éxito | éxito («Listo ✔», sin datos) |
| 09 Mis tutorías | normal |
| 10 Mis tutorías (confirmar cancelación) | confirmación |

## Transiciones (disparador → destino)
| Desde | Disparador | Hacia |
|---|---|---|
| 01 | clic «Agendar tutoría» / «Ver mis tutorías» | 02 / 09 |
| 02 | clic hora 10:00 / 11:00 / «Cancelar» | 03 / 06 / 01 |
| 03 | clic «Confirmar tutoría» / hora 11:00 / «Cancelar» | 04 / 06 / 01 |
| 04 | automático a 1,5 s | 05 |
| 05 | clic «Confirmar tutoría» (reintento) / hora 11:00 / «Cancelar» | 04 / 06 / 01 |
| 06 | clic «Confirmar tutoría» / hora 10:00 / «Cancelar» | 07 / 03 / 01 |
| 07 | automático a 1,5 s | 08 |
| 08 | clic «Continuar» | 09 |
| 09 | clic «Cancelar tutoría» (TUT-0002) / «Agendar tutoría» | 10 / 02 |
| 10 | clic «No» / «Sí, cancelar» / «Agendar tutoría» | 09 / 09 / 02 |
| Barra superior | clic «Inicio» / «Mis tutorías» | 01 / 09 |

**Flujos:** F1 éxito = 01→02→06→07→08→09 · F2 error y recuperación = 01→02→03→04→05→06→07→08 · F3 consulta y cancelación = 01→09→10→09.

## Fallos de UX deliberados de v1 (se corrigen en v2)
Error genérico al final · carga sin texto y sin bloqueo del botón · éxito sin código ni datos · texto de ayuda gris `#999` (2,8:1) · sin foco visible (réplica HTML).
