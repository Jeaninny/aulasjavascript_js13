"use strict"

const leia = require("readline-sync");

let vetorValores = new Array (4);

for (let i = 0; i < 4; i++) {
    vetorValores[i] = leia.questionFloat(`Digite o ${i + 1} valor: `);
}

let calculo = (vetorValores[0] * vetorValores[1]) - (vetorValores[2] * vetorValores[3]);

console.log(`O valor do cálculo é: ${calculo}`);

