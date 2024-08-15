let valor, cotacao, real, dolar

valor = parseFloat(prompt (`digite um valor em reais: `));
document.write (`voce tem R$ ${valor.toFixed(2)} em reais.`);

real = valor;

cotacao = parseFloat(prompt (`qual é a cotacao atual do dolar? `));
document.write(`a cotacao do dolar está em r$ ${cotacao.toFixed(2)}`);

dolar = real / cotacao;
document.write(`Você teria R$ ${dolar.toFixed(2)} dolares com esse valor`);
