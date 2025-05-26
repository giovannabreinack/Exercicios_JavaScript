const leia = require('readline-sync');

let salario;
let abono;
let novoSalario;

salario = leia.questionFloat("Digite o salario: ");
abono = leia.questionFloat("Digite o abono: ");
novoSalario = salario + abono;
console.log("Seu salário total: " + new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(novoSalario));

