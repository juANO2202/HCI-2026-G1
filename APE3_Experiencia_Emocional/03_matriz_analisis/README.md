## 2. Registro de las pruebas

Resumen de cada sesión, con las reacciones, dudas, pausas y frases textuales.

| Participante | Interfaz | Tiempo (min) | Reacciones y pausas | Dudas | Frases textuales |
| --- | --- | --- | --- | --- | --- |
| P1 · Camila (21, estudiante) | A · Mercado Libre | 4:10 | Navegó con seguridad; no dudó en carrito ni en datos de envío (autocompletados).<br>Pausa de ~8 s en la pantalla de cuotas. | ¿Las cuotas tienen interés? | "Ya me lo sé de memoria, solo reviso el total." |
| P1 · Camila | B · SuperOfertas | 5:15 | Pausa de ~15 s en datos de envío: el formulario rechazó el teléfono sin explicar el formato.<br>Frunció el ceño al ver el error; revisó los campos uno por uno.<br>En el pago buscó con la mirada algún sello de seguridad. | ¿Qué dato está mal?<br>¿Esta página es segura? | "¿Qué dato está mal? No me dice."<br>"No veo ningún candado ni nada que diga que es seguro." |
| P2 · Luis (45, comerciante) | B · SuperOfertas (primero) | 8:40 | Pausa de ~35 s antes de ingresar la tarjeta; dejó el cursor quieto y pidió confirmar con un familiar.<br>Estuvo a punto de abandonar en el método de pago.<br>Tras pagar, esperó en la pantalla sin saber si había terminado. | ¿A dónde va mi dinero?<br>¿Ya pagué o no? | "No conozco esta tienda, ¿a dónde va mi plata?"<br>"¿Ya pagué? No me salió nada claro." |
| P2 · Luis | A · Mercado Libre | 6:30 | Pausa de ~20 s al pedir datos de la tarjeta, pero la completó sin ayuda.<br>Se quejó de la cantidad de pasos, aunque avanzó con tranquilidad. | ¿Y si me cobran dos veces? | "Hay muchos pasos, pero se ve que es una empresa grande." |
| P3 · Andrés (28, ingeniero) | A · Mercado Libre | 3:20 | Pagó con saldo de Mercado Pago; flujo fluido.<br>Pausa de ~6 s ante una oferta de seguro/garantía extendida; hizo un gesto de molestia. | ¿Qué es esta oferta? No la pedí. | "Aquí no hay sorpresas, el total se ve desde el carrito."<br>"¿Y esto qué es? Yo no pedí ningún seguro." |
| P3 · Andrés | B · SuperOfertas | 4:45 | Valoró el carrito simple y los pocos pasos.<br>Reacción de sorpresa al ver el envío (+$3,50) recién en el último paso.<br>Confirmación breve, sin número de pedido; buscó un correo. | ¿Me llegará un correo de confirmación? | "Es más directo que Mercado Libre."<br>"Ah, ahora aparece el envío, esto me cuesta más de lo que pensé." |

## 3. Matriz de emociones, problemas y recomendaciones

La matriz une cada emoción observada con su causa y una recomendación. Prioridad: Alta (afecta la confianza o puede causar abandono), Media, Baja. "Mantener" marca las fortalezas.

