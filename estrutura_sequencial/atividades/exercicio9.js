let tempoh, duracaomin, minutos, filme

filme = prompt("Digite o nome do filme: ")
document.write(`nome do filme ${filme}`, "<br>")

duracaomin = parseFloat(prompt("Digite a duração do filme em minutos: "))

tempoh = Math.floor(duracaomin/60) 
minutos = duracaomin % 60 

document.write(`Duração do filme: ${tempoh}h:${minutos}min`)