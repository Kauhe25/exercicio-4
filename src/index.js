"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculadora_1 = require("./Calculadora");
const calculadora = new Calculadora_1.Calculadora();
console.log(calculadora.somar(5, 7)); //12
console.log(calculadora.subtrair(18, 7)); //11
console.log(calculadora.multiplicar(5, 5)); //25
console.log(calculadora.dividir(12, 2)); //6
console.log(calculadora.dividir(3, 0));
