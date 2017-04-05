"use strict"

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


(function(shapes) { // triangle.js
  var Triangle = shapes.Triangle = function(options) {
    this.width = options.width;
    this.height = options.height;
  };
  Triangle.prototype.getArea = function() {
    return 0.5 * this.width * this.height;
  };  
}(window.shapes = window.shapes || {}));


/*
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle': // 5: Magic String
      area = .5 * options.width * options.height;
      break;

  }

  return area;
}*/

var shapeType = {
  triangle: 'Triangle' // 2: Object Type
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




function calculate(){
    
   // var dato = getArea('Triangle', { width: original.value , height: 100 }); // 14: Magic String
    var dato = getArea(shapeType.triangle, { width: original.value, height: 100 });
     converted.innerHTML =  dato;
    
}