const leia = require("readline-sync");

"use strict";

let totDevsBackend = 0;
let mulheresCiseTransFront = 0;
let homensCiseTransDevsMobileMais40 = 0;
let naoBinariosDevsFSMenor30 = 0;
let totResponderam = 0;
let somaIdades = 0;
let mediaIdade = 0;

console.log("Pesquisa interna entre colaboradores: ");
let participar = leia.keyIn("Deseja participar da pesquisa (S/N)? ").toUpperCase();

while (participar === 'S') {
    totResponderam += 1;

    let idade = leia.questionInt("Idade: ");
    somaIdades += idade;
    mediaIdade = somaIdades / totResponderam;

    console.log("1 Mulher Cis || 2 Homem Cis || 3  Nao Binario || 4  Mulher Trans || 5  Homem Trans || 6  Outros");
    let identidadeGenero = leia.questionInt("Identidade de genero: ");

    console.log("1 - Backend || 2 - Frontend || 3 - Mobile || 4 - FullStack");
    let pessoaDesenvolvedora = leia.questionInt("Pessoa desenvolvedora: ");


    if (pessoaDesenvolvedora == 1) {
        totDevsBackend += 1;
    }

    if ((identidadeGenero == 1 || identidadeGenero == 4) && pessoaDesenvolvedora == 2) {
        mulheresCiseTransFront += 1;
    }

    if ((identidadeGenero == 2 || identidadeGenero == 5) && pessoaDesenvolvedora == 3 && idade > 40) {
        homensCiseTransDevsMobileMais40 += 1;
    }

    if (identidadeGenero == 3 && pessoaDesenvolvedora == 4 && idade < 30) {
        naoBinariosDevsFSMenor30 += 1;
    }

    participar = leia.keyIn("\nDeseja continuar (S/N)? ").toUpperCase();
}

console.log("\nEstatisticas do levantamento: ");
console.log(`Total de pessoas desenvolvedoras Backend: ${totDevsBackend}`);
console.log(`Total de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresCiseTransFront}`);
console.log(`Total de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${homensCiseTransDevsMobileMais40}`);
console.log(`Total de Pessoas Nao Binarias desenvolvedoras FullStack menores de 30 anos: ${naoBinariosDevsFSMenor30}`);
console.log(`O numero total de pessoas que responderam a pesquisa: ${totResponderam}`);
console.log(`A media de idade das pessoas que responderam a pesquisa: ${mediaIdade}`);