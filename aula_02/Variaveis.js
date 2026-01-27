"use strict"
var nome = "Jeaninny";
let profissao = "Pessoa desenvolvedora";
let salarioBruto = 3500.90;
const bonus = 0.05;

console.log("Salário Líquido: ",
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(salarioBruto + (bonus * salarioBruto))
)
