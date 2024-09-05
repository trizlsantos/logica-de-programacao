let contador, valor, acumulador

valor = parseFloat(prompt("digite o valor da sua conta"))
 
do {
    acumulador = valor+contador
    document.write(`a soma de tudo é ${acumulador}`)
} while (contador = valor = parseFloat(prompt("digite o valor da sua conta")));

