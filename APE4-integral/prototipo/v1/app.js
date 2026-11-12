/* Prototipo v1 — Portal de Tutorías FISEI (todo simulado, sin servidor)
   Parámetros: ?fallo=red (primer envío falla)  ?demora=4000 (demora en ms, por defecto 1800)
   Horarios ocupados: Ing. Caiza · Mar 10 nov · 10:00  |  Ing. Paredes · Mié 11 nov · 09:00 */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const params = new URLSearchParams(location.search);
  const DEMORA = Number(params.get('demora')) || 1800;

  const DATOS = {
    materias: ['Interacción Humano-Computador', 'Bases de datos', 'Ingeniería de Software'],
    docentes: ['Ing. Caiza', 'Ing. Paredes', 'Ing. Villacís'],
    fechas: ['Lun 9 nov', 'Mar 10 nov', 'Mié 11 nov', 'Jue 12 nov'],
    horas: ['08:00', '09:00', '10:00', '11:00', '15:00', '16:00'],
  };
  const OCUPADOS = ['Ing. Caiza|Mar 10 nov|10:00', 'Ing. Paredes|Mié 11 nov|09:00'];

  const estado = {
    tutorias: [{ id: 'TUT-0001', materia: 'Bases de datos', docente: 'Ing. Paredes', fecha: 'Jue 12 nov', hora: '09:00', modalidad: 'Presencial' }],
    siguiente: 2,
    fallosRed: params.get('fallo') === 'red' ? 1 : 0,
    pendienteCancelar: null,
  };

  const PANTALLAS = ['inicio', 'formulario', 'exito', 'mis'];
  function ir(nombre) {
    PANTALLAS.forEach((p) => { $('#' + p).hidden = p !== nombre; });
    document.body.dataset.pantalla = nombre;
    if (nombre === 'mis') pintarLista();
  }

  function llenarSelect(id, opciones, vacio) {
    $('#' + id).innerHTML = '<option value="">' + vacio + '</option>' + opciones.map((o) => '<option>' + o + '</option>').join('');
  }
  llenarSelect('materia', DATOS.materias, 'Selecciona una materia');
  llenarSelect('docente', DATOS.docentes, 'Selecciona un docente');
  llenarSelect('fecha', DATOS.fechas, 'Selecciona una fecha');
  $('#horas').innerHTML = DATOS.horas.map((h) => '<label class="slot"><input type="radio" name="hora" value="' + h + '"><span>' + h + '</span></label>').join('');

  function leer() {
    const f = $('#form');
    return {
      materia: f.materia.value, docente: f.docente.value, fecha: f.fecha.value,
      hora: (f.querySelector('input[name=hora]:checked') || {}).value || '',
      modalidad: f.querySelector('input[name=modalidad]:checked').value,
      motivo: f.motivo.value.trim(),
    };
  }
  function hayErrores(d) { return !d.materia || !d.docente || !d.fecha || !d.hora || d.motivo.length < 10; }

  // v1: un solo mensaje genérico, sin indicar qué campo falla
  function mostrarError(msg) { const r = $('#resumen-errores'); r.textContent = msg; r.hidden = false; }

  $('#form').addEventListener('submit', (ev) => {
    ev.preventDefault();                       // v1: sin protección contra doble envío
    const d = leer();
    $('#resumen-errores').hidden = true;
    if (hayErrores(d)) { mostrarError('Error: datos incompletos.'); return; }
    $('#spinner').hidden = false;              // v1: solo un spinner, sin texto ni bloqueo del botón
    setTimeout(() => {
      $('#spinner').hidden = false;
      if (estado.fallosRed > 0) { estado.fallosRed--; $('#spinner').hidden = true; mostrarError('Error. Intente nuevamente.'); return; }
      if (OCUPADOS.includes([d.docente, d.fecha, d.hora].join('|'))) { $('#spinner').hidden = true; mostrarError('Error: horario no disponible.'); return; }
      $('#spinner').hidden = true;
      const id = 'TUT-' + String(estado.siguiente++).padStart(4, '0');
      estado.tutorias.push({ id, materia: d.materia, docente: d.docente, fecha: d.fecha, hora: d.hora, modalidad: d.modalidad });
      $('#form').reset();
      ir('exito');                              // v1: «Listo ✔» sin resumen ni código
    }, DEMORA);
  });

  function pintarLista() {
    $('#lista').innerHTML = estado.tutorias.map((t) => {
      const conf = estado.pendienteCancelar === t.id;
      return '<li><strong>' + t.id + '</strong> · ' + t.materia + '<br>' + t.docente + ' · ' + t.fecha + ' · ' + t.hora + ' · ' + t.modalidad +
        '<div class="acc">' + (conf
          ? '<span>¿Cancelar esta tutoría?</span><button type="button" class="btn primario" data-si="' + t.id + '">Sí, cancelar</button><button type="button" class="btn secundario" data-no="1">No</button>'
          : '<button type="button" class="btn secundario" data-cancelar="' + t.id + '">Cancelar tutoría</button>') + '</div></li>';
    }).join('');
    $('#vacio').hidden = estado.tutorias.length > 0;
  }
  $('#lista').addEventListener('click', (ev) => {
    const b = ev.target.closest('button'); if (!b) return;
    if (b.dataset.cancelar) estado.pendienteCancelar = b.dataset.cancelar;
    else if (b.dataset.no) estado.pendienteCancelar = null;
    else if (b.dataset.si) { estado.tutorias = estado.tutorias.filter((t) => t.id !== b.dataset.si); estado.pendienteCancelar = null; }
    pintarLista();
  });

  document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => { estado.pendienteCancelar = null; ir(b.dataset.go); }));
  const agendar = () => { $('#resumen-errores').hidden = true; ir('formulario'); };
  $('#btn-agendar').addEventListener('click', agendar);
  $('#btn-agendar2').addEventListener('click', agendar);
  document.body.dataset.pantalla = 'inicio';
})();
