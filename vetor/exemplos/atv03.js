/**Crie um programa que solicite a entrada de 10 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 5. Exiba os valores dos dois vetores na tela, simultaneamente, em duas colunas (um em cada coluna), uma posição por linha. */

for (let i = 0; i < 10; i++){
    vetor1 [i] = Math.floor(Math.random() * 10)
    vetorX5[i] = vetor1[i] * 5
}
console.log("Vetor Digitado: "+vetor1)
console.log("Vetor resultante: "+vetorX5)