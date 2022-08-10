import React from "react";
import { useNavigate } from 'react-router-dom';

function NewTrip() {
    const navigate = useNavigate();

    const logOff = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }


    return (
        <section>
            <h1>Criar Viagem</h1>
            <button onClick={ logOff }>Deslogar</button>
            <button onClick={ returnLastPage }>Voltar</button>
        </section>
    );
}

export default NewTrip;