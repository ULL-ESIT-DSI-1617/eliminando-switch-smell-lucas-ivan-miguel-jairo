"use strict"

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
      var c = Cel.to_km()

      converted.innerHTML = c.valor + c.tipo + "\n hola" ;
    }
    else if (m[2]==="m" || m[2]==="m" ){
      Cel = new Metros(temp);
      var c = Cel.to_mm()

      converted.innerHTML = c.valor + c.tipo + "\n lolo";
    }
    else if (m[2]==="cm" || m[2]==="cm" ){
      Cel = new Centimetros(temp);
      var c = Cel.to_km()

      converted.innerHTML = c.valor + c.tipo + "\n hola" ;
    }

    else if (m[2]==="c" || m[2]==="C" ){
      Cel = new Celsius(temp);
      var k = Cel.to_k()
      var f = Cel.to_f()
      converted.innerHTML = k.valor + k.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="k" || m[2]==="K" ){
      Cel = new Kelvin(temp);
      var c = Cel.to_c()
      var f = Cel.to_f()
      converted.innerHTML = c.valor + c.tipo + "\n" + f.valor + f.tipo;
    }
    else if (m[2]==="f" || m[2]==="F" ){
      Cel = new Farenheit(temp);
      var c = Cel.to_c()
      var k = Cel.to_k()
      converted.innerHTML = c.valor + c.tipo + "\n" + k.valor + k.tipo;
    }

  }
