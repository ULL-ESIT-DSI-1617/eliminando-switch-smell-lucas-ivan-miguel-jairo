/*(function(exports) {
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

*/

 "use strict";

function calculate(){

    var result;
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*((k|m|c)?m(3)?|[CcKFfk])/;
    var m = temp.match(regexp);
    var Cel;
    
    var match = XRegExp.exec(temp,unidad_medida);
    
    console.log(match.valor+" "+ match.tipo+match.to);
      console.log(match);
      
     var aki = match.valor+" "+ match.tipo
  console.log(temp+"uffffffffff");
     var p = new Medida(temp);
      
      var e = p.convertir(temp);
     // console.log(e)
     
 // var c= e.otro()
   // console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa111111111111"+c)
        converted.innerHTML =  e.to_s();


  }


     