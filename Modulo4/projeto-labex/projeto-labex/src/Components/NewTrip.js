import React from "react";
import { useNavigate } from 'react-router-dom';
import { useForm } from "../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { useProtectPage } from "../hooks/useProtectPage";
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

function NewTrip() {
    
    useProtectPage();
    
    //------------Navegacao
    
    const navigate = useNavigate();

    const logOff = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }

    //=====Formulario
    
    const [body,onChange,clear]=useForm({ name: "", planet: "", date: "", description: "", duration:""})
   
    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}trips`, body)
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
        <h1> Criar nova Viagem </h1>
        <form onSubmit={createTrip}>
            <div>
            <label htmlFor="name">Nome da festa: </label>
            <input
                id="name"
                name="name"
                type="name"
                placeholder="Insira seu Nome"
                value={body.name}
                onChange={onChange}
                required
            /></div>
            <div>
            <label htmlFor="planet">Planeta: </label>
            <input
                id="planet"
                name="planet"
                type="text"
                required
                placeholder="Insira o planeta"
                value={body.planet}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="date">Data: </label>
            <input
                id="date"
                name="date"
                type="date"
                required
                placeholder="Insira a data"
                value={body.date}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="description">Descrição da viagem: </label>
            <input
                id="description"
                name="description"
                type="text"
                required
                placeholder="Descreva a viagem..."
                value={body.description}
                onChange={onChange}
            /></div>
            <div>
            <label htmlFor="duration">Duração da viagem: </label>
            <input
                id="duration"
                name="duration"
                type="number"
                required
                placeholder="Duração da viagem"
                value={body.duration}
                onChange={onChange}
            /></div>
            <button>Criar viagem</button>
        </form>
    </SubscriptionStyle>
);
}

export default NewTrip;