(function () {

  // Colecciones por default
  let bannersA = document.querySelectorAll('#bandaA .banner');
  let bannersB = document.querySelectorAll('#bandaB .banner');
  let bannersC = document.querySelectorAll('#bandaC .banner');

  // Elementos por default
  let pos = 0; // Posición actual
  let tempo = 2000; // Milisegundos de las animaciones
  let actualA = bannersA[pos];
  let actualB = bannersB[pos];
  let actualC = bannersC[pos];

  $(actualA).css({'z-index': 5}).addClass('activo');
  $(actualB).css({'z-index': 5}).addClass('activo');
  $(actualC).css({'z-index': 5, 'opacity': 1}).addClass('activo');

  let textoA = 'Texto 01 Lorem ipsum dolor sit amet, consectetur adipisicing, sed ' +
  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
  'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let textoB = 'Texto 02 Lorem ipsum dolor sit amet, consectetur adipisicing elit ' +
  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
  'consequat.';

  let textoC = 'Texto 03 Ut enim ad minim veniam,' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
  'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse ' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // Array de bajada y url de cada botón:
  let bajadas = [
    {'texto': textoA, 'url': '/algun-lugar-cercano.html'},
    {'texto': textoB, 'url': '/algun-lugar-lejano.html'},
    {'texto': textoC, 'url': '/algun-lugar.html'}
  ];

  /**
  * CAMBIAR VALORES DE LA BAJADA
  * Este es el inicio de la animación de todos los banners.
  */
  function actualizarBajada() {
    let parrafoBajada = document.querySelector('#bandaC .bajada p');
    parrafoBajada.innerText = bajadas[pos].texto

    let boton = document.querySelector('#bandaC .bajada a');
    boton.setAttribute('href', bajadas[pos].url)

    $('.bajada').animate({'left': '50%'}, tempo);

    duracionSiguienteMovimiento();
  }

  /**
  * ESCONDER LA BAJADA PARA CAMBIAR DE VALORES
  */
  function recorrerBajada() {
    nuevaPosicion();
    $('.bajada').animate({'left': '150%'}, tempo, function() {
      actualizarBajada();
    });

    // Iniciar BANDAA
    animarBandaA();
    // Iniciar BANDAB
    animarBandaB();
    // Iniciar BANDAC
    animarBandaC();
  }

  /**
  * CAMBIAR POSICIÓN
  */
  function nuevaPosicion() {
    pos = pos + 1;
    if (pos == bajadas.length) {
      pos = 0;
    }
  }

  /**
  * DURACIÓN PARA QUE LA TRANSICIÓN INICIE DE NUEVO
  * O sea, tiempo del loop
  */
  function duracionSiguienteMovimiento() {
    setTimeout(function () {
      recorrerBajada();
    }, 6000);
  }

  /**
  * ANIMAR BANDA A
  * Con animación de top
  */
  function animarBandaA () {
    $('#bandaA .banner:not(.activo)').css({'top': '0', 'z-index': 2});
    $(bannersA[pos]).addClass('activo').css({'z-index': 3});
    $(actualA).removeClass('activo').animate({'top': '100%'}, tempo*2, function() {
      $(bannersA[pos]).addClass('activo').css({'z-index': 5});
      $(this).css({'z-index': 2});
    });
    actualA = bannersA[pos];
  }

  /**
  * ANIMAR BANDA B
  * Con animación de top
  */
  function animarBandaB () {
    $('#bandaB .banner:not(.activo)').css({'top': '0', 'z-index': 2});
    $(bannersB[pos]).addClass('activo').css({'z-index': 3});
    $(actualB).removeClass('activo').animate({'top': '-100%'}, tempo*2, function() {
      $(bannersB[pos]).addClass('activo').css({'z-index': 5});
      $(this).css({'z-index': 2});
    });
    actualB = bannersB[pos];
  }

  /**
  * ANIMAR BANDA C
  * Con una animación de fadeOut
  */
  function animarBandaC () {
    $(actualC).removeClass('activo').animate({'opacity': 0}, tempo*2, function () {
      $(this).css({'z-index': 2});
    });
    $(bannersC[pos]).addClass('activo').animate({'opacity': 1}, tempo*2, function () {
      $(this).css({'z-index': 5})
    });
    actualC = bannersC[pos];
  }

  // Al cargar todas las imágenes, empezamos con todo...
  window.onload = function () {
    actualizarBajada();
  };

})();
