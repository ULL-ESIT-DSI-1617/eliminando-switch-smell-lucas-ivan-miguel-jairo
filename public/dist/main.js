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

(function(shapes) {
  var Circle = shapes.Circle = function(options) {
    this.radius = options.radius;
  };

  Circle.prototype.getArea = function() {
    return Math.PI * Math.pow(this.radius, 2);
  };

  Circle.prototype.getCircumference = function() {
    return 2 * Math.PI * this.radius;
  };
}(window.shapes = window.shapes || {}));

/*

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
*/
     
var shapeType = {
   triangle: 'Triangle', 
   temp: 'temperature',// 2: Object Type
   Medida: 'Medida',// 2: Object Type
   c: 'exportar.Celsius'
};

function getArea(shape, options) {
  var area = 0;
  switch (shape) {
    case shapeType.triangle: // 8: Object Type
      area = .5 * options.width * options.height;
      break;
  }
  
  
 
  
  
  return area;
}


function my(shape, options) {
   
     
     
       var area = 0;
  switch (shape) {
    case shapeType.temp: // 8: Object Type
      area = options.dato   ;
      break;
  }
  
  
  return area;
    
}

function myp(shape, options) {
   
     
     
       var area = 0;
  switch (shape) {
    case shapeType.temp: // 8: Object Type
      area = options.dato   ;
      break;
  }
  
  
  return area;
    
}

function convertir(shape, options){
    console.log(shape);
  // return shape.convertir(options.dato)
   
       
     var e = (eval('new'+" "+shape+'(options.dato)'));
     
     var sol = e.convertir(options.dato);
     
    return sol
    
}

function calculate(){
    
   // var dato = getArea('Triangle', { width: original.value , height: 100 }); // 14: Magic String
     var dato = getArea(shapeType.triangle, { width: original.value, height: 100 });
     
     
     
     var b = my(shapeType.temp, { dato: "holaaaa chuchu" });
     
     
      var a = convertir(shapeType.c, { dato:  original.value });
     
     console.log(a);
     converted.innerHTML =  a.to_s();
     
     
     
    
}

