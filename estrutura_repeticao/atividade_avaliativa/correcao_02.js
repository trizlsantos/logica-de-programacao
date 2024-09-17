//variáveis contadoras, acumuladoras = iniciadas com valor 0
//1º - variavel++, variavel --
//2º variavel = variavel + acumular
let nomeConta, valorConta
let qtdConta = 0, valorTotal = 0
let i = 1

while(i !==0) {
    do {
        nomeConta = prompt("Qual conta irá pagar");
        if(nomeConta === ''){
            alert("A conta precisa de uma descrição, digite novamente");
        }
    } while (nomeConta === '');

    do {
    valorConta = parseInt(prompt(`Digite o valor da conta ${nomeConta}: `))
    if(valorConta === 0 || isNaN(valorConta)){
        alert("o valor da conta precisa ser numeros")
    }
} while (valorConta === 0 || isNaN(valorConta));
    
 qtdConta++
 valorTotal = valorTotal + valorConta

 document.write(`<h4>${nomeConta} \t\t ------ \t\t ${valorConta}</h4>`)
 i = parseInt(prompt("Digite 1 para continuar cadastrado e 0 para sair"))
}
document.write(`<h3>Quantidade de contas: ${qtdConta} ------ ${valorTotal}</h3>`)




