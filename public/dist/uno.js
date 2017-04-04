"use strict"

var XRegExp = require('xregexp');

var unidad_medida = XRegExp('^(\\s*)                                         ' +
                '(?<valor> [-+]?[0-9]+(?:\\.[0-9]+)?(?:e[+-]?[0-9]+)?) ' +
                '(\\s*)                                               ' +
                '(?<tipo> ([fck]|in|(k|m|c)?m(3)?))                   ' +
                '(\\s*)                                               ' +
                '(to)?                                                ' +
                '(\\s*)                                               ' +
                '(?<to> ([fck]|(k|m|c)?m(3)?|in|l))?                   ' +
                '(\\s*)$','ix');
var measures={"f": "Farenheit","F":"Fahrenheit","c":"Celsius"}
console.log(measures["f"]+"fff");

var res = XRegExp.exec('32f ',unidad_medida);
 //var match = "32    f".match(unidad_medida);
 console.log(res);