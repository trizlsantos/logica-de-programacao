let nota1, nota2, nota3, soma, Divisão, nome

nome = prompt("Digite seu nome")
nota1 = parseInt (prompt("Digite sua 1º nota"))
nota2 = parseInt(prompt("Digite sua 2º nota"))
nota3 = parseInt(prompt("Digite sua 3º nota"))

soma = nota1 + nota2 + nota3
Divisão = soma / 3
document.write(`${nome} sua média é ${Divisão}`)
