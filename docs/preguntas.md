# Preguntas y dinámica de la clase

## Parte 1 · Apertura (Responsable: Juan)

**Pregunta:** ¿Cuál de las dos interfaces les genera mayor confianza y por qué?

**Tipo de pantalla comparada:** flujo de compra en línea (carrito, domicilio, datos de quien recibe, mapa y pago).

- **Interfaz A:** Mercado Libre. Capturas en `prototipos/original/A-mercadolibre-*`.
- **Interfaz B:** "SuperOfertas Ecuador", prototipo ficticio hecho por el grupo con fallos de usabilidad deliberados. Capturas en `prototipos/original/B-*`.
- **Enlace al prototipo B:** https://www.figma.com/design/V25WlazWUwoHqjBJNBKPXC/Untitled?node-id=0-1&t=Xo5vtfvCFKRnvlb5-1

**Hipótesis del grupo:** la Interfaz A genera más confianza porque es una marca conocida, con diseño ordenado, mensajes claros y un proceso predecible. La Interfaz B debería generar dudas por sus fallos deliberados.

**Resultados (votos):** (completar después de la dinámica en clase)

- Interfaz A:
- Interfaz B:

**Razones más repetidas:** (completar después de la dinámica en clase)

-

**Diferencias clave que explican la confianza:**

| Aspecto               | Interfaz A (Mercado Libre)                                                     | Interfaz B (SuperOfertas)                                                                               |
| --------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Descuentos            | Precio tachado con etiqueta "60% OFF" y resumen claro del ahorro               | "80% OFF" sin explicar y "¡SOLO QUEDA 1 UNIDAD!" en rojo                                                |
| Costo de envío        | "Envío gratis" que se mantiene hasta el final                                  | Dice "Envío gratis" y al final aparecen envío y comisión que suben el total                             |
| Domicilio             | Etiquetas claras, "Usar mi ubicación", provincia en lista desplegable          | Etiquetas pequeñas y grises, provincia como texto libre, pide cédula y fecha de nacimiento sin explicar |
| Datos de quien recibe | Explica el motivo: "Llamaremos si hay un problema con la entrega"              | Pide nombre, teléfono, correo y cédula sin justificar, con botón "Guardar" diminuto                     |
| Mapa                  | "Asegúrate que el pin esté bien ubicado" y botón principal "Guardar dirección" | Pin mal ubicado, sin instrucciones, "Omitir" más llamativo que "Guardar"                                |
| Pago                  | Resumen consistente y datos de facturación explicados                          | Casilla de suscripción premarcada, tarjeta sin candado y "Error 500" al pagar                           |
| Estilo visual         | Limpio, jerarquía clara, colores sobrios                                       | Colores chocantes, banners, cuenta regresiva falsa y faltas de ortografía                               |

## Parte 2 · Actividad de la clase (Responsable: Shantall)

Interfaz entregada: **Interfaz B · "SuperOfertas Ecuador"** (flujo de compra: carrito, domicilio, datos de quien recibe, mapa y pago). Archivos en `prototipos/original/B-*`.

### Instrucciones para los compañeros

1. Recorran la interfaz de principio a fin como si fueran a comprar el producto.
2. Anoten **6 a 8 touchpoints** (cada pantalla o punto de contacto del recorrido).
3. Marquen **mínimo 2 momentos de verdad** (instantes donde el usuario decide seguir, dudar o abandonar la compra).
4. Para cada touchpoint indiquen la emoción (positiva / neutra / negativa) y el problema detectado.
5. Propongan **3 mejoras** concretas.

### Ficha de la actividad (para completar en clase)

Integrantes del equipo:

| #          | Touchpoint | ¿Momento de verdad? (Sí/No) | Emoción | Problema detectado |
| ---------- | ---------- | --------------------------- | ------- | ------------------ |
| 1          |            |                             |         |                    |
| 2          |            |                             |         |                    |
| 3          |            |                             |         |                    |
| 4          |            |                             |         |                    |
| 5          |            |                             |         |                    |
| 6          |            |                             |         |                    |
| 7 _(opc.)_ |            |                             |         |                    |
| 8 _(opc.)_ |            |                             |         |                    |