| ID | Interfaz | Momento | Emoción observada | Problema y evidencia | Recomendación | Prioridad |
| --- | --- | --- | --- | --- | --- | --- |
| M1 | B · SuperOfertas | Método de pago | Desconfianza, ansiedad | Sin sellos de seguridad, logos de tarjetas ni datos de contacto. P2 dudó 35 s y casi abandona; P1: "No veo ningún candado". Heurística: visibilidad del estado y confianza percibida. | Agregar candado, logos de tarjetas, texto "Pago seguro", política de devolución y un medio de contacto visible junto al formulario. | Alta |
| M2 | B · SuperOfertas | Revisión final de costos | Sorpresa negativa, sensación de engaño | El envío (+$3,50) aparece solo en el último paso. P3: "esto me cuesta más de lo que pensé". Heurística: visibilidad del estado del sistema. | Mostrar un estimado de envío en el carrito y un desglose (subtotal, envío, total) en todos los pasos. | Alta |
| M3 | B · SuperOfertas | Datos de envío | Confusión, frustración | Error genérico "Dato inválido" sin indicar el campo ni el formato. P1: "¿Qué dato está mal?". Heurística 9 de Nielsen: ayudar a reconocer y corregir errores. | Validación en línea, mensajes específicos por campo y ejemplo de formato (ej.: 09XXXXXXXX). | Alta |
| M4 | B · SuperOfertas | Confirmación | Incertidumbre | Sin número de pedido ni indicación de envío de correo. P2: "¿Ya pagué?"; P3 buscó un correo. Heurística: retroalimentación. | Pantalla de confirmación con número de pedido, resumen, fecha estimada y aviso de correo enviado. | Alta |
| M5 | A · Mercado Libre | Cuotas / método de pago | Duda leve | P1 pausó 8 s ante las cuotas; P2 temió un doble cobro. | Indicar "sin interés" o el costo exacto junto al total y aclarar que el cobro se hace una sola vez. | Media |
| M6 | A · Mercado Libre | Todo el flujo | Cansancio leve | Muchos pasos para un usuario poco frecuente (P2). Carga cognitiva. | Mostrar un indicador de progreso (paso X de Y) y reducir pantallas intermedias. | Media |
| M7 | A · Mercado Libre | Ofertas adicionales (seguro) | Molestia leve | P3 no entendió ni pidió la oferta de seguro. Consistencia y control del usuario. | Presentar las ofertas como opción claramente opcional, fuera del camino principal de pago. | Baja |
| M8 | B · SuperOfertas | Carrito y flujo general | Satisfacción por simplicidad | P3: "Es más directo que Mercado Libre." Pocos pasos y carrito claro. | Mantener la simplicidad al corregir M1–M4, sin añadir pasos innecesarios. | Mantener |
| M9 | A · Mercado Libre | Confirmación y costos | Seguridad, alivio | El total visible desde el carrito y una confirmación clara fueron valorados por los tres participantes. | Conservar como referencia para el rediseño de B. | Mantener |

## 4. Momentos de verdad

Son los instantes del flujo que más pesan en la confianza y la satisfacción. Se identificaron tres.

| ID | Momento | Influye en | Qué se observó | Por qué es un momento de verdad |
| --- | --- | --- | --- | --- |
| MV1 | Ingreso de datos de pago | Confianza | Fuerte. Con B: P1 buscó sellos de seguridad, P2 se detuvo 35 s y casi abandona. Con A: pausas cortas (20 s) y confianza apoyada en la marca. | B transmite menos seguridad que A: sin candado, logos de tarjetas ni política de devolución visibles. La marca conocida (A) compensa la complejidad. |
| MV2 | Revelación del costo total (envío) | Satisfacción | Fuerte. Con B, P3 sintió sorpresa negativa al ver el envío al final. Con A, el total se ve desde el carrito y no hay sorpresas. | Un costo oculto hasta el último paso rompe la expectativa y genera sensación de engaño, aunque el flujo sea corto. |
| MV3 | Confirmación de la compra | Confianza y cierre | Media-alta. Con B, P2 y P3 no supieron si el pago se había completado. Con A, la confirmación fue clara. | Sin número de pedido ni mensaje claro, el usuario termina la compra con incertidumbre, lo que reduce la probabilidad de recompra. |

## 5. Insumo para la curva emocional

Emoción predominante observada por touchpoint, como referencia para que Sandro asigne las valoraciones de -3 a +3 en su curva.

| Touchpoint | A · Mercado Libre | B · SuperOfertas |
| --- | --- | --- |
| Inicio / búsqueda | Tranquilidad | Tranquilidad |
| Carrito | Seguridad (total visible) | Satisfacción por simplicidad; sorpresa al final por costos |
| Datos de envío | Comodidad (autocompletado) | Confusión y frustración (error genérico) |
| Método de pago | Duda leve (cuotas, doble cobro) | Desconfianza y ansiedad |
| Revisión final de costos | Seguridad | Sorpresa negativa (envío) |
| Confirmación | Alivio | Incertidumbre |
