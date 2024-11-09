let numero

numero = parseInt(prompt("Digite um número"));

var Primo = true;

if (numero < 2) {
    Primo = false;
} else {
    for(var i =2; i < numero; i++){
        if (numero % i === 0) {
            Primo = false;
            break;
        } else {
            continue
        }
    }
}

if (Primo) {
    document.write(`${numero} é um número primo`)
} else {
    document.write(`${numero} não é um número primo`)
}