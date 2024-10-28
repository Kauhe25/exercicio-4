"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    somar(numero1, numero2) {
        return numero1 + numero2;
    }
    subtrair(numero1, numero2) {
        return numero1 - numero2;
    }
    multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }
    dividir(dividendo, divisor) {
        if (!divisor)
            return 'Não é possivel dividir por 0';
        //throw new Error('Não é possivel dividir por 0')
        return dividendo / divisor;
    }
}
exports.Calculadora = Calculadora;
