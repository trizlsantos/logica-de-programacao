let nota1, nota2, nota3, media

nota1 = parseFloat(prompt("Digite sua primeira nota"))
nota2 = parseFloat(prompt("Digite sua segunda nota"))
nota3= parseFloat (prompt("Digite sua terceira nota"))

media = (nota1 + nota2 + nota3)/3

if (media>=7) {
    document.write(`sua média é ${media} você foi aprovado`)
} else {
    document.write(`sua média é ${media} você está reprovado`)
}
