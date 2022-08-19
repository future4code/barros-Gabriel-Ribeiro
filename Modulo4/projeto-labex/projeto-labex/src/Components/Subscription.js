import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


function Subscription(element) {
    

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
            <li>
            <button onClick={ Login }>Fazer Login</button>
            <form>
            <input type="string" placeholder="Nome" value={""}></input>

            </form>
            </li>
        </section>
    );
}

export default Subscription;