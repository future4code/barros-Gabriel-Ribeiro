/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")
let maoJogador = []
let maoPc = []
if(confirm("Você quer jogar uma partidinha?")){
   jogadorCartas = 0
   pcCartas = 0
   const carta1 = comprarCarta();
   const carta2 = comprarCarta();
   const carta3 = comprarCarta();
   const carta4 = comprarCarta();

let pontuacaoJogador = carta1.valor+carta2.valor
   console.log(`Usuário - cartas: ${carta1.texto} | ${carta2.texto} - pontuação ${pontuacaoJogador}`)
let pontuacaoPc = carta3.valor+carta4.valor
   console.log(`Computador - cartas: ${carta3.texto} | ${carta4.texto} - pontuação: ${pontuacaoPc}`)
if(pontuacaoJogador>pontuacaoPc){
   console.log("Você ganhou do computador!")
} else if (pontuacaoJogador<pontuacaoPc) {
   console.log("O computador ganhou de você...")
} if (pontuacaoJogador==pontuacaoPc){
   console.log("Vocês empataram essa partida.")}
} else {
   console.log("Até a próxima!")
}