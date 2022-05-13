// Exercícios de interpretação de código

// 1. 10 & 10, 5

// 2. 10, 10 e 10

// 3. p = horasTrabalhadas & t = salárioPorDia

let nome = null

let idade = null

console.log (typeof nome)
console.log (typeof idade)

// Parece que o console imprime como objeto as variáveis não declaradas

nome = prompt("Qual é seu nome?")
idade = prompt("Quantos anos tem?")

console.log (nome, typeof nome)
console.log (idade, typeof idade)

// Ambas as variáveis passaram a ser String, por não ter configurado 
//a idade como número.

console.log("Olá ," ,nome,", você tem",idade,"anos.")

let chuva = prompt("Choveu no dia de hoje?")
let agua = prompt("Lembrou de beber bastante água?")
let calor = prompt("Fez calor onde mora hoje?")

console.log ("Choveu no dia de hoje? ---" ,chuva)
console.log ("Lembrou de beber bastante água? ---" ,agua)
console.log ("Passou calor hoje? ---" ,calor)

let a = 10
let b = 25

console.log ("O valor inicial de a é" ,a)
console.log ("O valor inicial de b é" ,b)

let c = a
a = b
b = c

console.log ("O valor atual de a é" ,a)
console.log ("O valor atual de b é" ,b)

let resposta1 = prompt("Fale um número")
let resposta2 = prompt("Agora diga mais um")

let numero1 = Number(resposta1)
let numero2 = Number(resposta2)

console.log(typeof numero1, typeof numero2)

let soma = numero1+numero2
let multiplicacao = numero1 * numero2

console.log ("A soma dos dois números é" ,soma)
console.log ("Eles multiplicados dão o valor de:", multiplicacao)
