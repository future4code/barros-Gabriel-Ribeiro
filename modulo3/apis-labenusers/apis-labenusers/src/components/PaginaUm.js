import React, { useState } from "react";
import axios from "axios";

export function PaginaUm() {

  const [novoUser, setNovoUser] = useState("");
  const [novoEmail, setNovoEmail] = useState("");

  //Recebe dados do Input
  const atualizaInput = (event) => {
    setNovoUser(event.target.value);
  };

  const atualizaEmail = (event) => {
    setNovoEmail(event.target.value);
  };

  //---------- Axios -----------
  const url =
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

  const myHeaders = {
    headers: {
      Authorization: "gabriel-ribeiro-barros",
    },
  };

  //POST
  const body = {
    name: novoUser,
    email: novoEmail,
  };

  const createUser = (event) => {
    event.preventDefault();
    axios
      .post(url, body, myHeaders)
      .then(() => {
        alert("Usuário adicionado com sucesso!");
      })
      .catch((erro) => {
        alert("Ops! Algo deu errado aqui!");
      });
    setNovoUser("");
  };

  return (
    <div>
      <h1> Cadastre um Usuario</h1>

      <form>
        <input
          type="text"
          value={novoUser}
          placeholder="Usuario"
          onChange={atualizaInput}
        />
        <input
          type="text"
          value={novoEmail}
          placeholder="Email"
          onChange={atualizaEmail}
        />
        <button onClick={createUser}>Criar Usuário</button>
      </form>
    </div>
  );
}

export default PaginaUm;
