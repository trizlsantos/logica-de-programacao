let qtdNumero, numeroEscolhido

do{
    qtdNumero = parseInt(prompt("Quantos números fatoriais você deseja saber?"))
    if(qtdNumero <= 0 || isNaN(qtdNumero));
    alert("Numero inválido")

} while (qtdNumero <= 0 || isNaN(qtdNumero));


    for(let i = 0; i<= qtdNumero; i++){

        do{
        } while(numeroEscolhido <= 0 || isNaN(numeroEscolhido));
        debugger

        fatorial = 1
        for(let y = 1; y <= numeroEscolhido; y++){
            fatorial = fatorial * y
        }
        document.write(`fatorial de ${numeroEscolhido} é ${fatorial} <br>`)
    }
