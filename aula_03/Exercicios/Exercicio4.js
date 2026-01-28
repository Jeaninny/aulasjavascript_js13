const leia = require("readline-sync");

"use strict";

let animal;

console.log("=========================");

let esqueleto = leia.question("Digite a caracteristica do esqueleto (vertebrado ou invertebrado): ");
let grupo = leia.question("Digite o grupo (ave, mamifero, inseto ou anelideo): ");
let alimentacao = leia.question("Digite o tipo de alimentacao (carnivoro, onivoro, herbivoro ou hematofago): ");


if (esqueleto === "vertebrado") {
    if (grupo === "ave") {
        console.log(alimentacao === "carnivoro" ? ("Aguia") : ("Pomba"));
    } else if (grupo === "mamifero") {
        console.log(alimentacao === "onivoro" ? ("Homem") : ("Vaca"));
    }

} else if (esqueleto === "invertebrado"){
    if (grupo === "inseto") {
        console.log(alimentacao === "hematofago" ? ("Pulga") : ("Lagarta"));
    } else if (grupo === "anelideo") {
        console.log(alimentacao === "hematofago" ? ("Sanguessuga") : ("Minhoca"));
    }
}