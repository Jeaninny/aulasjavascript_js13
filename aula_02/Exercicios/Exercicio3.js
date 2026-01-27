"use strict"

const leia = require('readline-sync');

console.log("Este programa calcula o salário líquido do empregado!");

let salarioBruto = leia.questionFloat("Digite o salario bruto: ");
let adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ");
let horasExtras = leia.questionInt("Digite a quantidade de horas extras: ");
let descontos = leia.questionFloat("Digite o valor dos descontos: ");

let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;
console.log("O salário líquido é:",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioLiquido)
);
