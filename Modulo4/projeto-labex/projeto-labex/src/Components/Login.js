import React from "react";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate("/admin/home")
    }

    const returnLastPage = () => {
        navigate("/")
    }

    return (
        <section>
            <h1>Login</h1>
            <button onClick={ returnLastPage }>Voltar</button>
            <button onClick={ goToAdminHome }>Entrar</button>
        </section>
    );
}

export default Login;