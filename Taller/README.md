# Taller — Transformación Responsive (Clase 2)

Transformación de la interfaz de "Tienda Aula" a un diseño **responsive Mobile First** sin perder principios HCI.

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` + `styles.css` | Versión final (DESPUÉS) |
| `antes/` | Archivos originales del taller (ANTES) |
| `capturas/` | Capturas ANTES y DESPUÉS a 375×812, 768×1024 y 1440×900 |
| `Guia_Taller_Responsive.docx` | Guía original del taller |

## Problemas detectados en el diseño inicial

- `main` con ancho fijo de `1100px`: desbordamiento horizontal en móvil y tablet.
- Cuadrícula fija de 3 columnas, sin adaptarse al ancho disponible.
- Enlaces de navegación y botones pequeños (área táctil insuficiente).
- Sin `@media` ni estados `:hover`/`:focus`.
- Al agregar un producto solo cambiaba una línea de texto, sin retroalimentación visual clara.

## Cumplimiento de requisitos

| Req. | Cómo se cumple |
|---|---|
| R1 | Se conserva `header`, `nav`, `main`, `section` y `footer`; las secciones se asocian a su título con `aria-labelledby`. |
| R2 | CSS base pensado para móvil (1 columna); `min-width` añade 2 columnas (≥768 px) y 3 (≥1024 px). |
| R3 | Dos media queries: `min-width: 768px` (caben 2 tarjetas de ~340 px) y `min-width: 1024px` (caben 3 de ~320 px). |
| R4 | **Grid** para las tarjetas (cuadrícula de dos dimensiones con columnas iguales que cambian por breakpoint). **Flexbox** para la navegación y el encabezado (filas de una dimensión con reparto de espacio). |
| R5 | Texto base de 16 px, colores con contraste ≥ 7:1 (comentados en `:root`), `aria-label` en cada botón, foco visible (`:focus-visible`). |
| R6 | `main` pasó de `width:1100px` a `width:100%; max-width:1100px`. Sin desbordamiento a 375, 768 y 1440 px (ver capturas). |
| R7 | Al agregar: el botón cambia a verde con "✔ Agregado", aparece un mensaje de estado resaltado y se actualiza el contador del carrito; todo se restablece a los 2 s. |
| R8 | Capturas en `capturas/` y código modificado en este directorio. |

## Dos mejoras HCI

1. **Ley de Fitts / áreas táctiles:** botones y enlaces de navegación de al menos 48 px de alto, y botones de ancho completo en móvil, lo que los hace más fáciles de alcanzar con el pulgar.
2. **Visibilidad del estado del sistema (heurística de Nielsen):** el botón, el mensaje y el contador del carrito confirman visualmente cada acción; el mensaje usa `role="status"` para que también se anuncie a lectores de pantalla.

## Capturas

| Tamaño | Antes | Después |
|---|---|---|
| 375×812 | `capturas/antes_375x812.png` | `capturas/despues_375x812.png` |
| 768×1024 | `capturas/antes_768x1024.png` | `capturas/despues_768x1024.png` |
| 1440×900 | `capturas/antes_1440x900.png` | `capturas/despues_1440x900.png` |
