let numero1, numero2, validacao
//isNaN -> verificar o que foi digitado (texto)

//validação
do {
    numero1 = parseInt(prompt("Digite o primeiro número"))
    if(isNaN(numero1) || numero1 < 0){ 
        alert("Número invalido, digite um valor positivo e maior que 0")

    }
} while (isNaN(numero1) || numero1 < 0);

do {
    numero2 = parseInt(prompt("Digite o segundo número"))
    if(isNaN(numero2) || numero2 < 0){ 
        alert("Número invalido, digite um valor positivo e maior que 0")

    }
} while (isNaN(numero2) || numero2 < 0);

console.log(numero1+numero2)