import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card"

export function PaginaUm() {

    const [perfil,setPerfil] = useState([])

    // Puxando o Pefil
    const getPerfil = () => {
        axios
            .get(url)
            .then((response) => {
                setPerfil(response.data.profile)
            })
            .catch((erro) => {
                console.log(erro.response)
            });
    };


    useEffect(() => {
        getPerfil();
    }, []);

const escolha = (id, choice) => {
    const body = {
        "id": id,
        "choice": choice
    }
    axios
        .post(urlMatch, body)
        .then((response) => {
            getPerfil();
            console.log (response)
        })
        .catch((erro) => {
            console.log(erro.response)
        })

}

  //---------- Axios -----------
  const url =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-ribeiro-barros/person";

    const urlMatch =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-ribeiro-barros/choose-person"
 
// Renderizando


// Output

  return (
    <div>
      <h1> Pagina 1</h1>
        
        <Card key={perfil.id}
           photo={perfil.photo}
           name={perfil.name}
           age={perfil.age}
           bio={perfil.bio}
         />
           <button onClick={()=>{escolha(perfil.id,true)}}> Deslike </button>
           <button onClick={()=>{escolha(perfil.id,false)}}> Coração</button>
    </div>
  );
}

export default PaginaUm;