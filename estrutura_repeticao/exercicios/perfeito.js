let numero, contador = 0, numPerfeito

do{
    numero = parseInt(prompt("Digite um número para saber se ele pe perfeito"));
    if (numero <= 0 || isNaN(numero)) {
        alert("numero digitado inválido");
        
    }
} while(numero <= 0 || isNaN(numero));

for (let i = 1; i < numero; i++){
   if(numero % i === 0){
       numPerfeito = numPerfeito + 1 
   }
}


if (numPerfeito === numero){
    document.write(` o numero ${numero} é um número perfeito`)

}else{
    document.write(`o numero ${numero} não é o numero perfeito`)
}