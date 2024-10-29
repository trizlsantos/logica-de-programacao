//1) Dada uma sequência de n números, imprimi-la na ordem inversa à da leitura.

let n, numeros = [];

n = Number(prompt("Digite a quantidade de numeros!"));

for(let i = 0; i < n; i++){
    numeros[i] = Number(prompt("Digite o numero!"));
}
document.write(`Vetor: ${numeros}`)

for(let i = numeros.length - 1; i >= 0; i--){
    document.write (<p>${numeros[i]}</p>)
}