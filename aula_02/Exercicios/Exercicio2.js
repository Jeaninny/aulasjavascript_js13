"use strict"

const leia = require('readline-sync');

console.log("Este programa calcula as médias do aluno");

let nota1 = leia.questionFloat("Digite a 1a nota: ");
let nota2 = leia.questionFloat("Digite a 2a nota: ");
let nota3 = leia.questionFloat("Digite a 3a nota: ");
let nota4 = leia.questionFloat("Digite a 4a nota: ");

let mediaAluno = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`A média do aluno é: ${mediaAluno.toFixed(1)}`);
