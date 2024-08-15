let A, B, temp

A = parseInt(prompt("Digite o valor da 1º variável"))
B = parseInt(prompt("Digite o valor da 2º variável"))

document.write(`O valor a: ${A} e o B: ${B} <br>`)
document.write(`${A - B} <br>`)// a4 - b5 = -1

temp = A
A = B
B = temp

document.write(`o valor de a: ${A} e B: ${B} <br>`)
document.write(`${A - B} <br>`) //a5 - b4 = 1


