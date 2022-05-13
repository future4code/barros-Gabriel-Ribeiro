// --------- Exercícios de interpretação ---------
// 1.a) Ele testa se o número é par checando se o resto da divisão 
// dele dá 0.

// b) Os tipos pares.

// c) Os tipos ímpares.

// 2.a) Serve para checar o preço de uma fruta escrita.

// b) "O preço da fruta Maçã é R$2.25"

// c) "O preço da fruta Pêra é R$5"

// 3.a) A primeira linha cria uma constante chamada numero, que recebe
// como valor o número digitado (E converte a string para número).

// b) "Esse número passou no teste"
//    "Essa mensagem é secreta!!!"
//    e com -10 nada apareceria.

// c) Não haveria nenhum erro, apenas não acionaria o gatilho
// necessário para ativar o código escrito, já que -10 é menor que 0.

// --------- Exercícios de escrita ---------
//1.
/*function maiorDeIdade () {
    let idade = Number(prompt("Diga a sua idade:"))
    if (idade>=18) {
        console.log ("Você pode tirar sua carteira.")
    } else {
        console.log ("Espere alguns anos para dirigir.")
    }
}
maiorDeIdade()*/

//2.
/*function turnoDoAluno () {
    let entrada = prompt("Digite M para manhã, V para tarde e N para noite:").toUpperCase()
    switch (entrada){
        case 'M':
            console.log("Bom dia!")
            break
        case 'V':
            console.log("Boa tarde!")
            break
        case 'N':
            console.log("Boa noite!")
            break
    }
}
turnoDoAluno()*/

//3. Eu fiz direto nele...

//4.
/*function escolhaDoFilme (){
    let generoEscolhido = prompt("Qual gênero você quer ver?").toLowerCase()
    let precoDoFilme = Number(prompt("Sabe quanto está o ingresso?"))
    if (generoEscolhido == "fantasia") {
        if (precoDoFilme <= 15){
            console.log("Oba! Vamos ver juntos!")
        } else {
            console.log("Não tem nenhum mais barato?")
        } 
    } else {
        console.log("Não tem como a gente escolher outro filme?")
    }
}
escolhaDoFilme()*/

// DESAFIO 1.
/*function escolhaDoFilme (){
    let generoEscolhido = prompt("Qual gênero você quer ver?").toLowerCase()
    let precoDoFilme = Number(prompt("Sabe quanto está o ingresso?"))
    if (generoEscolhido == "fantasia") {
        if (precoDoFilme <= 15){
            let lanchinho = prompt("O que você quer comer?")
            console.log(`Oba! Vamos ver juntos! Espero que você goste de ${lanchinho}.`)
        } else {
            console.log("Não tem nenhum mais barato?")
        } 
    } else {
        console.log("Não tem como a gente escolher outro filme?")
    }
}
escolhaDoFilme()*/

// DESAFIO 2.
/*let preco = 0
function vendaIngressos(){
    const nome = prompt("Informe seu nome completo:")
    const tipoDeJogo = prompt("Digite IN para um jogo internacional e DO para um doméstico:").toUpperCase()
    const etapaDoJogo = prompt("SF= Semi-final, DT= Terceiro lugar e FI= Final").toUpperCase()
    const categoria = prompt("Escolha uma categoria de acento(1,2,3 ou 4):")
    const quantidade = Number(prompt("Diga quantos ingressão serão comprados:"))
    switch (etapaDoJogo){
        case 'SF':
        switch (categoria){
            case "1":
                preco = quantidade * 1320
                break
            case "2":
                preco = quantidade * 880
                break
            case "3":
                preco = quantidade * 550
                break
            case "4":
                preco = quantidade * 220
                break
        }
        case 'DT':
        switch (categoria){
            case "1":
                preco = quantidade * 660
                break
            case "2":
                preco = quantidade * 440
                break
            case "3":
                preco = quantidade * 330
                break
            case "4":
                preco = quantidade * 170
                break
        }
        case 'FI':
        switch (categoria){
            case "1":
                preco = quantidade * 1980
                break
            case "2":
                preco = quantidade * 1320
                break
            case "3":
                preco = quantidade * 880
                break
            case "4":
                preco = quantidade * 330
                break
            }
        }
    const dolar = 4.1
    const ingresso = preco/quantidade
    if (tipoDeJogo === "IN"){
        preco = preco * dolar
    } 
    console.log(`${nome}, você comprou ${quantidade} ingressos para ${etapaDoJogo}|${tipoDeJogo}, na categoria ${categoria} por ${ingresso}, somando um total de: ${preco}.`)
    }

vendaIngressos()*/