// A)

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// B) Com a extesao do javascript eu adicionaria as linhas de codigo no arquivo package.json que faria o tsc(transpilacao) e criaria na pasta build atraves do comando node.
// Em seguida executaria o comando no terminal. OBS.: Vi agora que e do typescript pro javascript, nesse caso: Ah, removeria os tipos.

// C) Talvez mudaria o endereco do comando tsc para o diretorio src. Nao tenho certeza.

// D) Se voce nao especificar o arquivo ou diretorio provalmente ira ocorrer a transpilacao de todos os arquivos inseridos na pasta onde o package.json estiver inserido.

