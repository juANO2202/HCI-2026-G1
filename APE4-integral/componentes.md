# Inventario de componentes

Clasificación Atomic Design. Cada componente se justifica con un requisito.

| Componente | Nivel | Estados | Req. | Dónde aparece |
|---|---|---|---|---|
| Botón primario / secundario | Átomo | normal, hover, foco, deshabilitado («Guardando…») | R1, R6 | Inicio, Formulario, Éxito |
| Campo de lista (select) | Átomo | vacío, con valor, error | R2 | Formulario |
| Botón de hora (slot) | Átomo | normal, seleccionado, foco, error | R3 | Formulario |
| Área de texto | Átomo | vacío, con valor, error | R4 | Formulario |
| Mensaje de error en línea | Átomo | oculto, visible | R5 | Formulario |
| Indicador de carga con texto | Átomo | oculto, visible | R6 | Formulario |
| Grupo de campo (etiqueta + control + error) | Molécula | normal, error | R2–R4 | Formulario |
| Resumen de errores (con enlaces a cada campo) | Molécula | oculto, error de validación, error de servidor | R5 | Formulario |
| Tarjeta de tutoría | Molécula | normal, confirmando cancelación | R6 | Mis tutorías |
| Resumen de confirmación (código, materia, docente, fecha, hora) | Molécula | visible | R6 | Éxito |
| Barra de navegación (Inicio / Mis tutorías) | Organismo | página actual | R1 | Todas |
| Formulario de agendado | Organismo | normal, cargando, error, éxito | R2–R6 | Formulario |
