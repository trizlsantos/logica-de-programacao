let tempAnual = []
let mediaTemp

//tempAnual[0] = Number(prompt("Digite a temperatura do mes 01"))
//tempAnual[1] = Number(prompt("Digite a temperatura do mes 02"))
//tempAnual[2] = Number(prompt("Digite a temperatura do mes 03"))
//tempAnual[3] = Number(prompt("Digite a temperatura do mes 04"))
//tempAnual[4] = Number(prompt("Digite a temperatura do mes 05"))

for(let i = 0; i < 12; i++){
tempAnual[i] = Number(prompt("Digite a temperatura do mês "))
}
for(let i = 0; i < 12; i++){
    acumuladora = acumuladora + tempAnual[i]
}

mediaTemp = acumuladora / 12
console.log(typeof acumuladora) //number
console.log(typeof 12) //number
console.log(mediaTemp) 
document.write(<p>TempAnual: ${tempAnual}</p>)
document.write(<p>Média da tempAnual: ${mediaTemp}</p>)