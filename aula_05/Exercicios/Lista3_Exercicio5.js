const leia = require("readline-sync");

"use strict";

let somaNumerosPositivos = 0;

let numero;

do {
    numero = leia.questionInt("Digite um numero: ");
    if (numero > 0) {
        somaNumerosPositivos += numero;
    }
}while (numero != 0)

console.log(`A soma dos numeros positivos e: ${somaNumerosPositivos}`);