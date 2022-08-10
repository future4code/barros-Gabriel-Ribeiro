import React from "react";
import { useNavigate } from 'react-router-dom';

function TripList() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const subscribe = () => {
        navigate("/viagens/inscricao")
    }

    return (
        <section>
            <h1>Nossas Viagens</h1>
            <button onClick={ goToLogin }>Login</button>
            <button onClick={ subscribe }>Se inscrever na viagem</button>
        </section>
    );
}

export default TripList;