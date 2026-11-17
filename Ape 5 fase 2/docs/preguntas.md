# Defensa cruzada QA/UX · APE 5 Fase 2

**Grupo defensor:** G1 (Juan, Sandro, Shantall y Korayma)
**Grupo retador:** G3
**Código y mediciones citados:** `Ape 5 fase 1/src/` y `Ape 5 fase 2/resultados/pruebas.md`

Cada respuesta se apoya en el código, en una medición y en un principio HCI. Las respuestas están preparadas antes de la defensa; el acta de lo que ocurrió en el aula se completa al final de este documento.

---

## Pregunta técnica 1 · Punto de corte en CSS y orden por teclado con Tab

**Respuesta preparada**

- **Qué se hizo.** El CSS base es de una sola columna (`grid-template-columns: 1fr`) y solo se agrega la segunda columna dentro de `@media (min-width: 48rem)`, que equivale a 768 px con la letra base de 16 px (`estilos.css`). Es Mobile-First: lo móvil es la regla por defecto y escritorio añade, no deshace.
- **Por qué 48rem y no 768px.** El `rem` sigue el tamaño de letra que la persona configuró en el navegador; con letra ampliada, el punto de corte se desplaza y evita comprimir dos columnas en una pantalla donde el texto ya ocupa más.
- **Por qué 768 y no otro valor.** Es el ancho donde caben dos tarjetas legibles (420 px y 280 px de columna, medido). Debajo de ese ancho la columna de estado quedaría demasiado estrecha.
- **Orden con Tab.** El orden del HTML es taller → «Reservar» → «Cancelar» → «Mi reserva». No se usa `order` en CSS ni `tabindex` (0 elementos con `tabindex`), así que el orden visual y el orden de Tab son idénticos en 320, 360, 768 y 1366 px. Comprobado con pulsaciones reales: Tab llega primero a «Reservar un lugar».
- **Principio HCI.** WCAG 1.3.2 (secuencia significativa) y 2.4.3 (orden del foco): lo que se ve y lo que se navega deben coincidir.
- **Dato.** `scrollWidth ≤ innerWidth` en los 12 casos medidos (`pruebas.md`, tabla 1).

**Si el grupo retador objeta:** «¿Y si en escritorio quisieran la reserva a la izquierda y el taller a la derecha?» → habría que cambiar el HTML, no usar `order`, para no separar el orden visual del orden de Tab.

---

## Pregunta técnica 2 · Envíos duplicados con `disabled` y gestión del foco

**Respuesta preparada**

- **Prevención del duplicado.** Al confirmar, `reserva.js` pone `btnReservar.disabled = true`. Un `<button>` deshabilitado no dispara `click` ni con ratón, ni con Enter ni con Espacio. Verificado: tras Enter sobre «Reservar», un segundo Enter ya cae sobre «Cancelar» y no reserva otra vez.
- **Por qué hay que mover el foco.** Un botón que se deshabilita deja de ser enfocable y el foco se pierde (pasa al `<body>`), por lo que quien usa teclado tendría que volver a ubicarse con Tab. Por eso `confirmar()` llama a `btnCancelar.focus()` y `cancelar()` llama a `btnReservar.focus()`: el foco siempre queda en el único botón disponible. Medido: «Enter sobre Reservar → foco en `btn-cancelar`»; «Enter sobre Cancelar → foco en `btn-reservar`».
- **Cómo se entera quien no ve.** El mensaje cambia dentro de `<p role="status">`, una región viva con `aria-live="polite"` implícito: el lector de pantalla lo anuncia sin mover el foco.
- **Principios HCI.** Nielsen: prevención de errores, visibilidad del estado del sistema, control y libertad del usuario (cancelar). WCAG 2.4.3 (orden del foco) y 4.1.3 (mensajes de estado).
- **Límite que el equipo reconoce.** `disabled` no es un control del servidor: si hubiera un backend, también debería rechazar la segunda petición (idempotencia). En este prototipo el estado vive solo en el navegador. Además, un botón con `disabled` desaparece del orden de Tab; una alternativa es `aria-disabled="true"`, pero exige bloquear el clic por código.

---

## Objeción de diseño · Ajuste geométrico vs. comprensión real del usuario

**Objeción esperada:** «Que no haya desborde no demuestra que la interfaz sea comprensible.»

**Respuesta preparada**

- **El equipo está de acuerdo en parte.** La medición de `scrollWidth` demuestra solo la **geometría**: nada se sale de la pantalla. No demuestra que la persona entienda qué pasó al pulsar «Reservar». Un diseño puede caber perfecto y aun así confundir.
- **Por eso hay una segunda prueba.** La hoja `resultados/checklist.md` mide con personas ajenas al grupo: tiempo de tarea, errores de navegación, solicitudes de ayuda y dificultades, con una consigna neutral que no dice qué botón pulsar.
- **Qué se contrasta.** La hipótesis de la Fase 1: la confirmación puede pasar inadvertida en móvil. Se considera cumplida si al menos 4 de 5 participantes notan la confirmación sin ayuda.
- **Decisión de diseño que responde a esto.** El estado no depende de la posición: se anuncia con `role="status"`, cambia de color y de texto, y el foco se traslada, de modo que hay tres señales y no una.
- **Límite.** Con pocos participantes los resultados orientan mejoras, no son estadísticamente concluyentes.

---

## Acta de la defensa (completar durante/después de la sesión)

| Dato | Registro |
|---|---|
| Fecha y hora |  |
| Grupo retador | G3 |
| Integrantes del G3 presentes |  |
| Integrantes del G1 que respondieron |  |

| N.º | Pregunta formulada por el G3 (textual) | Respuesta dada por el G1 | Evidencia mostrada | Resultado |
|---|---|---|---|---|
| Técnica 1 |  |  |  |  |
| Técnica 2 |  |  |  |  |
| Objeción |  |  |  |  |

**Observaciones del grupo retador:** 
**Compromisos de mejora acordados:** 
