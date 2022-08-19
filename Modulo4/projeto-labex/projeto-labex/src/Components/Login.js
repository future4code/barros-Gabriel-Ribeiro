import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm"
import { BASE_URL } from "../constants/constants"

function Login() {
    
//-----Navegação
    const navigate = useNavigate();

    const goToAdminHome = () => {
        navigate("/admin/home")
    }

    const returnLastPage = () => {
        navigate("/")
    }

//-----Formulario

        const [body,onChange,clear]=useForm({ email: "", password: ""})
   
        const fazerLogin = (event) => {
            event.preventDefault()
            axios.post(`${BASE_URL}login`, body)
            .then((response)=>{
                console.log(response.data)
                goToAdminHome();
            }).catch((error)=>{
                console.log(error.data)
            })
            clear();
        }

    return (
        <section>
            <button onClick={ returnLastPage }>Voltar</button>
            <h1> Login </h1>
            <form onSubmit={fazerLogin}>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Insira seu E-mail"
                    value={body.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Insira a sua Senha"
                    value={body.password}
                    onChange={onChange}
                    pattern="^.{3,}"
                />
                <button>Login</button>
            </form>
        </section>
    );
}

export default Login;