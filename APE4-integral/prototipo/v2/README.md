# Prototipo v2 (después de la prueba) · Figma

**Archivo Figma:** https://www.figma.com/design/c1B497wZukkYE1xtiP256N (página **v2**)
Para recorrerlo: abrir el archivo, página `v2`, elegir un frame y pulsar **Presentar** (▶). Puntos de inicio: «Flujo 1 y 2: agendar tutoría (éxito y error)» y «Flujo 3: ver y cancelar tutorías».
> Compartir el archivo con «Cualquier persona con el enlace puede ver» antes de entregar.

**Réplica en código:** `index.html` (+ `styles.css`, `app.js`) con la misma interacción, foco visible y soporte de teclado.
Los frames y transiciones son los mismos que en v1 (ver `../v1/README.md`); cambia el contenido de los estados.

## Cambios frente a v1 (hallazgo → cambio)
| Frame | v1 | v2 | Hallazgo |
|---|---|---|---|
| 04 y 07 Guardando… | solo spinner, botón activo | botón «Guardando…» deshabilitado + texto «Conectando con el portal…» | H2 |
| 05 Error | «Error: horario no disponible.» al final | alerta arriba con motivo, horas libres y «tus datos siguen aquí»; la hora 10:00 se marca en rojo con mensaje junto al campo | H1 |
| 08 Éxito | «Listo ✔» | «¡Tutoría agendada!» con código TUT-0002, materia, docente, fecha, hora y modalidad | H3 |
| Todos | texto de ayuda `#999` (2,8:1) | `#4a4a5a` (≈ 8,7:1) y bordes de 2 px más visibles | A1 |
| Réplica HTML | sin contorno de foco | `:focus-visible` de 3 px y foco que sigue al cambio de pantalla | A2 |
