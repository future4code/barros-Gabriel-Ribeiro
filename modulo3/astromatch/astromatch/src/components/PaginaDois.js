import React, { useEffect, useState } from "react";
import axios from "axios";
import CardMini from "./CardMini"

export function PaginaDois() {

    const [matches,setMatches] = useState([])


    useEffect (() => {
        getMatches();
    }, []);

    //---------- Axios -----------
    const url2 =
    "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gabriel-ribeiro-barros/matches";


    // Puxando o Pefil
    const getMatches = () => {
        axios
            .get(url2)
            .then((response) => {
                setMatches(response.data.matches);
                console.log (response)
            })
            .catch((erro) => {
                console.log(erro.response)
            });
    };

return (
    <div>
        <h1>Pagina 2</h1>
        <ul> {matches.map((match) => {
      return (
        <CardMini key={match.id}
                  photo={match.photo}
                  name={match.name}
                  age={match.age}/>
      )    
        })}
        </ul>
        
    </div>
)

}

export default PaginaDois 