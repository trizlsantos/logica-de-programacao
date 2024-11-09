let tempAnual = []
let mediaTemp, acumuladora = 0

//1º - Armazenar dados na estrutura de dados -> ARRAY (VETOR)
for(let i = 0; i < 12; i++){
    tempAnual[i] = Number(prompt("Digite a temperatura do mês"))
}

//2º - Mostrar/processar os valores do array de forma individual
for(let i= 0; i< tempAnual.length; i++){
    acumuladora = acumuladora + tempAnual[i]
}

//mediaTemp = acumuladora / 12
mediaTemp = acumuladora / tempAnual.length
console.log(typeof tempAnual) // objeto
console.log(typeof 12) //number
console.log(mediaTemp)

document.write(`<p>TempAtual: ${tempAnual}</p>`)
document.write(`<p>TempAtual: ${mediaTemp}</p>`)