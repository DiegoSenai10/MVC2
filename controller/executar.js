const express = require('express');
const Calculadora = require('../model/Calculadora');

const calculadoraController = express.Router();

calculadoraController.post('/calcular', (req, res) => {
    const { num1, num2, operacao } = req.body;
    
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = Calculadora.soma(parseFloat(num1), parseFloat(num2));
            break;
        case 'subtracao':
            resultado = Calculadora.subtracao(parseFloat(num1), parseFloat(num2));
            break;
        case 'multiplicacao':
            resultado = Calculadora.multiplicacao(parseFloat(num1), parseFloat(num2));
            break;
        case 'divisao':
            resultado = Calculadora.divisao(parseFloat(num1), parseFloat(num2));
            break;
        default:
            resultado = 'Operação inválida';
    }

    res.render('resultado', { resultado, operacao });
});

module.exports = calculadoraController;
