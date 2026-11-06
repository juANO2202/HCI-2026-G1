# Matriz de trazabilidad

Estado: actualizada tras la iteración v2. Reemplazar `<URL-REPO>` por la URL real y los `<hash>` por los commits reales.

| Req. | Necesidad de usuario | Flujo / decisión | Pantalla / componente | Caso de prueba | Hallazgo / commit |
|---|---|---|---|---|---|
| R1 | Acceder a la operación | Inicio → «Agendar tutoría» | Inicio / botón primario | T1 | v1 ok (18 s, 25 s). Sin cambio. |
| R2–R4 | Ingresar y modificar información | Formulario → validación | Campos, botones de hora, área de texto | T2 | H1 → commit `<hash-H1>` (errores en línea) |
| R5 | Corregir error | NO → error → reintento | Error contextual / resumen de errores | T2-E | H1 y H4 → commits `<hash-H1>`, `<hash-A1>` |
| R6 | Finalizar con confirmación | SÍ → guardar → éxito | Indicador de carga, mensaje de confirmación | T3 | H2 → `<hash-H2>` (bloqueo + texto de carga); H3 → `<hash-H3>` (resumen y código) |
| RNF | Accesibilidad | — | Contraste y foco visible | A1, A2 | A1 y A2 → `<hash-A1>`, `<hash-A2>` |

Todos los hallazgos están en `pruebas/hallazgos.md`; el antes/después en `iteracion/antes-despues.md`.
