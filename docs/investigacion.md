# Investigación: Emoción y experiencia de usuario

**Responsable:** Sandro · **Grupo:** G1 · HCI-2026

## 1. Emoción y experiencia de usuario (UX)

La UX no es solo que una interfaz sea usable: es todo lo que la persona **siente, piensa y hace** antes, durante y después de usarla. Donald Norman (2004) propone que el diseño actúa en tres niveles:

| Nivel | Qué es | Ejemplo en una interfaz |
|---|---|---|
| Visceral | Primera impresión, estética, reacción inmediata | Una pantalla limpia y ordenada genera agrado antes de leer nada |
| Conductual | Facilidad y eficacia al usar | Un botón claro que hace lo que se espera |
| Reflexivo | Interpretación posterior y recuerdo | "Esta app me hizo perder tiempo, no la vuelvo a usar" |

**Idea clave:** las emociones influyen en cómo evaluamos la usabilidad. Un usuario con una emoción positiva tolera mejor los errores pequeños; uno frustrado percibe todo como peor de lo que es.

## 2. Curva emocional

La **curva emocional** (o *emotional journey*) es un gráfico que muestra cómo cambia el estado de ánimo del usuario a lo largo de una tarea.

- **Eje X:** pasos o touchpoints de la interacción, en orden.
- **Eje Y:** emoción, de negativa (frustración, confusión) a positiva (satisfacción, alivio).
- **Cómo se construye:** se lista cada paso, se asigna una valoración (por ejemplo de -2 a +2), se unen los puntos y se anota **por qué** sube o baja.

**Regla pico-final (peak-end):** las personas recuerdan una experiencia sobre todo por su momento más intenso y por cómo termina, no por el promedio (Kahneman et al., 1993). Por eso importa arreglar los puntos más bajos y cerrar bien el flujo.

```
 +2 |            *
 +1 |   *                       *
  0 |        
 -1 |                *
 -2 |                     
    +--------------------------------
      Inicio  Registro  Pago  Error  Confirmación
```
*(Ejemplo ilustrativo, no es el resultado de nuestra interfaz.)*

## 3. Touchpoints (puntos de contacto)

Un **touchpoint** es cualquier punto donde el usuario interactúa con el producto o servicio. En una interfaz digital incluye pantallas, botones, formularios, mensajes de error, notificaciones, correos de confirmación y ayuda.

Ejemplos en una tienda en línea: página de inicio → búsqueda → ficha de producto → carrito → pago → confirmación → correo de seguimiento.

Se mapean en un *customer journey map* (Gibbons, 2018; Lemon y Verhoef, 2016) para ver el recorrido completo y detectar dónde aparecen los problemas.

## 4. Momentos de verdad

Jan Carlzon (1987), de la aerolínea SAS, llamó **momentos de verdad** a los instantes en que el cliente entra en contacto con la empresa y se forma (o cambia) su opinión sobre ella.

En UX, un momento de verdad es un touchpoint **crítico**: si sale bien, refuerza la confianza; si sale mal, el usuario puede abandonar.

| Momento de verdad típico | Si falla… | Si funciona… |
|---|---|---|
| Primer contacto / registro | Se va antes de empezar | Sigue adelante con buena disposición |
| Pago o envío de datos | Desconfía y abandona | Siente seguridad |
| Mensaje de error | Se frustra, culpa al sistema | Entiende y corrige |
| Confirmación final | Duda de si funcionó | Cierra con tranquilidad |

**Cómo identificarlos:** son los puntos donde la curva emocional tiene sus caídas más fuertes o sus picos más altos.

## 5. Confianza en interfaces

La confianza es la disposición del usuario a depender del sistema y a darle datos o dinero. Se construye con señales visibles:

- **Claridad:** textos entendibles, sin sorpresas ni costos ocultos.
- **Coherencia visual:** diseño profesional y consistente (la apariencia influye en la credibilidad percibida; Fogg et al., 2003).
- **Control:** el usuario puede deshacer, cancelar y ver el estado de lo que hace.
- **Retroalimentación:** el sistema responde a cada acción (cargando, éxito, error explicado).
- **Transparencia:** quién es la organización, cómo se usan los datos, datos de contacto.
- **Seguridad percibida:** indicadores de protección en pagos y datos personales.

Pregunta de la dinámica: *¿cuál interfaz les genera más confianza y por qué?* Las razones que den suelen caer en estas categorías, y conviene clasificarlas así al registrar los votos.

## 6. Oportunidades de mejora

Una **oportunidad de mejora** es un cambio concreto en un touchpoint que sube la curva emocional. Una buena propuesta indica:

1. Qué problema se observó (y en qué touchpoint).
2. Qué emoción provocaba.
3. Qué cambio se propone.
4. Qué emoción se espera después.

Ejemplo: *Problema:* el formulario borra todo al fallar un campo (frustración). *Mejora:* conservar lo escrito y marcar solo el campo con error (alivio).

## 7. Explicación breve para la clase (≈3 min)

1. **Emoción y UX:** lo que sentimos al usar algo decide si lo recomendamos o lo abandonamos.
2. **Curva emocional:** dibujamos cómo cambia el ánimo paso a paso; los puntos más bajos son los problemas y los más altos, lo que hay que conservar.
3. **Momentos de verdad:** los pasos donde se gana o se pierde la confianza (registro, pago, errores, confirmación).
4. **Oportunidades de mejora:** convertimos cada caída de la curva en un cambio concreto.
5. **Su turno:** con la interfaz que les damos, identifiquen 6–8 touchpoints, marquen mínimo 2 momentos de verdad y propongan 3 mejoras.

## Referencias

- Carlzon, J. (1987). *Moments of Truth*. Ballinger Publishing.
- Norman, D. A. (2004). *Emotional Design: Why We Love (or Hate) Everyday Things*. Basic Books.
- Kahneman, D., Fredrickson, B. L., Schreiber, C. A., & Redelmeier, D. A. (1993). When more pain is preferred to less: Adding a better end. *Psychological Science, 4*(6), 401–405.
- Gibbons, S. (2018). Journey Mapping 101. *Nielsen Norman Group*. https://www.nngroup.com/articles/journey-mapping-101/
- Lemon, K. N., & Verhoef, P. C. (2016). Understanding customer experience throughout the customer journey. *Journal of Marketing, 80*(6), 69–96.
- Fogg, B. J., et al. (2003). How do users evaluate the credibility of Web sites? *Proceedings of DUX 2003*. ACM.
