let numero, par, impar

numero = parseFloat(prompt("Digite um número"))


do {
    if ((numero % 2 == 0)) {
        par = numero*2 
        document.write(`o ${numero} é par. O dobro é ${par}.`)
    } else {
        (numero % 3 == 0)
        impar = numero*3
        document.write(`o ${numero} é ímpar. O triplo é ${impar}.`)
    }

    if (numero <= 0 || isNaN(numero)) {
        alert("Digite um valor maior que 0 ")
    } else {
        
    }
} while (parseFloat(prompt("Digite um número")))

