"use strict"


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


 var match = XRegExp.exec('32c ',unidad_medida);
 console.log(match.valor+" "+match.tipo);
class Medida{

    constructor(dato){
        //var match = dato.match(unidad_medida);
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
        const measures={"f": "Farenheit","F":"Fahrenheit","c":"Celsius"}
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
        console.log('claseee:'+e.constructor.name)
          console.log('cosas:'+e.valor+" "+e.tipo)
          //console.log('conver:'+e.toKelvin())
          var j = measures[destino];
          console.log('j: '+j)
          var aque = (eval('e.to'+j+'()'));
          console.log('conversion: '+aque)
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

class Temperatura extends Medida{

        constructor(dato){
              super(dato)
              if ( this.type_ == "C" || this.type_ == "F" || this.type_ == "K" ||
                  this.type_ == "c" || this.type_ == "f" || this.type_ == "k" ){

                    console.log("UNIDAD DE TEMPERATURA: " + this.type_ );

              }else  console.log("UNIDAD DE TEMPERATURA INCORRECTA");

        }


}







const calculate = () => {

    var result;
    var temp = original.value;
    var regexp = /([-+]?\d+(?:\.\d*)?)\s*((k|m|c)?m(3)?|[CcKFfk])/;
    var m = temp.match(regexp);
    var Cel;

   if (m == null){
      converted.innerHTML = "Unidad de temperatura incorrecta. Inserte C, K o F.";
    }
    else if (m[2]==="mm" || m[2]==="mm" ){
      Cel = new Kilometros(temp);
      var c = Cel.to_mm()

      converted.innerHTML = c.valor + c.tipo + "\n lolo";
    }
     else if (m[2]==="km" || m[2]==="km" ){
      Cel = new Milimetros(temp);
      var c = Cel.toKelvinm()

      converted.innerHTML = c.valor + c.tipo + "\n hola" ;
    }
    else if (m[2]==="m" || m[2]==="m" ){
      Cel = new Metros(temp);
      var c = Cel.to_mm()

      converted.innerHTML = c.valor + c.tipo + "\n lolo";
    }
    else if (m[2]==="cm" || m[2]==="cm" ){
      Cel = new Centimetros(temp);
      var c = Cel.toKelvinm()

      converted.innerHTML = c.valor + c.tipo + "\n hola" ;
    }

    else if (m[2]==="c" || m[2]==="C" ){
      Cel = new Celsius(temp);
      var k = Cel.toKelvin()
      var f = Cel.toFarenheit()
      converted.innerHTML = k.valor + k.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="k" || m[2]==="K" ){
      Cel = new Kelvin(temp);
      var c = Cel.toCelsius()
      var f = Cel.toFarenheit()
      converted.innerHTML = c.valor + c.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="f" || m[2]==="F" ){
      Cel = new Farenheit(temp);
      var c = Cel.toCelsius()
      var k = Cel.toKelvin()
      converted.innerHTML = c.valor + c.tipo + "\n" + k.valor + k.tipo;
    }

  }
  class Celsius extends Temperatura{

          constructor(dato){
              super(dato)
          }


          toKelvin(){

              var result;
              result = (this.valor + 273);
              result = result.toFixed(1) +"k";

              //var n = new Kelvin(result);




              return result;
           }

           toFarenheit(){

              var result;
              result = (this.valor * 1.8) + 32;
              result = result.toFixed(1) +"f";

              //var n = new Farenheit(result);

              return result;
           }
      }

      "use strict"
      class Farenheit extends Temperatura{


              constructor(dato){
                  super(dato)
              }


              toCelsius(){

                  var result;
                  result = (this.valor - 32)*5/9;
                  result = result.toFixed(1)+"c";

                  var n = new Celsius(result);

                  return n;
               }


              toKelvin(){

                  var result;
                  result = (5*(this.valor - 32)/9) + 273.15;
                  result = result.toFixed(1) +"k";

                  var n = new Kelvin(result);

                  return n;
              }
          }

          class Kelvin extends Temperatura{

                 constructor(dato){
                     super(dato)
                 }

                 toCelsius(){

                     var result;
                     result = (this.valor - 273);
                     result = result.toFixed(1) +"c";

                     var n = new Celsius(result);

                     return n;
                 }

                 toFarenheit(){

                     var result;
                     result = 1.8*(this.valor - 273)+ 32;
                     result = result.toFixed(1) + "f";

                     var n = new Farenheit(result);

                     return n;
                 }
             }





      var p = new Medida("32c");
      var e = p.convertir("32cf");
      console.log(e.class)
