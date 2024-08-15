//Casting -> processo de converter os tipos de dados de uma variável.
/** Dois tipos
 * parseInt() -> converter para um inteiro
 * parsoFloat() -> converter para uma Flutuante
 */
//Para resolver um algoritimo eu tenho que seguir 3 passos
//1º Determinar os dados de entrada (váriaveis e comando para receber os valores)
let nota1, nota2, soma
//comando para entrada de dados
nota1 = parseInt (prompt("Digite sua nota"))
nota2 = parseFloat(prompt("Digite sua nota"))

//2º processamento -> trabalhar com as variáveis
soma = nota1 + nota2

//3º  Saída do processamento. Saída de dados
//Comandos para saída de dados
document.write(soma)
