// ------ Exercícios de interpretação de código ------
//1.a)
/* Vai ser impresso no console um array com os objetos exatamente 
igual ao que foi inserido no começo do código.
*/

//2.a)
/*["Amanda Rangel","Lais Petra", "Letícia Chijo"]
Uma array com as variáveis .nome do objeto usuarios.
*/

//3.a)
/* { nome: "Amanda Rangel", apelido: "Mandi" },
   { nome: "Laís Petra", apelido: "Laura" },
  Ou seja, todos os elementos da array que não possuírem o apelido "Chijo"
*/

// ------ Exercícios de escrita de código -------
//1.a)

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((item, index, array) => {
     console.log (item.nome)
 })

//b)

 const salsichas = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})
console.log(salsichas)

//c)

let promocao = []

const desconto = pets.filter((item,index,array)=>{
    if (item.raca === "Poodle"){
    promocao.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`)
}
})
console.log (promocao)*/

//2.a)
/*
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((item, index, array) => {
    console.log (item.nome)
})

//b)

const descontoCinco = produtos.map((item, index, array) =>{
    return [item.nome, item.preco*0.95]
})
console.log(descontoCinco)

//c)

const bebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
console.log(bebidas)

//d)

const ype = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê")
})
console.log(ype)

//e)
const compreYpe = []
const compre = ype.map((item,index,array) =>{
    compreYpe.push(`Compre ${item.nome} por ${item.preco}]`)
})
console.log(compreYpe)*/

// ------ DESAFIOS ------

//1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 pokemonAbc=[]
 const pokemonSorteados = pokemons.map((item,index,array) =>{
     pokemonAbc.push(pokemons.nome)
     pokemonAbc.sort(function(a,b))
 })
 console.log(pokemonAbc)