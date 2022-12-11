class Calculadora {
    sumar(numero1, numero2) {
        return numero1 + numero2;
    }

    restar(numero1, numero2) {
        return numero1 - numero2;
    }

    dividir(numero1, numero2) {
        return numero1 / numero2;
    }

    multiplicar(numero1, numero2) {
        return numero1 * numero2;
    }

    exponente(numero1, numero2) {
        if (numero1 ** numero2 < 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001) {
            numero1 = '0'
            return numero1;
        } else {
            return numero1 ** numero2;
        }
    }

    sacarResto(numero1, numero2) {
        if (numero2 > numero1) {
            numero1 = 'indefinido'
            return numero1
        } else {
            return numero1 % numero2;
        }
    }
} 