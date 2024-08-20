let valor1, valor2

valor1 = parseInt(prompt("Digite o valor 1"))
valor2 = parseInt(prompt("Digite o valor 2"))

if (valor1>valor2) {
    document.write(`o ${valor1} é maior do que ${valor2}`)
} else {
    document.write(`o valor ${valor2} é maior do que ${valor1}`)
}
