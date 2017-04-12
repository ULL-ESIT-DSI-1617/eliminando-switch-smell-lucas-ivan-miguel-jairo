## Utilización de la librería XRegExp
> Librería JavaScript que proporciona y extiende la funcionalidad de las
expresiones regulares nativas de JavaScript. Para más información, visitar
http://xregexp.com/.
>
> Basándonos en el siguiente código hemos adaptado la utilización de la libreria XRegExp a nuestro código 
> ```javascript
regexp = XRegExp('^(\\s*) \n' +
                '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [fck])                                    \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<to> [fck])                                      \n' +
                '(\\s*)$','ix')
  ///              
Medida.convertir = function(valor) {
  var measures = Medida.measures;
  var match = Medida.match(valor);
  if (match) {
    var numero = match.numero,
        tipo   = match.tipo,
        destino = match.destino;
    try {
      var source = new measures[tipo](numero);  // new Fahrenheit(32)
      var target = "to"+measures[destino].name; // "toCelsius"
      return source[target]().toFixed(2) + " "+target; // "0 Celsius"
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};
```
> En el siguiente trozo de código hemos adaptado la utilización de la librería xregexp a nuestras necesidades donde pasándole el método XRegExp.exec.  
> Primer parámetro = entrada del constructor  
> Segundo parámetro = expresión regular  
> Tendremos de salida un vector con el desglose según la expresión regular de entrada
>
> ```javascript
(function(exportar) { 
    "use strict"
    exportar.Medida = class Medida {
            constructor(dato) {
                var uno = XRegExp.exec(dato, unidad_medida);
                var num = uno.valor;
                var type = uno.tipo;
                num = parseFloat(num);
                this.num_ = num;
                this.type_ = type;
            }
           to_s() {
```