// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = prompt("Diga a altura da forma retangular:")
  let largura = prompt("Diga a largura da forma retangular:")
  let alturaNum = Number(altura)
  let larguraNum = Number(largura)
  let area = alturaNum * larguraNum
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = prompt("Em que ano estamos agora?")
  let anoNascimento = prompt("Em que ano você nasceu?")
  let idade = anoAtual - anoNascimento
  console.log(idade) 
}

// EXERCÍCIO 03
function calculaIMC(peso, altura2) {
  // implemente sua lógica aqui
  let imc1 = peso / (altura2 * altura2)
  return(imc1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let NOME = prompt("Como você se chama?")
  let IDADE = prompt("Qual é a sua idade?")
  let EMAIL = prompt("Qual é o seu email?")
  console.log("Meu nome é "+NOME+", tenho "+IDADE+" anos, e o meu email é "+EMAIL+".")
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Diga uma cor:")
  let cor2 = prompt("Diga outra cor:")
  let cor3 = prompt("Diga mais uma cor:")
  console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return (string.toUpperCase())
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let retorno = custo / valorIngresso
  return (retorno)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.length === string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return (array[0])
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let ultimo = array.length
lastNumber = ultimo-1
return (array[lastNumber])
}
retornaUltimoElemento

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
let primeiro = array[0]
let ultimo = array.length
let realUltimo = array[ultimo-1]
array.splice(0,1, realUltimo)
array.splice(array.length-1,1,primeiro)
return (array)
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
let input1 = string1.toUpperCase()
let input2 = string2.toUpperCase()
return (input1 === input2)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt.toNumber("Em qual ano estamos?")
let nascimento = prompt.toNumber("Insira o seu ano de nascença:")
let identidade = prompt.toNumber("Quando foi emitido seu documento de indentidade?")
let idade = anoAtual-nascimento
let novo = 20 >= idade
let meio = 50 >= idade >20
let velho = idade >= 50
let negativo = idade%5

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}