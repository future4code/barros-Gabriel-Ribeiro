let minhaString:string = "Batatinha"
//let outraString:string = 8

// A) Ao inserir uma variavel de numero, o typescript nao reconhece a entrada e ja aponta um erro.

let meuNumero:number = 87

// B) Para que a variavel possa aceitar mais de um tipo de valor e necessario alterar a sua configuracao
// no momento da tipagem, inserindo any ao inves de number. Ou criar um objeto que receba diferentes variaveis
// e cada uma delas tenha um tipo especifico.

// C & D)

type Perfil = {
    nome:string,
    idade:number,
    cor:Cores

}

enum Cores {
    AMARELO="Amarelo",
    VERMELHO="Vermelho",
    AZUL="Azul",
    LARANJA="Laranja", 
    VERDE="Verde",
    ANIL="Anil",
    VIOLETA="Violeta"
}

const novoObjeto:Perfil=
{
    nome: "Carlinhos",
    idade: 28,
    cor: Cores.AZUL
}

const segundoObjeto:Perfil=
{
    nome: "Josineide",
    idade: 43,
    cor: Cores.VERMELHO
}

const terceiroObjeto:Perfil=
{
    nome: "Marilene",
    idade: 66,
    cor: Cores.VIOLETA
}

const quartoObjeto:Perfil=
{
    nome: "Claudio",
    idade: 19,
    cor: Cores.VERDE
}

