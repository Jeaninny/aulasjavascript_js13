"use strict"

const leia = require('readline-sync');

let valorSalario = leia.questionFloat("Digite o salario: ");
let valorAbono = leia.questionFloat("Digite o abono: ");

let novoSalario = valorSalario + valorAbono;

console.log("O novo salário é:", new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
}).format(novoSalario));