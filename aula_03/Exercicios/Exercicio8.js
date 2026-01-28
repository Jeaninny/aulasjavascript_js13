const leia = require("readline-sync");

"use strict";

console.log("\n===============================");
console.log("           Conta bancaria        ");
console.log("=================================");
console.log("Codigo da Operacao   |   Operacao");
console.log("1 - Saldo");
console.log("2 - Saque");
console.log("3 - Deposito");
console.log("=================================");

let saldo = 1000.00;

let operacao = leia.questionInt("Operacao: ");

switch (operacao) {
    case 1:
        console.log("Operacao - Saldo");
        console.log("Saldo:",
            new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(saldo)
        );
        break;

    case 2:
        console.log("Operacao - Saque");
        let valorSaque = leia.questionFloat("Valor: ");
        if (valorSaque <= saldo) {
            saldo -= valorSaque;
            console.log("Novo saldo:",
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(saldo)
            );            
        } else {
            console.log("Saldo insuficiente!");
        }
        break;

    case 3:
        console.log("Operacao - Deposito");
        let valorDeposito = leia.questionFloat("Valor: ");
            saldo += valorDeposito;
            console.log("Novo saldo:",
                new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(saldo)
            );            
        break;

    default:
        console.log("Operacao invalida!");
}