let horas, dias, segundos, minutos

segundos = parseFloat (prompt("Digite o valor das horas em segundos"))


minutos = (segundos / 60)
horas =  (minutos / 60)
dias = (horas / 24)
document.write(`o valor em minutos é ${minutos} <br>`)
document.write(`o valor em horas é ${horas} <br>`)
document.write(`o valor em dias é ${dias} <br>`)