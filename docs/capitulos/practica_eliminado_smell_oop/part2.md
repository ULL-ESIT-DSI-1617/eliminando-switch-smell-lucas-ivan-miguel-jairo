## Sustitución de Switch o If anidados por Array Asociativo (HASH)
> Para la creación del switch hemos utilizado como referencia un trozo de código que hay en el propio guión de la práctica.
El array asociativo está expresado por measure donde pasándole un tipo ya sabe a que clase debe buscar
>
> ```javascript
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
>
> Código del fichero main
> ```javascript
 var shapeType;
 exportar.shapeType = shapeType = {
    Temperatura: 'Temperatura', // 2: Object Type
    Medida: 'Medida', // 2: Object Type
    c: 'Celsius',
    f: 'Farenheit',
    k: 'Kelvin',
    C: 'Celsius',
    F: 'Farenheit',
    K: 'Kelvin'
};
```
>
> En el siguiente trozo de código se ve como es la utilización del array asociativo (HASH)(fichero temperatura)
>
> ```javascript
try {
    var t = exportar.shapeType[tipo];
    var paso = numero + tipo;
    var e = (eval('new' + " exportar." + t + '(paso)'));
    var dest = exportar.shapeType[destino];
    console.log('j: ' + dest)
    var aque = (eval('e.to' + dest + '()'));
```