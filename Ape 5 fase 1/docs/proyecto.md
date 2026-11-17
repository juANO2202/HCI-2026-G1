# Ficha de aplicación al proyecto · APE 5 Fase 1

**Pantalla:** Aula Abierta · Talleres (Boceto A transformado en interfaz adaptable)

## 1. Diagnóstico del Boceto A a 360 px

El boceto fija `body{width:960px}` y una grilla `580px 360px`. A 360 px de ancho:

- La columna **«Mi reserva»** (el panel de estado) queda a la derecha del taller y **no se ve**: la persona solo percibe el taller y el botón.
- Aparece **desplazamiento horizontal**; el texto del pie de página también se corta.
- El botón «Reservar un lugar» llega **deshabilitado** y no existe forma de cancelar.
- Consecuencia: quien reserva **no recibe confirmación visible** de lo que hizo, porque el resultado de la acción está justo en la parte oculta.

## 2. Secuencia de la tarea

| Elemento | Definición |
|---|---|
| **Actor** | Estudiante que quiere asistir a un taller de Aula Abierta, usando principalmente el celular. |
| **Tarea** | Reservar un lugar en el taller «Interfaces web accesibles» y, si cambia de idea, cancelarlo. |
| **Dato decisivo** | Día, horario y lugar del taller (jueves, 14:00 a 16:00, Laboratorio 2) y el estado de **su** reserva. |
| **Acción principal** | Pulsar «Reservar un lugar» (y, como acción inversa, «Cancelar reserva»). |
| **Estado final** | Reserva confirmada, visible en «Mi reserva»; o, tras cancelar, reserva cancelada y lugar liberado. |

Los tres momentos de la tarea son **Disponible → Confirmada → Cancelada**.

## 3. Regla de negocio y criterio de aceptación

**Regla de negocio:** una persona puede tener **una sola reserva activa** por taller. Mientras la reserva esté confirmada no se puede reservar de nuevo, y cancelar libera el lugar.

**Criterio de aceptación medible:**

1. A 360 px de ancho **no hay desplazamiento horizontal** (`scrollWidth` ≤ ancho de la ventana) y el panel «Mi reserva» es visible sin desplazarse horizontalmente.
2. Al pulsar «Reservar un lugar», el botón queda `disabled` y el mensaje de estado cambia a «Reserva confirmada…» en **un solo clic**.
3. Tras confirmar, el foco pasa automáticamente a «Cancelar reserva»; tras cancelar, vuelve a «Reservar un lugar». Todo el flujo se completa **solo con teclado** (Tab, Enter/Espacio).
4. El cambio de distribución a dos columnas ocurre a partir de **48rem (768 px)** y el orden de lectura del HTML (taller → mi reserva) **no cambia**.

## 4. Decisión HCI justificada

| Decisión | Justificación |
|---|---|
| Diseño **Mobile-First** con una columna base y dos columnas desde 48rem | El actor usa el celular; así el panel de estado nunca se pierde y el CSS solo añade, no deshace. |
| El **estado** de la reserva va en `<p role="status">` | Es una región viva: los lectores de pantalla anuncian el cambio sin mover el foco (WCAG 4.1.3). |
| **Botones nativos** `<button>` | Navegables con Tab y activables con Enter/Espacio sin código extra (WCAG 2.1.1). |
| **Bloquear** «Reservar» al confirmar (`disabled`) | Previene la acción duplicada (heurística de Nielsen: prevención de errores). |
| **Mover el foco** al botón que sigue disponible | Quien usa teclado no pierde su posición cuando el botón pulsado se deshabilita (WCAG 2.4.3). |
| Ver el estado y poder **cancelar** | Visibilidad del estado del sistema y control y libertad del usuario (Nielsen). |
| Medidas en `rem`, objetivos táctiles de 44 px mínimo | Respeta el tamaño de letra del usuario y facilita pulsar en pantalla táctil (WCAG 2.5.8). |

## 5. Pendiente para la Fase 2

Registrar la revisión entre pares y validar la hipótesis planteada en el documento de entrega.
