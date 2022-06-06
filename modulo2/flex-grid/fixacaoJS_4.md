ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    // Escreva seu código aqui
let eventos = 0
  for (const escolhido of arrayDeNumeros)
    if (escolhido == numeroEscolhido) {
      eventos = eventos+1
    }
  if (eventos==0) { 
  console.log('Número não encontrado')
  } else {
  console.log(`O número ${numeroEscolhido} aparece ${eventos}x`)
  }
}
ˋˋˋ