Requisitos: **6–8 touchpoints · mínimo 2 momentos de verdad · 3 mejoras propuestas.**

### Mejoras propuestas por la clase

1.
2.
3.

---

### Análisis inicial del grupo

Curva emocional: `resultados/curva-inicial.png` . Basada en las capturas `prototipos/original/B-1-carrito` a `B-5-finaliza-compra`.

| #   | Touchpoint                              | ¿Momento de verdad? | Emoción  | Problema detectado                                                                                                                                                                                                                                   |
| --- | --------------------------------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Primera impresión (encabezado y banner) | No                  | Negativa | Fondo amarillo con rojo y verde chocantes, banner "¡OFERTA ÚNICA!", cuenta regresiva 09:59 que se repite igual en todas las pantallas, faltas de ortografía ("Ofertta", "Envio grattis"), enlaces "ayuda??" y "Mi cuenta" poco claros                |
| 2   | Carrito: precio, descuento y envío      | **Sí (positivo)**   | Positiva | Atrae con "80% OFF" ($986.68 a $197.33) y "Envío gratis" (aparece 3 veces), pero el descuento no se explica, "¡SOLO QUEDA 1 UNIDAD!" presiona, "modelo de demostración Nuevo!!!" se contradice y "Continuar" es gris y pequeño, parece deshabilitado |
| 3   | Domicilio                               | **Sí**              | Negativa | Etiquetas pequeñas y grises, campos desalineados, provincia y ciudad como texto libre, pide cédula y fecha de nacimiento sin explicar, aparece "Error: dato invalido" sin decir cuál campo falla                                                     |
| 4   | Datos de quien recibe                   | No                  | Negativa | Pide nombre, teléfono, correo y cédula (repetida del paso anterior) sin justificar; "Guardar" gris y pequeño, lejos del formulario                                                                                                                   |
| 5   | Mapa                                    | No                  | Negativa | El pin rojo está lejos de la dirección marcada ("123"), sin instrucciones; "OMITIR »" verde y enorme frente a "Guardar dirección" gris y diminuto; mensaje de presión "¡¡No pierdas la Ofertta!!"                                                    |
| 6   | Resumen del pedido (total final)        | **Sí**              | Negativa | Prometía "Envío gratis" y el total era $197.33, pero ahora suma envío $12.50 y comisión $4.99 = $214.82, sin avisar del cambio                                                                                                                       |
| 7   | Pago con tarjeta                        | **Sí**              | Negativa | Sin candado ni aviso de seguridad, casilla "Suscribirme a ofertas premium ($9.99/mes)" premarcada con aviso en letra gris pequeña, botón "PAGAR AHORA" rojo y dominante                                                                              |

Justificación de los momentos de verdad:

- **Carrito (2), positivo:** el precio y el envío gratis generan la ilusión que hace seguir; todo lo que viene después se compara con esta promesa.
- **Domicilio (3):** primer punto donde se piden datos sensibles (cédula, fecha de nacimiento); aquí se decide si se confía en el sitio.
- **Resumen del pedido (6):** se rompe la promesa de "Envío gratis"; es el punto típico de abandono.
- **Pago (7):** la persona entrega su tarjeta; sin señales de seguridad y con una suscripción oculta, la confianza se rompe.

Mejoras propuestas por el grupo:

1. Transparencia de precios: descuento explicado, sin urgencia falsa y envío/comisión visibles desde el carrito, con total que no cambia al final.
2. Formularios claros y justificados: etiquetas legibles y alineadas, provincia en lista, "Usar mi ubicación", sin cédula ni fecha de nacimiento, motivo de cada dato, mapa con instrucciones y "Guardar dirección" como acción principal.
3. Pago seguro y sin trampas: candado y aviso de seguridad, casilla de suscripción desmarcada, errores que digan cuál campo falló y si hubo cobro, y paleta sobria sin cuenta regresiva falsa.
