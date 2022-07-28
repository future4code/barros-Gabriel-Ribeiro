import React  from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PaginaUm from "./components/PaginaUm";
import PaginaDois from "./components/PaginaDois";

export function App() {

  const [mudaTela, setMudaTela] = useState("pagina1");

  const renderizacao = () => {
    if (mudaTela==="pagina1") {
      setMudaTela("pagina2")
    } else {
      setMudaTela("pagina1")
    }
  }

  return (
    <>
      <button onClick={renderizacao}>Trocar de Tela</button>
      {mudaTela === "pagina1" ? <PaginaUm /> : <PaginaDois />}
    </>
  );
};

export default App;
