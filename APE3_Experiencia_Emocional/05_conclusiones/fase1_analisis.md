# Fase 1: Análisis del flujo de pago en línea

**Responsable:** Juan · **Grupo:** G1 · HCI-2026
**Flujo analizado:** compra de un celular y pago en línea.
**Interfaz A:** Mercado Libre. **Interfaz B:** SuperOfertas Ecuador (prototipo del grupo).

---

## 1. Usuario objetivo del pago en línea

**Quién compra.** Persona de 18 a 35 años, estudiante o con su primer empleo, que usa el celular y la computadora a diario. Compra en línea de forma ocasional a frecuente (de una vez al mes a varias al mes), sobre todo tecnología, ropa y artículos del hogar. Paga con tarjeta de débito o crédito. Ya conoce las tiendas grandes, pero no siempre las pequeñas.

**Qué quiere lograr al pagar.** Terminar la compra sin errores, pagar un monto que ya conocía y saber que el pedido quedó registrado y llegará a su domicilio.

**Qué espera de la plataforma.**
- **Rapidez:** pocos pasos y formularios cortos.
- **Seguridad:** señales visibles de que sus datos de tarjeta están protegidos.
- **Precio final claro:** que el total del carrito sea el mismo que paga al final.
- **Confianza en el cobro:** que se le cobre una sola vez, por lo que aceptó, y que reciba una confirmación.

**Qué lo frustra.**
- Costos que aparecen al final (envío, comisiones) y no estaban en el carrito.
- Casillas premarcadas que agregan una suscripción sin que la haya pedido.
- Pedir datos personales que no hacen falta (cédula, fecha de nacimiento) sin explicar por qué.
- Errores de pago sin explicación o que no aclaran si ya se cobró.
- Urgencia artificial (cuenta regresiva, "oferta única") que lo presiona a decidir.

---

## 2. Usabilidad vs. experiencia de usuario

**Usabilidad.** Es qué tan fácil, eficiente y libre de errores resulta completar una tarea concreta. Se mide con cosas como tiempo, errores y número de pasos.

*Ejemplo observado (Mercado Libre, carrito):* el aviso "Agrega una dirección para calcular el envío" viene con un botón azul "Agregar dirección", justo debajo, en el mismo bloque. El resumen de compra a la derecha muestra producto, descuento y total, y el botón "Continuar (1)" ocupa todo el ancho del panel. La persona sabe qué hacer en cada momento y completa el paso con pocos clics.

**Experiencia de usuario (UX).** Es todo lo que la persona siente, piensa y hace antes, durante y después de usar el producto, incluyendo confianza, estrés, agrado y recuerdo posterior (Norman, 2004).

*Ejemplo distinto (SuperOfertas, paso de pago):* el usuario ve el total de $214.82 después de haber visto "envío gratis" antes. Aunque el formulario de tarjeta funcione, siente que le ocultaron algo y duda de pagar. La emoción (desconfianza) no depende de si pudo o no llenar el formulario.

**Por qué un flujo puede ser usable y aun así dar mala experiencia.** La usabilidad responde a "¿puedo hacerlo?" y la UX a "¿cómo me sentí al hacerlo y volvería a hacerlo?". En SuperOfertas se puede completar el pago: hay campos de tarjeta, vencimiento y CVV, y un botón "PAGAR AHORA". Pero la tarea se logra con desconfianza, presión y la sensación de que cobran de más. El flujo cumple su función y la experiencia es mala, y es esa experiencia la que decide si la persona vuelve a comprar.

---

## 3. Cualidades de cada interfaz

### Interfaz A: Mercado Libre

