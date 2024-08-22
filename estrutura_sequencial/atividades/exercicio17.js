let ano

ano = parseInt(prompt(`digite o ano`))

if (ano % 4 == 0) {
    document.write(`o ano é bissexto`)
} else {
    document.write(`o ano não é bissexto`)
}