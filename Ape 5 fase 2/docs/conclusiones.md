# Conclusiones · APE 5

## Requisito

La persona que usa el celular debe poder ver el estado de su reserva sin desplazarse horizontalmente y completar la tarea (reservar y cancelar) solo con teclado, sin poder duplicar la acción.

## Decisión

Se transformó el Boceto A (ancho fijo de 960 px) en una interfaz Mobile-First: una columna base y dos columnas desde `48rem`, HTML5 semántico, botones nativos, estado en `<p role="status">`, bloqueo del botón con `disabled` y traslado del foco al botón disponible.

## Dato observado

- A 360 px el boceto original tiene un `scrollWidth` de 960 px y deja fuera de la pantalla el panel «Mi reserva»; la interfaz nueva mide 360 px de `scrollWidth` en 360 px de ventana.
- En los cuatro viewports (320, 360, 768 y 1366 px) y en los tres estados de la tarea, `scrollWidth ≤ innerWidth` (12 de 12 casos, sin desborde).
- Con pulsaciones reales de teclado, Enter y Espacio completan Disponible → Confirmada → Cancelada, el botón pulsado queda deshabilitado y el foco pasa al botón que queda disponible.
- Observación con usuarios: [completar con los datos de `resultados/checklist.md`].

## Limitación

- La medición se hizo con la emulación de dispositivos de un navegador de escritorio, no en celulares reales, y sin lector de pantalla.
- El estado de la reserva se guarda solo en el navegador: al recargar la página se pierde. Un servicio real tendría que rechazar también la segunda petición.
- La geometría correcta no prueba por sí sola que la persona entienda la interfaz; eso lo mide la observación con usuarios, que tiene pocos participantes.
- La pantalla trabajada es una sola (reserva de un taller).

## Siguiente iteración

1. Probar en un celular real y con un lector de pantalla (TalkBack o NVDA) para confirmar que se anuncia el cambio de estado.
2. Si menos de 4 de 5 participantes notan la confirmación sin ayuda, acercar el mensaje al botón o mostrarlo como aviso destacado.
3. Guardar la reserva (por ejemplo en `localStorage` primero y en un servicio después) y devolver un error claro si la reserva ya existe.
4. Extender la misma estructura a la lista de varios talleres.

## Aprendizaje de cada integrante

- **Juan:** «Aprendí que medir el `scrollWidth` demuestra que todo cabe, pero no que la persona entienda la pantalla; por eso hay que probar con usuarios.»
- **Sandro:** «Aprendí a pensar el CSS desde el celular: una columna base y la segunda columna solo desde 48rem.»
- **Shantall:** «Aprendí que un botón deshabilitado pierde el foco y que hay que moverlo al botón disponible para no dejar perdido a quien usa teclado.»
- **Korayma:** «Aprendí que con etiquetas semánticas y botones nativos se logra accesibilidad por teclado sin código adicional.»
