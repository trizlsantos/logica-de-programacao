let numero 

numero = parseInt(prompt(`digite um número para verificar se é um numero primo`))

if (numero < 2 ) {
    alert(" o número 1 ou menor que 1, digite um número maior")
}

if (numero <= 3) {
    document.write(`${numero} é um número primo.`)
}

if (numero % 2 == 0 || numero % 3 == 0) {
    document.write(`o ${numero} não é primo`)
}

for (let i = 5; i * i <= numero; i+=6) {
    if (num % i === 0 || num % (i + 2) === 0)
    document.write(`${numero} não é primo.`);
}
   
  document.write(`o ${numero} é primo`)
