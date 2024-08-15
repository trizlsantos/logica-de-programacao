let PrecoCusto = parseFloat(prompt(`Digite o preço de custo do produto: `))
let PercentualAcrescimo = parseFloat(prompt(`digite o percentual de acréscimo (%): `));
let valorAcrescimo = PrecoCusto * (PercentualAcrescimo/100);
let precoVenda = PrecoCusto + valorAcrescimo;

document.write(`preço de custo: R$ ${PrecoCusto.toFixed(2)}`);
document.write(`Percentual de acréscimo: ${PercentualAcrescimo}`);
document.write(`Valor do acréscimo: R$ ${valorAcrescimo.toFixed(2)}`);
document.write(`Preço de venda: R$ ${precoVenda.toFixed(2)}`);