| Tipo | Cualidad | Justificación en pantalla |
|---|---|---|
| Pragmática | **Claridad** | El resumen de compra separa Producto, Descuento y Total en filas alineadas, con el descuento en verde y el total en tamaño grande: se entiende de un vistazo cuánto se paga. |
| Pragmática | **Eficiencia** | Cada elemento tiene una sola acción principal: "Agregar dirección" resuelve el aviso naranja y "Continuar (1)" avanza, sin pasos extra ni campos innecesarios. |
| Hedónica | **Sensación de confianza** | La marca reconocible (logo y cabecera amarilla), el nombre del vendedor y el "Resumen de compra" con "Ahorras US$ 593,69" dan la impresión de una plataforma establecida y transparente. |
| Hedónica | **Estética agradable y ordenada** | Fondo gris claro con tarjetas blancas, buen contraste y mucho espacio en blanco hacen que la pantalla se vea limpia y tranquila. |

### Interfaz B: SuperOfertas Ecuador

| Tipo | Cualidad | Justificación en pantalla |
|---|---|---|
| Pragmática | **Claridad (parcial)** | El resumen "Tu pedido" lista Producto $197.33, Envío $12.50, Comisión $4.99 y Total $214.82, y la barra "1. Carrito … 5. Pagar" indica en qué paso se está. Es un punto a favor, aunque los costos aparecen recién aquí. |
| Pragmática | **Facilidad para completar el pago** | El formulario es corto (forma de pago, número, vencimiento, CVV) y "PAGAR AHORA" es un botón grande y fácil de encontrar. |
| Hedónica | **Estímulo de urgencia/atracción** | El banner rojo "¡OFERTA ÚNICA!" y el contador "09:59" buscan emocionar con una oferta, y algunos compañeros lo marcaron a favor de B. |
| Hedónica | **Baja sensación de confianza (cualidad ausente)** | El fondo amarillo saturado, la tipografía mezclada, el error "Ofertta del dia!!!" y la casilla premarcada "Suscribirme a ofertas premium ($9.99/mes)" transmiten descuido y hacen dudar de a quién se le entrega la tarjeta. |

Las dos cualidades hedónicas de B se incluyen para contrastar: la primera es lo que el diseño intenta provocar y la segunda es lo que realmente se percibe.

---

## 4. Pregunta de reflexión 1

**¿Por qué una interfaz puede ser funcional y usable, pero generar una experiencia emocional negativa?**

Porque funcional y usable solo dicen que la tarea se puede completar con poco esfuerzo, y no dicen nada sobre cómo se siente la persona mientras lo hace. La experiencia emocional se forma con otras cosas: la confianza, la honestidad, el respeto por el usuario y el estilo visual.

En el pago de SuperOfertas el usuario sí puede pagar, pero:
- ve "envío gratis" y luego se encuentra con un envío de $12.50 y una comisión de $4.99, lo que se siente como una trampa;
- tiene una suscripción de $9.99 al mes premarcada, que puede cobrarle algo que no pidió;
- ve una cuenta regresiva que lo presiona a decidir sin pensar;
- ingresa los datos de su tarjeta en una pantalla con errores de ortografía y colores chillones que no inspiran seguridad.

Además, las emociones pesan más que la eficiencia en el recuerdo. Según la regla pico-final (Kahneman et al., 1993), las personas recuerdan una experiencia por su momento más intenso y por cómo termina. En un pago, el momento de verdad es justo cuando se entregan la tarjeta y el dinero: si ahí aparece una sorpresa o una duda, esa emoción negativa define la opinión sobre toda la plataforma, aunque los pasos anteriores hayan sido fáciles.

Por eso una interfaz puede cumplir la usabilidad y fracasar en la experiencia. Dicho de otra forma, la usabilidad es necesaria pero no suficiente: para que el usuario confíe y vuelva, el flujo también debe ser transparente y generar tranquilidad. Esto coincide con la votación de la clase, donde 14 compañeros confiaron más en la Interfaz A y 2 en la B (`docs/preguntas.md`).

---

## Referencias

- Norman, D. (2004). *Emotional Design: Why We Love (or Hate) Everyday Things.* Basic Books.
- Kahneman, D., Fredrickson, B., Schreiber, C. y Redelmeier, D. (1993). When more pain is preferred to less: Adding a better end. *Psychological Science, 4*(6).
- Material del grupo: `docs/investigacion.md`, `docs/preguntas.md`, `prototipos/original/`.
