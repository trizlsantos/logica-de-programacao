let numero

numero = parseInt(prompt("Digite um numero"))

if ((numero >= 10) && (numero <= 20)) {
    document.write(`${numero} está dentro do intervalo de 10 a 20`)
} else {
    document.write(`${numero} não está dentro do intervalo de 10 a 20`)
}
