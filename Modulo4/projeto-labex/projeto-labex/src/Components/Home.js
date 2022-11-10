import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const SubscriptionStyle = styled.section`
    background-image: url(https://cdn.theatlantic.com/thumbor/qhOK9i-edRINNZdDYuXKeeUb-Iw=/0x0:1600x900/976x549/media/img/mt/2019/12/Nasa/original.gif);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: top;
    height: 91vh;
    text-align: center;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 0.5px 0.5px 2px black;
    margin: 0px;

    img {
        width: 20%;
        margin: 2vh;
        background-color: white;
        border-radius: 8em;
        box-shadow: 0.5px 0.5px 4px black;
    }

    h1 {
        font-size: 5em;
    }

    button {
        margin: 2em;
        border: 0px;
        padding: 1.5vh 1.5%;
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
    `

function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const goToListTrips = () => {
        navigate("/viagens/lista")
    }

    return (
        <SubscriptionStyle>
            <div><h1>Solaris</h1>
            <img src="https://seeklogo.com/images/S/sun-shaped-logo-CFB63C6690-seeklogo.com.png" alt="icon"></img></div>
            <button onClick={ goToListTrips }>Conheça nossas viagens</button>
            <button onClick={ goToLogin }>Entrar como Admnistrador</button>
        </SubscriptionStyle>
    );
}

export default Home;