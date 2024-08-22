let horaF, horaB

horaB = parseFloat(prompt(`digite o horário no Brasil`))

horaF = horaB + 5 
if ((horaB >= 0) && (horaB<=23)) {
    if ((horaF >= 23) ) {
        horaF -= 24
        document.write(` ${horaB} h na França é ${horaF} h.`)
    } else {
        document.write(` ${horaB} h na França é ${horaF} h.`)
    }
} else {
    document.write(`digite a hora certa`)
}

