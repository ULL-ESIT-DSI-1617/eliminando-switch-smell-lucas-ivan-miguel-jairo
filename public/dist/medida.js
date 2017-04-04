"use strict"

var XRegExp = require('xregexp');
var unidad_medida = XRegExp('^(\\s*) \n' +
                '(?<valor> [-+]?[0-9]+(\.[0-9]+)?(?:e[+-]?[0-9]+)?) \n' +
                '(\\s*)                                             \n' +
                '(?<tipo> [fck])                                    \n' +
                '(\\s*)                                             \n' +
                '(to)?                                              \n' +
                '(\\s*)                                             \n' +
                '(?<to> [fck])?                                      \n' +
                '(\\s*)$','ix');
//let measures={"f": "Farenheit","F":"Fahrenheit","c":"Celsius"}
// console.log(measures["f"]+"fff");


 var match = XRegExp.exec('32f ',unidad_medida);
 console.log(match.valor+"fdddff");
class Medida{

    constructor(dato){
        var match = dato.match(unidad_medida);
        var num = match.valor,
        type = match.tipo,


         num = parseFloat(num);
         this.num_ = num;
         this.type_ = type;
    }
    to_s(){
        var a = this.num_.toFixed(1) + this.type_.toFixed(2);
        console.log(a)
        return a;
    }
    //Geter
    get valor(){
        return this.num_;
    }

    get tipo(){
        return this.type_;
    }

    //Seter
   set valor(value){
        this.num=value;
    }

    set tipo(value){
        this.type=value;
    }




    //se  le pasa valor y el tipo al que cambia
    convertir(valor){
     //var measures = measures;
        const measures={"f": "Farenheit()","F":"Fahrenheit()","c":"Celsius"}
      //var match = valor.match(unidad_medida);
      var match = XRegExp.exec(valor,unidad_medida);
      if (match) {
    var numero = match.valor,
        tipo   = match.tipo,
        destino = match.to;
        console.log(measures[tipo]);
       // console.log(measures[destino]);
         //source = new measures[tipo](numero);
         var t = measures[tipo];
         var e = (eval('new'+" "+t+'(numero)'));

    try {
      var source = new measures[tipo](numero); // new Fahrenheit(32)
      var target = "to"+measures[destino]; // "toCelsius"
     // return source[target]().toFixed(2) + " "+target; // "0 Celsius"
     return source[target]();
    }
    catch(err) {
      return 'Desconozco como convertir desde "'+tipo+'" hasta "'+destino+'"';
    }
  }
  else
    return "Introduzca una temperatura valida: 330e-1 F to C";
};



}

var p = new Medida("32c");
var e = p.convertir("32cf");
console.log(e)


module.exports = Medida;
