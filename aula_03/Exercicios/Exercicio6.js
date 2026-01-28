const leia = require("readline-sync");

"use strict";

console.log("\n============================================");
console.log("Codigo | Cargo         | Percentual do reajuste");
console.log("1        Gerente            10%");
console.log("2        Vendedor           7%");
console.log("3        Supervisor         9%");
console.log("4        Motorista          6%");
console.log("5        Estoquista         5%");
console.log("6        Tecnico de TI      8%");
console.log("============================================");


let nomeColaborador = leia.question("\nDigite o nome do colaborador(a): ");
let cargo = leia.questionInt("Digite o codigo do cargo: ");
let salario = leia.questionFloat("Digite o salario: ");
console.log("\n");

switch (cargo) {
    case 1:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Gerente",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.1));
        break;
    case 2:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Vendedor",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.07));
        break;
    case 3:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Supervisor",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.09));
        break;
    case 4:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Motorista",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.06));
        break;
    case 5:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Estoquista",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.05));
        break;
    case 6:
        console.log("Nome do colaborador(a): ", nomeColaborador,
            "\nCargo: Tecnico de TI",
        "\nSalario: ", new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(salario *= 1.08));
        break;
    default:
        console.log("Opcao invalida.");
}