class Calculadora {
    static soma(num1, num2) {
        return num1 + num2;
    }

    static subtracao(num1, num2) {
        return num1 - num2;
    }

    static multiplicacao(num1, num2) {
        return num1 * num2;
    }

    static divisao(num1, num2) {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Divisão por zero';
        }
    }
}

module.exports = Calculadora;