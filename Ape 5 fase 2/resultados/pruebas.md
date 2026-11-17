# Pruebas técnicas · APE 5 Fase 2

**Interfaz probada:** `Ape 5 fase 1/src/index.html` (Aula Abierta · Talleres).
**Navegador:** Microsoft Edge (motor Chromium) con emulación de dispositivo de DevTools (protocolo CDP, `Emulation.setDeviceMetricsOverride`), zoom al 100 % (`devicePixelRatio = 1`).
**Fecha:** 17 de noviembre de 2026.

## 1. Medición de desborde horizontal

Se midió `document.documentElement.scrollWidth` y `window.innerWidth` en tres momentos de la tarea (inicial, reserva confirmada y reserva cancelada), porque el mensaje de confirmación es el texto más largo de la pantalla.

| Viewport | Estado | scrollWidth (px) | innerWidth (px) | scrollWidth ≤ innerWidth | Columnas de `.contenido` |
|---|---|---|---|---|---|
| 320 × 720 | inicial | 320 | 320 | Sí | 1 (288 px) |
| 320 × 720 | confirmada | 320 | 320 | Sí | 1 (288 px) |
| 320 × 720 | cancelada | 320 | 320 | Sí | 1 (288 px) |
| 360 × 800 | inicial | 360 | 360 | Sí | 1 (328 px) |
| 360 × 800 | confirmada | 360 | 360 | Sí | 1 (328 px) |
| 360 × 800 | cancelada | 360 | 360 | Sí | 1 (328 px) |
| 768 × 1024 | inicial | 768 | 768 | Sí | 2 (420 px · 280 px) |
| 768 × 1024 | confirmada | 768 | 768 | Sí | 2 (420 px · 280 px) |
| 768 × 1024 | cancelada | 768 | 768 | Sí | 2 (420 px · 280 px) |
| 1366 × 768 | inicial | 1366 | 1366 | Sí | 2 (588 px · 392 px) |
| 1366 × 768 | confirmada | 1366 | 1366 | Sí | 2 (588 px · 392 px) |
| 1366 × 768 | cancelada | 1366 | 1366 | Sí | 2 (588 px · 392 px) |

**Resultado:** en los 12 casos `scrollWidth ≤ innerWidth`; no hay desborde horizontal. El cambio de una a dos columnas ocurre exactamente al llegar a 768 px (`48rem`), que es el punto de corte definido.

**Contraste con el Boceto A** (ancho fijo de 960 px), medido con el mismo método:

| Viewport | scrollWidth (px) | innerWidth (px) | scrollWidth ≤ innerWidth |
|---|---|---|---|
| 360 × 800 | 960 | 360 | **No** (600 px de desborde) |
| 320 × 720 | 960 | 320 | **No** (640 px de desborde) |

El panel «Mi reserva» queda fuera de la pantalla. Captura: `evidencias/boceto-A-360x800-desborde.png`.

## 2. Prueba de teclado (pulsaciones reales Tab / Enter / Espacio, 360 × 800)

| Acción | Foco resultante | «Reservar» | «Cancelar» | Estado anunciado en `role="status"` |
|---|---|---|---|---|
| Carga de la página | `<body>` | habilitado | deshabilitado | «Aún no tienes una reserva.» |
| Tab | «Reservar un lugar» | habilitado | deshabilitado | sin cambio |
| Tab (de nuevo) | sale de la página (el botón «Cancelar» deshabilitado se omite) | habilitado | deshabilitado | sin cambio |
| Enter sobre «Reservar» | «Cancelar reserva» | **deshabilitado** | habilitado | «Reserva confirmada: …» |
| Enter sobre «Cancelar» | «Reservar un lugar» | habilitado | **deshabilitado** | «Reserva cancelada. …» |
| Espacio sobre «Reservar» | «Cancelar reserva» | deshabilitado | habilitado | «Reserva confirmada: …» |

**Orden de lectura del DOM** (idéntico en todos los anchos): título → datos del taller (`dl`) → «Reservar un lugar» → «Cancelar reserva» → «Mi reserva» → mensaje de estado.
**Elementos con `tabindex`:** 0. No se usa `order` en CSS; el orden visual coincide con el orden del HTML.

## 3. Evidencias (carpeta `evidencias/`)

| Archivo | Contenido |
|---|---|
| `viewport-320x720-inicial.png` · `viewport-320x720-confirmada.png` | 320 × 720 px |
| `viewport-360x800-inicial.png` · `viewport-360x800-confirmada.png` | 360 × 800 px |
| `viewport-768x1024-inicial.png` · `viewport-768x1024-confirmada.png` | 768 × 1024 px |
| `viewport-1366x768-inicial.png` · `viewport-1366x768-confirmada.png` | 1366 × 768 px |
| `boceto-A-360x800-desborde.png` | Boceto A a 360 × 800 px (contraste) |

## 4. Cómo repetir la medición en DevTools

1. Abrir `Ape 5 fase 1/src/index.html` en Edge o Chrome y pulsar F12.
2. Activar la barra de dispositivos (Ctrl + Shift + M), elegir «Responsive», zoom al 100 %, y escribir cada tamaño.
3. En la consola ejecutar `[document.documentElement.scrollWidth, window.innerWidth]` y comprobar que el primer valor no supera al segundo.

## 5. Límites de esta prueba

- Se probó en un navegador de escritorio con emulación, no en celulares reales.
- No se usó lector de pantalla; el uso de `role="status"` se justifica por la especificación, pero no se verificó con NVDA/TalkBack.
