// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
      }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = []
    for (let teste of array) {
      if (teste % 2 == 0){
          pares.push(teste)
      }
  }
return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let elevados = []
    for (let teste of array) {
      if (teste % 2 == 0){
      let resultado = teste * teste
      elevados.push(resultado)
      }
  }
return elevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let compare = 1
    for (let input of array) {
        if (input>compare){
            compare = input
        }
    }
    return compare
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    function divisivel (n1,n2) {
        if (n1>n2) {
            return n1%n2==0
        } else if (n1<n2) {
            return n2%n1==0
        } else if (n1==n2) {
            return true
        }
    }
    function diferenca (n1,n2) {
        if(n1>n2) {
            return n1-n2
        } else if (n1<n2) {
            return n2-n1
        } else if (n1==n2) {
            return 0
        }
    }
    const array = [num1,num2]
    const Objeto = {
        maiorNumero : retornaMaiorNumero(array),
        maiorDivisivelPorMenor : divisivel(num1, num2),
        diferenca : diferenca(num1,num2)
    }
    return Objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}

