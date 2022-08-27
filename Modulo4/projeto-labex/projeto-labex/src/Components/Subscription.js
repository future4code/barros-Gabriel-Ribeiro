import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";

import styled from "styled-components";

const SubscriptionStyle = styled.section`
    background-image: url(https://acegif.com/wp-content/uploads/gif/outerspace-6.gif);
    background-position: center;
    height: 97vh;
    text-align: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0.5px 0.5px 2px black;

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

function Subscription(element) {
    //-----------Navigation                    

    const navigate = useNavigate();

    const returnLastPage = () => {
        navigate(-1)
    }

    //----------------Form

    const [body,onChange,clear]=useForm({ name: "", age: "", applicationText: "", profession: "", country:""})
   
    const applyToTrip = (event) => {
        event.preventDefault()
        //axios.post(`${BASE_URL}/${id}/apply`, body)
        .then((response)=>{
            console.log(response.data)
        }).catch((error)=>{
            console.log(error.data)
        })
        clear();
    }

return (
    <SubscriptionStyle>
        <button onClick={ returnLastPage }>Voltar</button>
        <h1> Inscrição de Viagem </h1>
        <form onSubmit={applyToTrip}>
            <div>
            <label htmlFor="name">Seu nome: </label>
            <input
                id="name"
                name="name"
                type="text"
                placeholder="Insira seu Nome"
                value={body.name}
                onChange={onChange}
                required
            /></div>
            <div>
            <label htmlFor="age">Sua idade: </label>
            <input
                id="age"
                name="age"
                type="number"
                required
                placeholder="Escreva a sua idade"
                value={body.age}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="applicationText">Por que você deveria ir? </label>
            <input
                id="applicationText"
                name="applicationText"
                type="text"
                required
                placeholder="Diga porque deveríamos te chamar"
                value={body.applicationText}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="profession">Profissão atual: </label>
            <input
                id="profession"
                name="profession"
                type="text"
                required
                placeholder="Informe sua profissão"
                value={body.profession}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="country">País de residência: </label>
            <input
                id="country"
                name="country"
                type="text"
                required
                placeholder="Insira seu país"
                value={body.country}
                onChange={onChange}
            /></div>
            <button>Inscrever-se na viagem</button>
        </form>
    </SubscriptionStyle>
);
}

export default Subscription;