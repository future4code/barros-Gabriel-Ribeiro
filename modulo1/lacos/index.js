// ----- Exercícios de interpretação de código -----

/* 
1. O código cria um loop que se repete aqui que o valor de i seja igual
a 5, e depois soma com a variável valor (que é igual) e resulta em 10.

2. a) No console será impresso todas as variáveis da arrat lista, uma após a outra.
Isso é, a partir do número 19 até o 30, já que a condição impõe isso.

b) Se você entende por índice uma lista completa de todos os elementos,
é só deixar como condição o numero ser maior ou igual a 10.

3. "*"
   "**"
   "***"
   "****"
*/

// ----- Exercícios de escrita de código -----

//1.
/*
let pets = Number(prompt("Quantos animais de estimação você tem?"))
let nomes = []
if (pets == 0){
    console.log("Que pena! Você pode adotar um pet!");
} else {
    while (pets > 0){
        nome = prompt("Diga o nome de um deles:")
        nomes.push(nome)
        pets = pets - 1
    }
console.log(nomes)
}*/

//2.a)
/*
const arrayOriginal = Number([])
function a () {
for (let numero of arrayOriginal) {
    console.log(numero)
}}*/

//b)
/*
const arrayOriginal = Number([])
function b () {
for (let numero of arrayOriginal) {
    let resultado = numero / 10
    console.log(resultado)
}}*/

//c)
/*
const arrayOriginal = Number([])
function c () {
for (let numero of arrayOriginal) {
    if (numero % 2 == 0){
        let pares = []
        pares.push(numero)
    } 
    console.log(pares)   
}}*/

//d)
/*
const arrayOriginal = Number([])
function d () {
for (let numero of arrayOriginal) {
      let index = []
      index.push(numero)
      let print = []
      print.push(`O elemento do índex ${index.length} é ${numero}`)
    console.log(print)   
}}*/

//e)
/*
let valorMaximo = 10
let valorMinimo = 150
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
function letraE (array) {
for (let numero of array) {
    if (numero > valorMaximo){
        valorMaximo = numero
    } else if (numero < valorMinimo){
        valorMinimo = numero
    }
}
console.log(`O maior número é ${valorMaximo} e o menor ${valorMinimo}.`)
}
letraE (arrayOriginal)
*/

// ----- DESAFIOS -----
//1.
/*
let numeroMeta = Number(prompt("Insira o número a ser advinhado:"))
console.log("Vamos jogar!")
let qntdChutes = 0
let numeroChute = 0
while (numeroChute != numeroMeta){
    numeroChute = Number(prompt("Dê o seu melhor chute:"))
    console.log (`O número chutado foi: ${numeroChute}.`)
    if (numeroChute>numeroMeta){
            console.log("Errou, é um número mais baixo.")
    }
    if (numeroChute<numeroMeta){
            console.log("Errou, é um número mais alto.")
    }
qntdChutes++
} if (numeroMeta == numeroChute){
    console.log(`Você acertou! Isso tomou ${qntdChutes} tentativa(s).`)
}
*/

//2.
/*
let numeroMeta = Number(Math.floor((Math.random()*100)+1));
console.log("Vamos jogar!")
let qntdChutes = 0
let numeroChute = 0
while (numeroChute != numeroMeta){
    numeroChute = Number(prompt("Dê o seu melhor chute:"))
    console.log (`O número chutado foi: ${numeroChute}.`)
    if (numeroChute>numeroMeta){
            console.log("Errou, é um número mais baixo.")
    }
    if (numeroChute<numeroMeta){
            console.log("Errou, é um número mais alto.")
    }
qntdChutes++
} if (numeroMeta == numeroChute){
    console.log(`Você acertou! Isso tomou ${qntdChutes} tentativa(s).`)
}
*/
