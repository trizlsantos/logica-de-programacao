let lado1, lado2, lado3

lado1= parseInt(prompt(`digite o valor do primeiro lado`))
lado2= parseInt(prompt(`digite o valor do segundo lado`))
lado3= parseInt(prompt(`digite o valor do terceiro lado`))

if (((lado1 + lado2) > lado3) && ((lado2 + lado3) > lado1) && ((lado1 + lado3) > lado2)) {
    document.write(`pode formar um triângulo`)
} else {
    document.write(`não pode formar um triângulo, pois a soma de dois lados tem que ser maior do que o terceiro lado`)
}
