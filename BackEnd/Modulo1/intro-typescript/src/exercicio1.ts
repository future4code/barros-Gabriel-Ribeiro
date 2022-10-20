type Triangulo={
    a:number,
    b:number,
    c:number
}

const triangulo:Triangulo[]=[
{    
    a:2,
    b:3,
    c:4
},
]

function checaTriangulo(Valores:any) {
    if (Valores.a !== Valores.b && Valores.b !== Valores.c) {
      return "Escaleno";
    } else if (Valores.a === Valores.b && Valores.b === Valores.c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  
  console.log(checaTriangulo(triangulo))