let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, -6, -10];

//** Relembrando alguns conceitos

/* 1 - leia o array mostre os numeros positivos
* 2 - leia o array mostre os numeros negativos
* 3 - Leia o Array verifique o se no array existe o numero 6 e qual posição ele está.
 */

//Início 1º - Leia o Array Mostre os números positivos
//let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

//for(let i = 0; i<vetor1.length; i++){
//    if(vetor1[i] > 0){
//        console.log(`Valor ${vetor1[i]} positivo`)
//    }
//}
//fim 1 º

//algoritmo 2 
//vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];
//for(let i = 0; i<vetor1.length; i++){
 // if(vetor1[i] < 0){
       //    console.log(`Valor ${vetor1[i]} negativo`)
     //   }
  //  }

  //algoritmo 3 
  vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];
  for(let i = 0 ; i < vetor1.length; i++){
    if(vetor1[i] === 6) {
        console.log(`O numero ${vetor1[i]} está na posição ${i}º`);
    }
  }