# Diagnóstico UX · Portal de Tutorías FISEI

## 1. Persona y contexto
**Andrea**, 21 años, 5.º nivel de Software. Celular Android, Wi-Fi inestable del campus, poco tiempo entre clases. Quiere agendar una tutoría de *Interacción Humano-Computador* antes de las evaluaciones.

**Tareas:** T1 localizar la opción · T2 llenar el formulario y corregir un error · T3 finalizar y confirmar.
**Restricción:** conexión lenta. **Fallo adicional:** el sistema actual no confirma el registro y borra los datos al fallar.

## 2. Cinco problemas priorizados (interfaz actual)

| # | Problema | Heurística de Nielsen | Gravedad | Issue |
|---|---|---|---|---|
| P1 | Al enviar no hay confirmación clara de que la tutoría quedó registrada. | H1 Visibilidad del estado del sistema | Alta | #38 |
| P2 | Si falla el envío, el formulario se vacía y hay que reescribir todo. | H3 Control y libertad / H5 Prevención de errores | Alta | #39 |
| P3 | La opción «Agendar tutoría» está enterrada en *Servicios › Académico › Otros*. | H6 Reconocer antes que recordar | Alta | #40 |
| P4 | Los errores son genéricos («Error 500», «Datos incompletos») y no dicen qué campo corregir. | H9 Ayudar a reconocer, diagnosticar y recuperarse de errores | Media | #41 |
| P5 | Los horarios ocupados no se distinguen antes de elegirlos; el conflicto se descubre al final. | H5 Prevención de errores | Media | #42 |

Problemas de accesibilidad detectados en la inspección: texto de ayuda gris claro con bajo contraste y controles sin foco visible (se verifican en las pruebas).

## 3. Touchpoints (7) y momentos de verdad

| ID | Touchpoint | Momento de verdad |
|---|---|---|
| T1 | Ingreso al portal | |
| T2 | Buscar la opción de tutorías | |
| T3 | Elegir docente, fecha y hora | |
| T4 | Llenar el formulario | |
| T5 | Enviar y esperar (carga) | **MV1** — «¿se guardó mi tutoría?» |
| T6 | Mensaje de resultado (éxito/error) | **MV2** — «¿puedo confiar en que quedó agendada?» |
| T7 | Revisar «Mis tutorías» | |

**Momento de verdad que más afecta la confianza:** MV1 y MV2 (T5–T6). Con conexión lenta, el usuario no sabe si la acción funcionó; sin confirmación ni código, la confianza cae. La evidencia se obtiene en las pruebas (hallazgos H2 y H3 en `pruebas/hallazgos.md`).

## 4. Curva emocional inicial
Escala explícita: **-2** muy negativa · **-1** negativa · **0** neutra · **+1** positiva · **+2** muy positiva.
Los valores *iniciales* son una **predicción del equipo** basada en la inspección heurística. Los valores *observados* provienen de las pruebas con P01 y P02 y se registran aparte. Datos en [recorrido-emocional.csv](recorrido-emocional.csv) y gráfico en `recorrido-emocional.png`.

| T1 | T2 | T3 | T4 | T5 | T6 | T7 |
|---|---|---|---|---|---|---|
| 0 | -1 | -1 | -1 | **-2** | **-2** | -1 |

## 5. Relación con el resto del trabajo
Cada problema se convierte en un requisito (ver `requisitos.md`) y en un caso de prueba (ver `trazabilidad.md`).
