const leia = require("readline-sync");

let numeros = [10, 25, 5, 45, 85];
let cores = Array(5);

for (let indice = 0; indice < numeros.length; indice++){
    console.log(`numeros[${indice}] = ${numeros[indice]}`);
}

console.log(`O tamanho do vetor números é: ${numeros.length}`);
console.table(numeros);

for (let indice = 0; indice < cores.length; indice++){
    cores[indice] = leia.question("Digite o nome de uma cor: ");
}

console.table(numeros); //para exibir em tabela

console.table(numeros.sort((a,b) => a - b)); // bubble sort de comparação para ordenação crescente

console.table(cores.sort()); //para ordenar o vetor - ordenação feita é lexicográfica, como se fosse uma string

console.log(`Qual e a posicao do elemento 5 no vetor numeros? ` + numeros.indexOf(5))// para saber em que posição está um determinado elemento