const leia = require("readline-sync");

"use strict";

let numero1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
let numero2 = leia.questionInt("Digite o segundo numero do intervalo: ");

if (numero1 > numero2) {
    console.log("Intervalo invalido!");
} else {
    console.log(`No intervalo de ${numero1} e ${numero2}: `)
    for (let indice = numero1; indice <= numero2; indice++) {
        if (indice % 3 == 0 && indice % 5 == 0) {
            console.log(`${indice} e multiplo de 3 e 5!`);
        }
    }
}