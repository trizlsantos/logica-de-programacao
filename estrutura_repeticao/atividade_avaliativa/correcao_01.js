// let numero = 1

//1º maneira
// while(numero != 0){
    // alert("Entrou no laço")
    // numero = parseInt(prompt("Digite 0 para sair"))
// }

//2º maneira - continue - break
//continue -> faz um novo teste lógico
//break -> finaliza a estrutura de repetição
//for(let i = 1; i<=10; i++){
   // if(i === 5){
     //   continue
    //}
    //if(i === 7){
      //  break
    //}
    //console.log("i: " + i)
//}
//*

alert("digite 0 para sair do programa")
let numero;

do {
    numero = parseInt(prompt("digite um número"))
    if(numero === 0|| isNaN(numero)){
        //confirmar a saída
        let sair = prompt("Confirmar saída")
        if(sair) {
            break
        }else{
            continue

        }
    }

    if(numero % 2 === 0) {
        alert(`o dobro do ${numero} é: ${numero * 2}`);
    } else {
        alert(`o triplo do ${numero} é: ${numero * 3}`);
        alert("digite 0 para sair do programa")
    }while (true);
    
}while(true)

//continuar a lógica par(dobro) e impar(triplo)

