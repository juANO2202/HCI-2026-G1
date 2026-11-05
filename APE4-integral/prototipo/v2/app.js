/* Prototipo v2 — Portal de Tutorías FISEI (todo simulado, sin servidor)
   Parámetros útiles para pruebas y defensa:
     ?fallo=red     -> el primer envío falla por «falta de conexión» (ruta de error de red)
     ?demora=4000   -> demora simulada del envío en ms (por defecto 1800)
   Horarios ocupados (ruta de error de conflicto):
     Ing. Caiza · Mar 10 nov · 10:00     |     Ing. Paredes · Mié 11 nov · 09:00 */
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
    enviando: false,
    fallosRed: params.get('fallo') === 'red' ? 1 : 0,
    pendienteCancelar: null,
  };

  /* ---------- navegación entre pantallas ---------- */
  const PANTALLAS = ['inicio', 'formulario', 'exito', 'mis'];
  function ir(nombre) {
    PANTALLAS.forEach((p) => { $('#' + p).hidden = p !== nombre; });
    document.body.dataset.pantalla = nombre;
    if (nombre === 'mis') pintarLista();
    const h1 = $('#' + nombre + ' h1');
    if (h1) h1.focus();                       // [v2-A3] el foco sigue al cambio de pantalla
    window.scrollTo(0, 0);
  }
  function anunciar(texto) { $('#anuncios').textContent = ''; setTimeout(() => { $('#anuncios').textContent = texto; }, 50); }

  /* ---------- construcción del formulario ---------- */
  function llenarSelect(id, opciones, vacio) {
    const el = $('#' + id);
    el.innerHTML = '<option value="">' + vacio + '</option>' + opciones.map((o) => '<option>' + o + '</option>').join('');
  }
  llenarSelect('materia', DATOS.materias, 'Selecciona una materia');
  llenarSelect('docente', DATOS.docentes, 'Selecciona un docente');
  llenarSelect('fecha', DATOS.fechas, 'Selecciona una fecha');
  $('#horas').innerHTML = DATOS.horas.map((h) => '<label class="slot"><input type="radio" name="hora" value="' + h + '"><span>' + h + '</span></label>').join('');

  /* ---------- validación ---------- */
  const MENSAJES = {
    materia: 'Elige la materia de la tutoría.',
    docente: 'Elige el docente.',
    fecha: 'Elige una fecha.',
    hora: 'Elige una hora.',
    motivo: 'Cuéntanos con qué necesitas ayuda (mínimo 10 caracteres).',
  };
  function leer() {
    const f = $('#form');
    return {
      materia: f.materia.value, docente: f.docente.value, fecha: f.fecha.value,
      hora: (f.querySelector('input[name=hora]:checked') || {}).value || '',
      modalidad: f.querySelector('input[name=modalidad]:checked').value,
      motivo: f.motivo.value.trim(),
    };
  }
  function validar(d) {
    const e = {};
    if (!d.materia) e.materia = MENSAJES.materia;
    if (!d.docente) e.docente = MENSAJES.docente;
    if (!d.fecha) e.fecha = MENSAJES.fecha;
    if (!d.hora) e.hora = MENSAJES.hora;
    if (d.motivo.length < 10) e.motivo = MENSAJES.motivo;
    return e;
  }
  function limpiarErrores() {
    ['materia', 'docente', 'fecha', 'hora', 'motivo'].forEach((c) => {
      const p = $('#err-' + c); p.hidden = true; p.textContent = '';
      const campo = document.getElementById(c); if (campo) campo.removeAttribute('aria-invalid');
    });
    const r = $('#resumen-errores'); r.hidden = true; r.innerHTML = '';
  }
  // [v2-H1] errores junto a cada campo + resumen con enlaces + foco al primero
  function mostrarErrores(e) {
    limpiarErrores();
    const claves = Object.keys(e);
    claves.forEach((c) => {
      const p = $('#err-' + c); p.textContent = e[c]; p.hidden = false;
      const campo = document.getElementById(c); if (campo) campo.setAttribute('aria-invalid', 'true');
    });
    const r = $('#resumen-errores');
    r.innerHTML = '<strong>Revisa ' + claves.length + (claves.length === 1 ? ' campo' : ' campos') + ':</strong><ul>' +
      claves.map((c) => '<li><a href="#' + (c === 'hora' ? 'horas' : c) + '" data-campo="' + c + '">' + e[c] + '</a></li>').join('') + '</ul>';
    r.hidden = false;
    r.focus();
  }
  $('#resumen-errores').addEventListener('click', (ev) => {
    const a = ev.target.closest('a[data-campo]'); if (!a) return;
    ev.preventDefault();
    const c = a.dataset.campo;
    (c === 'hora' ? $('#horas input') : document.getElementById(c)).focus();
  });
  // al corregir un campo se quita su error (feedback inmediato)
  $('#form').addEventListener('input', (ev) => {
    const n = ev.target.name; const p = $('#err-' + n);
    if (p && !p.hidden && leer()[n]) { p.hidden = true; ev.target.removeAttribute('aria-invalid'); }
  });

  /* ---------- envío (simulado) ---------- */
  function mostrarErrorServidor(msg) {
    limpiarErrores();
    const r = $('#resumen-errores');
    r.innerHTML = '<strong>No se pudo agendar.</strong> ' + msg + ' <em>Tus datos siguen aquí, no necesitas volver a escribirlos.</em>';
    r.hidden = false; r.focus();
  }
  function enviar(ev) {
    ev.preventDefault();
    if (estado.enviando) return;               // [v2-H2] evita doble envío
    const d = leer(); const e = validar(d);
    if (Object.keys(e).length) { mostrarErrores(e); return; }
    limpiarErrores();
    estado.enviando = true;
    const btn = $('#btn-enviar');
    btn.disabled = true; btn.textContent = 'Guardando…'; btn.setAttribute('aria-busy', 'true');
    const st = $('#estado-envio'); st.className = 'estado cargando';
    st.textContent = 'Conectando con el portal… si la conexión es lenta, puede tardar unos segundos.';
    setTimeout(() => {
      estado.enviando = false;
      btn.disabled = false; btn.textContent = 'Confirmar tutoría'; btn.removeAttribute('aria-busy');
      st.className = 'estado'; st.textContent = '';
      if (estado.fallosRed > 0) {
        estado.fallosRed--;
        mostrarErrorServidor('No hay conexión con el portal. Pulsa «Confirmar tutoría» para reintentar.');
        return;
      }
      if (OCUPADOS.includes([d.docente, d.fecha, d.hora].join('|'))) {
        const libres = DATOS.horas.filter((h) => !OCUPADOS.includes([d.docente, d.fecha, h].join('|')) && h !== d.hora).slice(0, 3);
        mostrarErrorServidor('El horario ' + d.hora + ' de ' + d.docente + ' ya está ocupado. Horas libres ese día: ' + libres.join(', ') + '.');
        return;
      }
      const id = 'TUT-' + String(estado.siguiente++).padStart(4, '0');
      estado.tutorias.push({ id, materia: d.materia, docente: d.docente, fecha: d.fecha, hora: d.hora, modalidad: d.modalidad });
      // [v2-H3] confirmación con todos los datos y un código
      $('#resumen-exito').innerHTML = [['Código', id], ['Materia', d.materia], ['Docente', d.docente], ['Fecha', d.fecha], ['Hora', d.hora], ['Modalidad', d.modalidad]]
        .map(([k, v]) => '<dt>' + k + '</dt><dd>' + v + '</dd>').join('');
      $('#form').reset();
      ir('exito');
      anunciar('Tutoría agendada. Código ' + id);
    }, DEMORA);
  }
  $('#form').addEventListener('submit', enviar);

  /* ---------- mis tutorías ---------- */
  function pintarLista() {
    const ul = $('#lista');
    ul.innerHTML = estado.tutorias.map((t) => {
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
    else if (b.dataset.si) { estado.tutorias = estado.tutorias.filter((t) => t.id !== b.dataset.si); estado.pendienteCancelar = null; anunciar('Tutoría cancelada'); }
    pintarLista();
  });

  /* ---------- enlaces ---------- */
  document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => { estado.pendienteCancelar = null; ir(b.dataset.go); }));
  const agendar = () => { limpiarErrores(); ir('formulario'); };
  $('#btn-agendar').addEventListener('click', agendar);
  $('#btn-agendar2').addEventListener('click', agendar);
  $('#btn-otra').addEventListener('click', agendar);
  document.body.dataset.pantalla = 'inicio';
})();
