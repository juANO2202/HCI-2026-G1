# Protocolo de prueba de usabilidad y accesibilidad

## Objetivo
Medir si un usuario no diseñador logra T1, T2 y T3 en el prototipo v1, detectar hallazgos y comprobar si v2 los corrige.

## Participantes
| Código | Perfil | Consentimiento |
|---|---|---|
| P01 | Estudiante universitario de otra carrera, usa celular a diario | Verbal, antes de iniciar |
| P02 | Estudiante universitario de otra carrera, uso medio de portales académicos | Verbal, antes de iniciar |

No se recopilan nombres ni datos personales sensibles; solo códigos P01/P02. Se explica que se prueba el sistema, no a la persona, y que puede parar cuando quiera.

## Materiales
Celular o laptop con el prototipo (`v1` y luego `v2`), cronómetro, hoja de observación, escala emocional (-2 a +2).

## Guion (≈ 15 min por participante)
1. Bienvenida y consentimiento (1 min).
2. Contexto: «Eres Andrea; necesitas una tutoría de Interacción Humano-Computador con el Ing. Caiza el martes 10 de noviembre a las 10:00.»
3. Tareas en v1 (sin ayuda del observador):
   - **T1 Localizar:** encontrar dónde agendar una tutoría.
   - **T2 Operar y corregir:** llenar el formulario con los datos dados. El horario 10:00 está ocupado, así que debe corregirlo (**T2-E**).
   - **T3 Finalizar y confirmar:** confirmar y decir si la tutoría quedó registrada y cómo lo sabe.
4. Misma secuencia en v2 después de aplicar las correcciones.

## Qué se registra
Tiempo por tarea (s), éxito (sí / parcial / no), errores cometidos, ayuda requerida, comentario textual y **emoción observada** en escala -2 a +2 (valoración del observador, no una medida fisiológica).

## Heurísticas de Nielsen examinadas
H1 Visibilidad del estado · H5 Prevención de errores · H9 Recuperación de errores.

## Verificación de accesibilidad (2 condiciones)
- **A1 Contraste:** el texto de ayuda debe tener ≥ 4,5:1 (se verifica con la fórmula WCAG).
- **A2 Teclado y foco:** recorrer el formulario completo solo con Tab / Espacio / Enter; el foco debe verse en todo momento.

## Criterio de éxito
T1 ≤ 20 s · T2 sin ayuda · T3 con confirmación comprendida · A1 y A2 aprobadas.
