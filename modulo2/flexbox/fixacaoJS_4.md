```

let a = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]
let b = 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let eventos = 0
for (const escolhido of arrayDeNumeros)
  if (escolhido == numeroEscolhido) {
    eventos++
  }

if (eventos==0) { 
console.log('Número não encontrado')
} else {
console.log(`O número ${numeroEscolhido} aparece ${eventos}x`)
}
}
contaOcorrencias(a,b)

```
