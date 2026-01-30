const leia = require("readline-sync");

"use strict";

let matriz = new Array(10);
let vetorMedias = new Array(10);
let somaNotas = 0.0;

for (let aluno = 0; aluno < matriz.length; aluno++) {
    matriz[aluno] = Array(10);
}

for (let aluno = 0; aluno < matriz.length; aluno++) {
    somaNotas = 0;
    for (let bimestre = 0; bimestre < matriz[aluno].length; bimestre++) {
        matriz[aluno][bimestre] = leia.questionFloat(`Nota do aluno ${aluno}, bimestre ${bimestre}: `);
        somaNotas += matriz[aluno][bimestre];
    }
    vetorMedias[aluno] = somaNotas / 4;
}

for (let indice = 0; indice < matriz.length; indice++) {
    console.log(`Media do aluno ${indice}: ${vetorMedias[indice].toFixed(1)}`)
}