export class Calculadora {
    somar (numero1:number, numero2: number) {
        return numero1 + numero2;
    }

    subtrair (numero1:number, numero2: number) {
        return numero1 - numero2;
    }

    multiplicar (numero1:number, numero2: number) {
        return numero1 * numero2;
    }

    dividir (dividendo:number, divisor:number) {
        if(!divisor)
            return 'Não é possivel dividir por 0';
            //throw new Error('Não é possivel dividir por 0')

        return dividendo / divisor;
    }

}