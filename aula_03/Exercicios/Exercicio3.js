const leia = require("readline-sync");

"use strict";

let nome = leia.question("Digite o seu nome: ");
let idade = leia.questionInt("Digite a sua idade: ");
const primeiraDoacao = leia.keyInYNStrict("Primeira doacao de sangue? digite [y] para sim e [n] para nao");

if (idade >= 60 && idade <= 69) {
    if (primeiraDoacao) {
        console.log(`${nome} nao esta apto(a) para doar sangue!`);
    } else {
        console.log(`${nome} esta apto(a) para doar sangue!`);
    }
} else if (idade >= 18 && idade < 60) {
    console.log(`${nome} esta apto(a) para doar sangue!`);
} else {
    console.log(`${nome} nao esta apto(a) para doar sangue!`);
}