let numero 

numero = parseInt(prompt(`digite um numero`))

if ((numero % 3) && (numero % 5)) {
    document.write(`o ${numero} é múltiplo de 3 e 5.`)
} else {
    document.write(`o ${numero} não é múltiplo de 3 e 5.`)
}