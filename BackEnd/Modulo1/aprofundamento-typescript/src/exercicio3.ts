// A)

type PostGeral =Postagem[]

type Postagem = 
{
    autor:string,
    texto:string
}

const posts : PostGeral = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  // B) As entradas são os parâmetros da função, e sua saída os posts relacionados ao autos mencionado no parâmetro.

  function buscarPostsPorAutor(posts:PostGeral, autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }