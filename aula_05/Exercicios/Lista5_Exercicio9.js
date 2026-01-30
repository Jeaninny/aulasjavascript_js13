let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let diagonalP = "", diagonalS = " ";
let somaDiagonalP = 0, somaDiagonalS = 0;

for (let indice = 0; indice < matriz.length; indice++) {
    diagonalP += matriz[indice][indice] + " ";
    somaDiagonalP += matriz[indice][indice];
    diagonalS += matriz[indice][matriz.length - 1 - indice] + " ";
    somaDiagonalS += matriz[indice][matriz.length - 1 - indice];
}
console.log(`A Diagonal Principal da Matriz e: ${diagonalP}`);
console.log(`A Soma dos valores da Diagonal Principal e: ${somaDiagonalP}`);
console.log(`A Diagonal Secundaria da Matriz e: ${diagonalS}`);
console.log(`A Soma dos valores da Diagonal Secundaria e: ${somaDiagonalS}`);