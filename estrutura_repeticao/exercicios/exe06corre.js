let salario, novoSalario, anoAtual, percentual  

salario = Number(prompt("Digite o salário"))
anoAtual = Number(prompt("Digite o ano atual"))

document.write(`<h3>Salário 2005: ${salario}</h3>`)

//processamento
percentual = 1.5/100
novoSalario = salario + (percentual * salario)
document.write(`<h3>Salário 2006: ${novoSalario}</h3>`)

for(let i = 2007; i <= anoAtual; i++){
    percentual = percentual * 2;
    novoSalario = novoSalario + (percentual * novoSalario)
    document.write(`<h3>Salário ${i}: ${novoSalario}</h3>`)
}
document.write(`<h3>Salário Final: ${novoSalario.toFixed(2)}</h3>`)