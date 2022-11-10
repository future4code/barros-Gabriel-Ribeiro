type Estatistica={
	maior:number,
	menor:number,
	media:number
}

function obterEstatisticas(numeros:any){

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// A & B) As entradas sao o parametro da funcao e os numeros criados nas variaveis numerosOrdenados(a,b),
// e em estatisticas (o output da funcao). Provavelmente feita para ordenar um array de numeros e 
//informar o maior, menor e a media dos numeros fornecidos.

// C) 

const amostraDeDados = {
    numeros: [4,24,54,77,32,19,38],
}

console.log(obterEstatisticas(amostraDeDados.numeros))