
// Exercícios de interpretação de código - X

// 1.a) Matheus Nachtergaele
//      Virginia Cavendish
//      Canal: "Globo", horario: "14h"

// 2.a) nome: "Juca", idade: 3, raca: "SRD"
//      nome: "Juba", idade: 3, raca: "SRD"
//      nome: "Jubo", idade: 3, raca: "SRD"

// b) A sintaxe de "reticências" antes de um objeto invoca suas 
// variáveis quando declarada após a criação de outro objeto.

// 3.a) false
//      Undefined

// b) O valor impresso é esse pois não foi declarada nenhuma variável
// de nome "altura".

// Exercícios de escrita de código - X

// 1.a)
//const pessoa = {
  //  nome: "Amanda", 
  //  apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }
// function saida(nome, apelidos) {
  //   console.log(`Eu sou ${nome}, mas pode me chamar de ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`)
// }

 //saida(pessoa.nome, pessoa.apelidos)

 // b)
 // const pessoa2 = {...pessoa, apelidos: ["Dinha, Amandita, Amada"]}
 //saida(pessoa2.nome, pessoa2.apelidos)

 // 2.a)
 //const pessoa1 = {
   //  nome: "Geraldo",
     //idade: 74,
     //profissao: "aposentado"
 //}
 //const pessoa2 = {...pessoa1, nome:"Gertrudes"}

 // b)
 //function investigar(nome, idade, profissao) {
 //console.log (`${nome},${nome.length},${idade},${profissao},${profissao.length}`)
 //}
//investigar(pessoa2.nome,pessoa2.idade,pessoa2.profissao)

// 3.
//let carrinho = []
//const mamao = {
//    nome: "mamao",
//    disponibilidade: true
//}
//const tomate = {
//    nome: "tomate",
//    disponibilidade: false
//}
//const cereja = {
//    nome: "cereja",
//    disponibilidade: true
//}
//function adicionar(fruta) {
//    carrinho.push(fruta)
//}
//adicionar(mamao)
//adicionar(tomate)
//adicionar(cereja)
//console.log(carrinho)

// Desafios - X

// 1.
//let nome = prompt("Qual seu nome?")
//let idade = prompt("Qual é a sua idade?")
//let profissao = prompt("Qual é sua profissão?")
//const user = {
    //nomeReal: nome,
    //idadeReal: idade,
    //profissaoReal: profissao
//}
//console.log(user)

// 2. 
//const filme1 = {
    //nome: "Helicópteros em fuga",
    //anoLancamento: 2009
//}
//const filme2 = {
    //nome: "Romance sem fim",
    //anoLancamento: 2018
//}
//function comparar(data1,data2) {
    //console.log("O primeiro filme foi lançado antes do segundo?",data2>data1)
    //console.log("O primeiro filme foi lançado no mesmo ano do segundo?",data1==data2)
//}
//comparar(filme1.anoLancamento,filme2.anoLancamento)

// 3.
//function negativo(baixa) {
    //return baixa===0
//}