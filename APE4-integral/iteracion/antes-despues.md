# Comparación v1 → v2

Cadena de causalidad: **hallazgo → cambio → medición**.

| Hallazgo | Cambio en v2 | Archivo | Medición v1 → v2 (P01/P02) |
|---|---|---|---|
| H1 Error genérico al final | Errores en línea, resumen con enlaces, foco al primer error | `prototipo/v2/app.js` (`mostrarErrores`), `styles.css` (`.error`) | T2: 85 s → 57,5 s; errores 5 → 2 |
| H2 Doble envío / carga sin texto | Botón deshabilitado, «Guardando…», `aria-busy` | `app.js` (`enviar`) | Tutorías duplicadas: 1 → 0; T3: 35,5 s → 15,5 s |
| H3 Confirmación pobre | Pantalla de éxito con código y resumen | `index.html` (`#exito`), `app.js` | T3 éxito: 0/2 → 2/2; emoción T6: -2 → +1,5 |
| A1 Contraste | `#999` → `#4a4a5a` | `styles.css` (`--apoyo`) | 2,8:1 → ≈ 8,7:1 |
| A2 Foco | `:focus-visible` visible | `styles.css` | Recorrido con teclado completo y visible |

## Curva emocional: predicción vs. dato medido
- **Predicción** (equipo, antes de probar): v1 con mínimo en T5–T6 (-2); v2 esperada positiva.
- **Observado** (P01/P02): v1 coincide con la predicción en T5–T6 (-2) y fue algo peor en T4 (-1,5). v2 quedó cerca de lo predicho en T5 (observado 0,5 vs. 0 predicho) y por debajo en T6 (1,5 observado vs. 2 predicho: la predicción fue optimista).
- Limitación: n = 2, valoración del observador. Se distingue siempre lo predicho de lo observado.

Gráfico: `recorrido-emocional.png`. Matriz actualizada: `trazabilidad.md`.

## Qué no se corrigió (pendiente)
- Persistencia real de las tutorías (el prototipo guarda en memoria).
- Recordatorios por correo o notificación.
