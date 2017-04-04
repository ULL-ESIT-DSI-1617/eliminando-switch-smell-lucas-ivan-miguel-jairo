"use strict"


import * as Temperatura from "temperatura";
import * as Celsius from "celsius";
import * as Kelvin from "Kelvin";



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
    
module.exports = Farenheit;