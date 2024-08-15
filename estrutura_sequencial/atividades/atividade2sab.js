let valorDepositado = parseFloat(prompt(`digite o valor depositado: `));

let taxaJuros = 0.0007

let valorComRendimento = valorDepositado *(1 + taxaJuros);

document.write(`valor depositado: R$ ${valorDepositado.toFixed(2)}`)
document.write(`valor após um mês com rendimento: R$ ${valorComRendimento.toFixed(2)}`)