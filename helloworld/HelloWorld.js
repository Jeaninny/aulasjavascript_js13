const leia = require("readline-sync");

let numero1 = leia.questionInt("Digite o primeiro numero: ");
let numero2 = leia.questionInt("Digite o segundo nemero: ");
let soma = numero1 + numero2;
console.log("Soma: ", soma);