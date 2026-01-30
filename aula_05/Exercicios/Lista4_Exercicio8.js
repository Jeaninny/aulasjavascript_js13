const leia = require("readline-sync");

"use strict";

let vetorNumeros = Array(10);

let somaPares = 0;
let somaElementos = 0;
let mediaTotElementos = 0.0;

for (let indice = 0; indice < vetorNumeros.length; indice++) {
    vetorNumeros[indice] = leia.questionInt(`Digite o ${indice+1} numero: `);
    somaElementos += vetorNumeros[indice];
}

console.log(`Elementos nos indices impares: `)
for (let indice = 0; indice < vetorNumeros.length; indice++) {
    if (indice % 2 == 1) {
        console.log(vetorNumeros[indice]);
    }
}

console.log(`Elementos pares: `)
for (let indice = 0; indice < vetorNumeros.length; indice++) {
    if (vetorNumeros[indice] % 2 == 0) {
        console.log(vetorNumeros[indice]);
    }
}

mediaTotElementos = somaElementos / vetorNumeros.length;

console.log(`Soma: ${somaElementos}`);
console.log(`Media: ${mediaTotElementos.toFixed(2)}`);