// APE 5 · Fase 1 · Estados de la tarea: Disponible → Confirmada → Cancelada
(function () {
  'use strict';

  var btnReservar = document.getElementById('btn-reservar');
  var btnCancelar = document.getElementById('btn-cancelar');
  var estado = document.getElementById('estado-reserva');

  function mostrarEstado(texto, clase) {
    estado.textContent = texto;
    estado.className = clase || '';
  }

  // Disponible → Confirmada: bloquea la acción duplicada y lleva el foco a «Cancelar»
  function confirmar() {
    btnReservar.disabled = true;
    btnCancelar.disabled = false;
    mostrarEstado(
      'Reserva confirmada: Interfaces web accesibles, jueves 14:00 a 16:00, Laboratorio 2.',
      'confirmada'
    );
    btnCancelar.focus();
  }

  // Confirmada → Cancelada: vuelve a habilitar «Reservar» y le devuelve el foco
  function cancelar() {
    btnCancelar.disabled = true;
    btnReservar.disabled = false;
    mostrarEstado(
      'Reserva cancelada. Tu lugar quedó libre; puedes reservar de nuevo.',
      'cancelada'
    );
    btnReservar.focus();
  }

  btnReservar.addEventListener('click', confirmar);
  btnCancelar.addEventListener('click', cancelar);
})();
