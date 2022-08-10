import React from "react";
import { useNavigate } from 'react-router-dom';

function Subscription() {
    const navigate = useNavigate();

    const Login = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }


    return (
        <section>
            <h1>Inscreva-se na Viagem</h1>
            <button onClick={ Login }>Fazer Login</button>
            <button onClick={ returnLastPage }>Enviar</button>
        </section>
    );
}

export default Subscription;