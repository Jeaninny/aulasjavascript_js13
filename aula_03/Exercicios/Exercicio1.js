const leia = require("readline-sync");

"use strict";

let numeroA = leia.questionInt("Digite o primeiro numero: ");
let numeroB = leia.questionInt("Digite o segundo numero: ");
let numeroC = leia.questionInt("Digite o terceiro numero: ");

let somaAeB = numeroA + numeroB;

if (somaAeB > numeroC) {
    console.log(`A soma de ${numeroA} + ${numeroB} e igual a ${somaAeB}, que e maior que ${numeroC}`);

} else if (somaAeB < numeroC) {
    console.log(`A soma de ${numeroA} + ${numeroB} e igual a ${somaAeB}, que e menor que ${numeroC}`);
} else {
    console.log(`A soma de ${numeroA} + ${numeroB} e igual a ${somaAeB}, que e igual ${numeroC}, terceiro numero digitado`);
}