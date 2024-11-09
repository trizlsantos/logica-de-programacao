let numero, contador

do {
    numero = parseInt(prompt("Digite um número para saber se ele é primo"))
    if(numero <=0 || isNaN(numero)){
        alert("Digite um número inteiro e maior que 0")
    }
} while (numero <=0 || isNaN(numero));
//essa estrutura vai repetir de 1 até o número que o usuário digitar
for(let i = 1; i <= numero; i++){
    //numero que o usuário digitou dividido pelo valor de i
    document.write(`${numero}%${i} = ${numero%i} <br>`)
    if(numero % i === 0){
         contador++//vai receber 1 a cada divisão com o resto 0
    }
    
}
//fim da estrutura que vai repetir de 1 até o número que o usuário digitar

if (contador === 2) {
    document.write(`o numero ${numero} é primo`)
} else{
    document.write(`o numero ${numero} não é primo`)
}
