import React, {useState,useEffect} from "react";
import axios from "axios";

export function PaginaDois() {
    
    const [meusUsers, setMeusUsers] = useState([]);
    const [userSearch, setUserSearch] = useState("")

    useEffect(() => {
        getUserlist();
      }, []);

      const atualizaPesquisa = (event) => {
        setUserSearch(event.target.value);
      };
    
  //---------- Axios -----------
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const myHeaders = {
    headers: {
        Authorization: "gabriel-ribeiro-barros",
    },
    };

  //GET
  const getUserlist = () => {
    axios
      .get(url, myHeaders)
      .then((response) => {
        setMeusUsers(response.data.result.list);
      })
      .catch((erro) => {
        console.log(erro.response);
        console.log("Passei");
      });
  };

return (
    <div>
        <h1>Pagina 2</h1>
        <ul>
            {meusUsers.map((user) => {
            return <li key={user.id}>{user.name}</li>;
            })}
        </ul>
        <h3>Procurar usuário</h3>
        <input
          type="text"
          value={userSearch}
          placeholder="Nome exato para busca"
          onChange={atualizaPesquisa}
        />
        <button onClick={getUserlist}>Criar Usuário</button>
    </div>
)

}

export default PaginaDois