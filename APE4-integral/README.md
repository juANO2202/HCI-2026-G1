# APE 4 Integral · Portal de Tutorías FISEI

Universidad Técnica de Ambato · FISEI · Carrera de Software · Interacción Humano-Computador · 5.º nivel, paralelo B
**Caso asignado:** Tutorías (agendar una tutoría con un docente).

## Equipo

| Integrante | Cuenta GitHub | Rama | Issue asignada |
|---|---|---|---|
| Juan | [@juANO2202](https://github.com/juANO2202) | `juan/diagnostico` | #34 |
| Shantall | Shantall | `shantall/arquitectura` | #35 |
| Korayma | Korayna | `korayma/prototipo-v1` | #36 |
| Sandro | Sandro | `sandro/pruebas-v2` | #37 |

## Caso, persona y tarea

- **Persona:** Andrea, 21 años, estudiante de 5.º nivel de Software. Usa su celular entre clases.
- **Contexto:** semana previa a evaluaciones; necesita una tutoría de *Interacción Humano-Computador*.
- **Tareas:** **T1** localizar la opción de agendar · **T2** llenar el formulario y corregir un error · **T3** finalizar y confirmar.
- **Restricción:** conexión Wi-Fi del campus inestable (el sistema debe mostrar progreso y no perder datos).
- **Fallo adicional del sistema actual:** no confirma si la tutoría quedó registrada y, ante un error, borra lo escrito.

## Cómo abrir el prototipo

**Prototipo en Figma (herramienta principal):** https://www.figma.com/design/c1B497wZukkYE1xtiP256N — páginas `v1` y `v2`, modo Presentar (▶). El registro de estados y transiciones está en [prototipo/v1/README.md](prototipo/v1/README.md) y [prototipo/v2/README.md](prototipo/v2/README.md).

**Réplica en código** (sin instalar nada, doble clic en el navegador):

- **v1 (antes de la prueba):** `prototipo/v1/index.html`
- **v2 (después de la prueba):** `prototipo/v2/index.html`
- Para probar la ruta de error de red: agregar `?fallo=red` a la dirección (el primer envío falla). Para alargar la carga: `?demora=4000`.
- Horarios ocupados (ruta de error de conflicto): **Ing. Caiza · Mar 10 nov · 10:00** y **Ing. Paredes · Mié 11 nov · 09:00**.
- Teclado: Tab / Shift+Tab para moverse, Espacio/flechas para elegir la hora, Enter para enviar.

**Técnica y fidelidad:** prototipo *clic a clic* en HTML/CSS/JS, fidelidad **alta en interacción** y **media en aspecto**; es *horizontal* (todos los flujos principales, poca profundidad). Simula el servidor; no permite probar rendimiento real, integración con el sistema académico ni datos reales.

## Contenido

| Archivo | Qué es |
|---|---|
| [diagnostico.md](diagnostico.md) · [recorrido-emocional.csv](recorrido-emocional.csv) · `recorrido-emocional.png` | Diagnóstico, 7 touchpoints, 2 momentos de verdad, curva emocional |
| [requisitos.md](requisitos.md) · `sitemap.png` · `user-flow.png` · [componentes.md](componentes.md) · [wireframes/](wireframes/) | Arquitectura y diseño |
| [trazabilidad.md](trazabilidad.md) | Matriz requisito → flujo → componente → prueba → hallazgo/commit |
| [prototipo/v1/](prototipo/v1/) · [prototipo/v2/](prototipo/v2/) | Prototipos navegables |
| [pruebas/protocolo.md](pruebas/protocolo.md) · [pruebas/resultados.csv](pruebas/resultados.csv) · [pruebas/hallazgos.md](pruebas/hallazgos.md) | Prueba de usabilidad y accesibilidad |
| [iteracion/antes-despues.md](iteracion/antes-despues.md) | Comparación v1/v2 |
| [evidencias/](evidencias/) · [conclusiones.md](conclusiones.md) | Evidencias y cierre |

## Enlaces de trabajo (completar con las URL reales del repositorio)

- Issues: `<URL-REPO>/issues` (individuales #34–#37, problemas #38–#42, hallazgos #43–#45)
- Pull Requests: `<URL-REPO>/pulls`
- Commits: `<URL-REPO>/commits/main`
- Protocolo: [pruebas/protocolo.md](pruebas/protocolo.md) · Resultados: [pruebas/resultados.csv](pruebas/resultados.csv)
- Decisiones: [iteracion/antes-despues.md](iteracion/antes-despues.md)

## Fuentes conceptuales (no copiadas)

[HCI-2026-G1](https://github.com/juANO2202/HCI-2026-G1) (curva emocional, momentos de verdad) · [Grupo_2__Exposicion](https://github.com/DavidPe1307/Grupo_2__Exposicion) (R1–R6, sitemap, user flow, trazabilidad) · [Grupo_3_Exposicion](https://github.com/Mauri10G/Grupo_3_Exposicion) (técnicas y fidelidad de prototipado, v1→prueba→v2).
