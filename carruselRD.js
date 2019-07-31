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

  $(actualA).addClass('activo');
  $(actualB).addClass('activo');
  $(actualC).addClass('activo');

  let textoA = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
  'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
  'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let textoB = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod' +
  'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
  'consequat.';

  let textoC = 'Ut enim ad minim veniam,' +
  'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
  'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse' +
  'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat' +
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

    setTimeout(function () {
      recorrerBajada();
    }, 6000);
  }

  /**
  * ESCONDER LA BAJADA PARA CAMBIAR DE VALORES
  */
  function recorrerBajada() {
    nuevaPosicion();
    $('.bajada').animate({'left': '150%'}, tempo, function() {
      actualizarBajada();
    });
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


  // Al cargar todas las imágenes, empezamos con todo...
  window.onload = function () {
    actualizarBajada();
  };
})();
