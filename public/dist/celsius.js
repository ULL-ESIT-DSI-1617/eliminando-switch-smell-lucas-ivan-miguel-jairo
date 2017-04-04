"use strict"

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
         }

         toFarenheit(){

            var result;
            result = (this.valor * 1.8) + 32;
            result = result.toFixed(1) +"f";

            var n = new Farenheit(result);

            return n;
         }
    }

module.exports = Celsius;
