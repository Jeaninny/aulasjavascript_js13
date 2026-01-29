const leia = require("readline-sync");
/*
//Definindo a Matriz
let matriz = new Array(2);


//Adicionando as linhas da Matriz
for (let indice = 0; indice < matriz.length; indice++) {
    matriz[indice] = Array(3);
}


//Entrada de dados na matriz via teclado
for (let linha = 0; linha < matriz.length; linha++) {
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
        matriz[linha][coluna] = leia.questionInt(`matriz [${linha}][${coluna}] = `);
    }
}

*/


//Maneira opcional, que não está presente no cookbook
let matriz = Array.from({ length: 2 }, () =>
     Array.from({ length: 3 },
        () => leia.questionInt("Digite um numero: "))
    );

//Exibir os dados
console.table(matriz);


