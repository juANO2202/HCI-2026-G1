# Conclusiones y preguntas de reflexión

**Responsable:** Juan (aportan todos) · **Grupo:** G1 · HCI-2026
**Flujo analizado:** pagos en línea. Interfaz A: Mercado Libre. Interfaz B: SuperOfertas Ecuador.

---

## Pregunta de reflexión 1

**¿Por qué una interfaz puede ser funcional y usable, pero generar una experiencia emocional negativa?**

Ver la respuesta completa en [`fase1_analisis.md`](fase1_analisis.md#4-pregunta-de-reflexión-1). En resumen: la usabilidad mide si la tarea se puede completar con poco esfuerzo, y la experiencia emocional depende además de la confianza, la honestidad y la sensación de control. En SuperOfertas el pago se puede completar, pero el envío y la comisión que aparecen al final, la suscripción premarcada y la cuenta regresiva hacen que el usuario se sienta engañado y presionado.

---

## Pregunta de reflexión 2

**¿Qué momento de verdad afecta más la confianza?**

El que más afecta la confianza es el **resumen del pedido, donde el total cambia**, seguido del **pago**.

- En la curva inicial de la Interfaz B, el resumen del pedido es el punto más bajo (casi "muy negativa"). Ahí el total sube de $197.33 a $214.82 por un envío de $12.50 y una comisión de $4.99, después de haber visto "Envío gratis" en el carrito.
- La caída es más fuerte que en otros pasos porque rompe una promesa. El carrito era el punto más alto de la curva, y precisamente por eso la caída posterior duele más.
- El pago le sigue porque es donde la persona entrega su tarjeta y su dinero: sin candado ni aviso de seguridad, con una suscripción de $9.99/mes premarcada y un error sin explicación.
- Esto coincide con lo que dijo la clase: entre las razones por las que votaron por la Interfaz A (14 de 16 votos) estaban el precio honesto, el resumen de compra y los pocos datos pedidos (`docs/preguntas.md`).
- También coincide con la regla pico-final (Kahneman et al., 1993): la gente recuerda el punto más intenso y el final, y en un flujo de compra ambos coinciden con el cobro.

---

## Pregunta de reflexión 3

**¿Cómo demostrar que las mejoras favorecen la experiencia de usuario?**

Con lo que tenemos hoy **no se puede demostrar todavía**, solo estimar. Las curvas "después" y los indicadores (de 6 a 0 de 7 touchpoints con emoción negativa, y de 3 a 0 de 4 momentos de verdad) son una estimación del grupo, no una medición con usuarios (`resultados/comparacion-antes-despues.md`).

Para demostrarlo habría que:

1. **Volver a probar con los compañeros.** Mostrar la propuesta (`prototipos/propuesta/`) a un grupo parecido al de la primera prueba y repetir la curva emocional con la misma escala y los mismos 7 touchpoints.
2. **Comparar con la misma medida.** Poner la curva de antes y la de después en un mismo gráfico, como en `resultados/comparacion-curvas.png`, y ver si el punto más bajo sube.
3. **Repetir la votación de confianza.** Preguntar de nuevo qué interfaz da más confianza, ahora con la propuesta frente a la original, y ver si cambia el resultado (hoy 14 a 2 a favor de A).
4. **Medir la tarea y la emoción.** Registrar cuántas personas completan el pago, cuántas dudan o abandonan, y cuánto dicen que confían en el cobro, con una escala corta de satisfacción.

Cada mejora se vincula a un problema concreto, lo que permite comprobar si se corrigió:

| Mejora | Problema que corrige | Qué mirar al probar |
|---|---|---|
| 1. Transparencia de precios | Total que cambia, "envío gratis" que se cobra, urgencia falsa | ¿El total final coincide con el del carrito sin que sorprenda? |
| 2. Formularios claros y justificados | Datos de más sin motivo, errores sin explicación, mapa confuso | ¿Completan el domicilio sin dudar ni equivocarse? |
| 3. Pago seguro y sin trampas | Tarjeta sin señales de seguridad, suscripción premarcada, error sin aviso de cobro | ¿Dicen que confían en pagar y entienden si hubo cobro? |

---

## Conclusiones del grupo

- **Usabilidad y experiencia no son lo mismo.** Un flujo puede dejar completar la compra y aun así dar desconfianza. Lo que decide si el usuario vuelve es cómo se sintió.
- **La confianza se pierde en un solo momento de verdad.** Se construye paso a paso y se rompe cuando el precio cambia o se piden datos sin razón.
- **La honestidad pesa más que el diseño bonito.** La clase votó por A por su claridad, su precio estable y sus datos justificados, además de por el diseño limpio. Un descuento llamativo atrae, pero no sostiene la confianza si luego aparecen costos no anunciados.
- **Tres mejoras resuelven la mayoría de los problemas:** transparencia de precios, formularios claros y justificados, y pago seguro y sin trampas.
- **Limitación:** el efecto de las mejoras es una estimación del grupo. Falta validarlo con usuarios.

---

## Aprendizajes del grupo

- **Juan:** la confianza en una interfaz se construye paso a paso y se pierde en un solo momento de verdad. Registrar las razones de los compañeros mostró que lo que más pesa son la claridad y la honestidad, más que el diseño bonito.
- **Sandro:** entender la curva emocional y los momentos de verdad permite ver dónde se gana o se pierde la confianza. Un buen diseño no depende de un solo paso, sino de que todo el recorrido sea coherente.
- **Shantall:** mapear los touchpoints con la clase mostró que los problemas más graves aparecen cuando se piden datos y cuando el precio cambia. Escuchar a los compañeros ayuda a ver fallos que el grupo ya no notaba.
- **Korayma:** corregir una interfaz exige resolver cada problema con una decisión concreta: explicar el descuento, justificar cada dato y dar señales de seguridad. Comparar antes y después deja claro qué mejoras importan más.

---

## Referencias

- Kahneman, D., Fredrickson, B., Schreiber, C. y Redelmeier, D. (1993). When more pain is preferred to less: Adding a better end. *Psychological Science, 4*(6).
- Material del grupo: `docs/preguntas.md`, `docs/conclusiones.md`, `resultados/comparacion-antes-despues.md`.
