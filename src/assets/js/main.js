document.addEventListener("DOMContentLoaded", function() {
  var secciones = document.querySelectorAll(".animar-sec");

  function animarSecciones() {
    for (var i = 0; i < secciones.length; i++) {
      var seccion = secciones[i];
      var animarElementos = seccion.querySelectorAll(".animar-pop");

      if (estaEnPantalla(seccion)) {
        seccion.classList.add("activado");
        for (var j = 0; j < animarElementos.length; j++) {
          animarElementos[j].classList.add("activado");
        }
      }
    }
  }

  function estaEnPantalla(elemento) {
    var limiteInferior = elemento.getBoundingClientRect().top + 100;
    var limiteSuperior = elemento.getBoundingClientRect().bottom - 100;
    return (limiteInferior <= window.innerHeight && limiteSuperior >= 0);
  }

  animarSecciones();

  window.addEventListener("scroll", function() {
    animarSecciones();
  });
});
