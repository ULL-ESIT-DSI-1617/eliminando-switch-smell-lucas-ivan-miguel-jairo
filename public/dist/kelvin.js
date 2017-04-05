"use strict"



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
//module.exports = Farenheit;