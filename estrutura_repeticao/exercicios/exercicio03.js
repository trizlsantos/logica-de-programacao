let numero,  somaDivisores = 0

numero = parseInt(prompt("digite um número"))
for(let i = 1; i < numero; i++){
    if(numero % i === 0){
        somaDivisores += i
    }
}

if(somaDivisores === numero){
    document.write(numero + " é um numero perfeito ");
}else{
    document.write(numero+ " não é um numero perfeito");
}