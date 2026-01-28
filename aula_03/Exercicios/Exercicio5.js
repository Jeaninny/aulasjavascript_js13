const leia = require("readline-sync");

"use strict";

console.log("============================================");
console.log("==================MENU======================");
console.log("============================================");
console.log("Codigo | Produto | Preco unitario");
console.log("1 - Cachorro quente - R$ 10,00");
console.log("2 - XSalada - R$ 15,00");
console.log("3 - XBacon - R$ 18,00");
console.log("4 - Bauru - R$ 12,00");
console.log("5 - Refrigerante - R$ 8,00");
console.log("6 - Suco de Laranja - R$ 13,00");
console.log("===========================================");

let codigoProduto = leia.questionInt("Digite o codigo do produto: ");
let quantidade = leia.questionInt("Digite a quantidade desejada: ");

switch (codigoProduto) {
    case 1:
        console.log("Produto: Cachorro quente \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 10));
        break;

    case 2:
        console.log("Produto: XSalada \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 15));
        break;

    case 3:
        console.log("Produto: XBacon \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 18));
        break;

    case 4:
        console.log("Produto: Bauru \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 12));
        break;

    case 5:
        console.log("Produto: Refrigerante \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 8));
        break;

    case 6:
        console.log("Produto: Suco de laranja \nValor total:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(quantidade * 13));
        break;
    default:
        console.log("Produto inexistente. Digite uma opcao valida!");
}