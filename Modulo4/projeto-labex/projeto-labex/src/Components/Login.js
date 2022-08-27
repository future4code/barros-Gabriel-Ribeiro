import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm"
import { BASE_URL } from "../constants/constants"
import styled from "styled-components";

const SubscriptionStyle = styled.section`
    background-image: url(https://acegif.com/wp-content/uploads/gif/outerspace-6.gif);
    background-position: center;
    height: 97vh;
    text-align: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0.5px 0.5px 2px black;

    img {
        width: 40%;
        margin-left: 30vh;
    }

    button {
        margin-top: 2em;
        border: 0px;
        padding: 0.6vh 1.3%;
        border-radius: 5px;
        box-shadow: 1px 1px 5px black;
w
        &:hover {
            background-color: #07021a;
            color: white;
            font-weight: 600;
            padding: 0.7vh 1.4%;
        }
    }

    div {
        display: grid;
        justify-content: center;
        margin-top: 1em;

        label {
            font-weight: 500;
            text-shadow: 0.5px 0.5px 2px black;
        }

        input {
                border: 0px;
                border-radius: 3px;
                width: 33vh;
                height: 3vh;
                margin-top: 0.5em;
                box-shadow: 0.5px 0.5px 4px 0.5px black;
            }

    }

    
`

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

        const [login,onChange,clear]=useForm({ email: "", password: ""})
   
        const fazerLogin = (event) => {
            event.preventDefault()
            axios.post(`${BASE_URL}login`, login)
            .then((response)=>{
                console.log(response.data)
                localStorage.setItem("token",response.data.token);
                goToAdminHome();
            })
            .catch((error)=>{
                console.log(error.data)
            })
        }

    return (
        <SubscriptionStyle>
            <button onClick={ returnLastPage }>Voltar</button>
            <div>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ring-planet-5695515-4771379.png" alt="icon"></img>
            <h1> Login </h1></div>
            <form onSubmit={fazerLogin}>
                <div>
                <label htmlFor="email">E-mail: </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Insira seu E-mail"
                    value={login.email}
                    onChange={onChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                /></div>
                <div>
                <label htmlFor="password">Senha: </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Insira a sua Senha"
                    value={login.password}
                    onChange={onChange}
                    pattern="^.{3,}"
                /></div>
                <button>Login</button>
            </form>
        </SubscriptionStyle>
    );
}

export default Login;