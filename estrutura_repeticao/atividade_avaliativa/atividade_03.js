let chinchila , ano, total 

chinchila = parseInt(prompt("digite a quantidade de chinchilas"))

if (chinchila < 2) {
    alert("Digite um valor maior ou igual a 2")
} else {
    ano = parseInt(prompt("digite a quantidade de anos"))
}


    total = chinchila*3*ano
    document.write(`${total}`)

