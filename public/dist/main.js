(function(exports) {
  "use strict";
  function main() {
      var valor     = document.getElementById('original').value,
          elemento  = document.getElementById('converted');
      var med = new Medida()
      elemento.innerHTML = med.convertir(valor);
      return false;
  }
  exports.main = main;
})(this);
