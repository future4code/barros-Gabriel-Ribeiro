//Exercício Funções
//Interpretação de código

//1.a. 10 e 50
//b. Não apareceria nada no console.

//2.a. Essa função serve para retornar se no texto inserido está 
//escrito "cenoura" 
//b. i.True ii.True iii.True

//Exercícios de escrita
//1.
//a.
//function escrever(){
//"Eu sou Gabriel, tenho 24 anos, moro em Niterói e sou estudante"
//}
//console.log(escrever)

//b.
//function frames(nome,idade,cidade,profissao){
//return("Eu sou",nome,", tenho",idade,"anos, moro em",cidade,"e sou",profissao,"."
//}

//2.
//a.
//let input1 = prompt("Insira o 1º número:")
//let number1 = Number(input1)
//let input2 = prompt("Insira o 2º número:")
//let number2 = Number(input2)
//function soma(number1,number2){
//    let resultado = number1 + number2
//    return(resultado)
//}

//b.
//function maiorOuIgual(number1,number2){
//    return(number1 >= number2)
//}

//c.
//function par(number1){
//    let conta = number1%2
//    let resultado = conta == 0
//    return(resultado)
//}

//d.
//function tamanhoMaiuscula (string){
//   let tamanho = string.length
//   let maiuscula = string.toUpperCase()
//   console.log (tamanho,maiuscula)
//}

//3.
//let input1 = prompt("Diga um número:")
//let input2 = prompt("Fale apenas mais um:")
//let numero1 = Number(input1)
//let numero2 = Number(input2)

//function somar(){
//    let resultado = numero1 + numero2
//    return(resultado)    
//}
//let somado = somar(numero1,numero2)

//function subtrair(){
//    let resultado = numero1 - numero2
//    return(resultado)
//}
//let subtraido = subtrair(numero1,numero2)
//
//function multiplicar(){
//    let resultado = numero1 * numero2
//    return(resultado)
//}
//let multiplicado = multiplicar (numero1, numero2)

//function dividir(){
//    let resultado = numero1 / numero2
//    return(resultado)
//}
//let dividido = dividir(numero1, numero2)

//console.log("Números inseridos:",numero1,"e",numero2)
//console.log("Soma:",somado)
//console.log("Diferença:",subtraido)
//console.log("Multiplicação:",multiplicado)
//console.log("Divisão:",dividido)

//Desafios
//1.
//const teste1 = 2
//const teste2 = 3

//const imprimir = (entrada) =>{
//    console.log(entrada)
//}
//const somar = (valor1,valor2) =>{
//    const soma = valor1 + valor2
//    imprimir(soma)
//}

//somar(teste1,teste2)

//2.
//const pitagoras = (cateto1,cateto2) =>{
//    let catetoAoQuadrado1 = cateto1 * cateto1
//    let catetoAoQuadrado2 = cateto2 * cateto2
//    let soma = catetoAoQuadrado1 + catetoAoQuadrado2
//    let hipotenusa = Math.sqrt(soma)
//console.log (hipotenusa)
//}