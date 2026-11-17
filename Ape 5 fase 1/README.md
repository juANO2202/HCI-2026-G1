# APE 5 · Fase 1 · Del boceto a la interfaz web adaptable

Grupo 1 (G1) · HCI 2026. Transformación del Boceto A (Aula Abierta · Talleres) en una interfaz adaptable con HTML5 semántico, CSS Mobile-First e interacción accesible por teclado.

## Contenido

```
Ape 5 fase 1/
├── boceto/prototipo-A.html     # boceto original de escritorio (ancho fijo 960 px)
├── src/
│   ├── index.html              # estructura semántica
│   ├── estilos.css             # Mobile-First, punto de corte 48rem (768 px)
│   └── reserva.js              # estados Disponible → Confirmada → Cancelada
├── docs/
│   ├── proyecto.md             # ficha de aplicación y diagnóstico
│   └── enunciado-ape5-fase1.txt
├── capturas/                   # 360 px (boceto y nueva), 768 px y 1366 px
└── Entrega_APE5_Fase1.docx     # documento corto para el aula virtual
```

## Cómo probarlo

Abrir `src/index.html` en el navegador (no requiere servidor) y reducir el ancho a 360 px.

1. **Tab** lleva el foco a «Reservar un lugar»; **Enter** confirma.
2. El botón se deshabilita y el foco pasa a «Cancelar reserva»; el estado aparece en «Mi reserva».
3. **Enter** en «Cancelar reserva» libera el lugar y devuelve el foco a «Reservar un lugar».
