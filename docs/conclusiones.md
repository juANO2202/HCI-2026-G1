# Conclusiones
**Responsable:** Juan (aportan todos)

## Hallazgos principales
- **La clase confió más en la Interfaz A (Mercado Libre):** 14 votos frente a 2 para la Interfaz B (SuperOfertas Ecuador). Coincide con la hipótesis del grupo. Detalle en `docs/preguntas.md` (Parte 1) y fotos de las hojas de registro en `evidencias/`.
- **La confianza se decide en detalles concretos, no solo en el aspecto:** precio final que no cambia, datos pedidos con su motivo, mensajes claros y señales de seguridad pesaron tanto como el diseño visual.
- **Los momentos de verdad del flujo de compra** son el carrito (la promesa de precio y envío), el domicilio (primeros datos sensibles), el resumen del pedido (donde el total cambia) y el pago. En la Interfaz B, tres de esos cuatro generaban emoción negativa (`resultados/comparacion-antes-despues.md`).
- **Algunos compañeros marcaron como razones a favor de B** los descuentos llamativos, la visualización de los pasos de compra y los botones fáciles de identificar. Esto muestra que un descuento atrae, pero no basta para generar confianza si luego aparecen costos que no se anunciaron.

## Qué generó confianza / desconfianza
**Generó confianza (Interfaz A):**
- Diseño limpio, profesional y ordenado, con buen contraste y paleta de colores.
- Marca conocida y calificaciones de vendedores.
- Información concreta de precio, entrega y producto, con resúmenes de compra que reducen la necesidad de recordar datos.
- Flujo con opciones claras para editar y regresar, y prevención de errores al pedir la dirección.
- Pide pocos datos personales y explica para qué.

**Generó desconfianza (Interfaz B):**
- Colores saturados y llamativos, cuenta regresiva y faltas de ortografía.
- "Envío gratis" que luego se cobra (envío $12.50 y comisión $4.99 sobre el total).
- Suscripción premarcada y tarjeta sin señales de seguridad.
- Demasiados datos personales (cédula, fecha de nacimiento) sin justificarlos.
- Mapa confuso, con el botón "Omitir" más llamativo que "Guardar".

## Mejoras aplicadas y su efecto (antes/después)
Se aplicaron tres mejoras en la propuesta corregida (`prototipos/propuesta/`, código en `src/index.html`):
1. **Transparencia de precios:** descuento explicado, sin urgencia falsa y total fijo con envío y comisión visibles desde el carrito.
2. **Formularios claros y justificados:** solo los datos necesarios, cada uno con su motivo, provincia en lista, "Usar mi ubicación" y mapa guiado con "Guardar dirección" como acción principal.
3. **Pago seguro y sin trampas:** candado y aviso de seguridad, casilla de ofertas desmarcada y errores que dicen qué corregir y si hubo cobro.

**Efecto estimado** (`resultados/comparacion-antes-despues.md`): los touchpoints con emoción negativa pasan de 6 de 7 a 0 de 7, y los momentos de verdad con emoción negativa de 3 de 4 a 0 de 4. Son valores estimados por el grupo, no una medición con la clase; para validarlos habría que volver a mostrar la propuesta a los compañeros.

## Aprendizajes del grupo
- Juan: La confianza en una interfaz se construye paso a paso y se pierde en un solo momento de verdad. Registrar las razones de los compañeros mostró que lo que más pesa son la claridad y la honestidad, más que el diseño bonito.
- Sandro: Entender la curva emocional y los momentos de verdad permite ver dónde se gana o se pierde la confianza. Un buen diseño no depende de un solo paso, sino de que todo el recorrido sea coherente.
- Shantall: Mapear los touchpoints con la clase mostró que los problemas más graves aparecen cuando se piden datos y cuando el precio cambia. Escuchar a los compañeros ayuda a ver fallos que el grupo ya no notaba.
- Korayma: Corregir una interfaz exige resolver cada problema con una decisión concreta: explicar el descuento, justificar cada dato y dar señales de seguridad. Comparar antes y después deja claro qué mejoras importan más.
