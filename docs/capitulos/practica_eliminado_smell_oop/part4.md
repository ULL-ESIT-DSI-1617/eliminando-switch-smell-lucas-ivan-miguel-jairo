## Creación de Módulos con ECMA6
> La creación de módulos sería más fácil con la utilización de herramientas del tipo Browserfy y Webpack sin embargo nos hemos guiado por un código facilitado por el profesor que es el siguiente:
>
> ```javascript
(function(shapes) { // triangle.js
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };  
}(window.shapes = window.shapes || {}));
function getArea(shape, options) {
  var Shape = window.shapes[shape], area = 0;
  if (Shape && typeof Shape === 'function') {
    area = new Shape(options).getArea();
  } else {
    throw new Error('Invalid shape: ' + shape);
  }
  return area;
}
```
> El siguiente código se encarga de crear un módulo y que el propio navegador lo pueda interpretar de manera adecuada.Para ello cogemos la clase o función y la metemos dentro de una función que en este caso se le pasa un parámetro que es exportar,este mismo parámetro es devuelto por la función pasándole el objeto windows
>
> ```javascript
(function(exportar) { 
    "use strict"
exportar.convertir = function convertir(shape, options) {
    console.log(shape + "shapee ga")
    var measures = (eval('new' + ' exportar.' + shape + '(options.dato)'));
    console.log(measures.typeof + "shapee gaaa")
    var result = measures.convertir(options.dato);
        console.log(result + "shacccccccpee gaaa")
    return result;
}
}(window.exportar = window.exportar || {}));
```