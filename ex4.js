const leia = require('readline-sync');

let numero1, numero2, numero3, numero4;
let diferenca;

numero1 = leia.questionFloat("Digite o primeiro numero: ");
numero2 = leia.questionFloat("Digite o segundo numero: ");
numero3 = leia.questionFloat("Digite o terceiro numero: ");
numero4 = leia.questionFloat("Digite o quarto numero: ");
diferenca = (numero1 * numero2) - (numero3 * numero4);
console.log("Diferença: " + diferenca);