let salarioInicial = 1000;
let salario = salarioInicial;

let anoInicio = 2005;
let anoAtual = 2024;

let aumentoPercentual = 1.5 / 100; // 1,5%

for (let ano = anoInicio + 1; ano <= anoAtual; ano++) {

    salario += salario * aumentoPercentual;

    aumentoPercentual *= 2; 
}


console.log(`O salário atual do funcionário é: R$${salario.toFixed(2)}`);