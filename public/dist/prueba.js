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



class Medida{

    constructor(dato){
         var uno = XRegExp.exec(dato,unidad_medida);
    console.log(dato+"estoy dentor de medida")
    //console.log(match.valor+" "+ match.tipo+match.to);
     // console.log(match);
      
     //var aki = match.valor+" "+ match.tipo
        //var match = dato.match(unidad_medida);
        
        
        
        var num = uno.valor;
        var type = uno.tipo;


         num = parseFloat(num);
         this.num_ = num;
         this.type_ = type;
    }
    
    to_s(){
       
        
        var a = this.num_+" "+ this.type_
        
        console.log("holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+ a)
        return a
       
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
        const measures={"f": "Farenheit","F":"Fahrenheit","c":"Celsius","C":"Celsius","k": "Kelvin","K":"Kelvin"}
      //var match = valor.match(unidad_medida);
      
      console.log("valuee" +valor)
      var match = XRegExp.exec(valor,unidad_medida);
      if (match) {
    var numero = match.valor,
        tipo   = match.tipo,
        destino = match.to;
     
    try {
           console.log(measures[tipo]+"esta mierda");
       // console.log(measures[destino]);
         //source = new measures[tipo](numero);
         var t = measures[tipo];
         console.log("Dasasasasasasasasasasasasasasasasas " + t )
         
        var paso = numero+tipo; 
         
         var e = (eval('new'+" "+t+'(paso)'));
         
         
          console.log('claseee:'+e.constructor.name)
          console.log('cosas:'+e.valor+" "+e.tipo)
        // console.log('conver:'+e.toKelvin())
          var j = measures[destino];
          console.log('j: '+j)
        
          var aque = (eval('e.to'+j+'()'));
          console.log('conversion: '+ aque)
        
      
    //  var source = new measures[tipo](numero); // new Fahrenheit(32)
     // var target = "to"+measures[destino]; // "toCelsius"
     // return source[target]().toFixed(2) + " "+target; // "0 Celsius"
     //return source[target]();
     return aque
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






  class Celsius extends Temperatura{

          constructor(dato){
              
              super(dato)
          }


          toKelvin(){

              var result;
              result = (this.valor + 273);
              result = result.toFixed(1) +"k";

              var n = new Kelvin(result);



            return n;
              //return result;
           }

           toFarenheit(){
               console.log("ahora siiii")

              var result;
              result = (this.valor * 1.8) + 32;
              result = result.toFixed(1) +"f";

              var n = new Farenheit(result);
              return n;
             //return result;
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
     
