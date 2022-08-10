import React from "react";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    }

    const goToListTrips = () => {
        navigate("/viagens/lista")
    }

    return (
        <section>
            <h1>Home</h1>
            <button onClick={ goToListTrips }>Visitante</button>
            <button onClick={ goToLogin }>Editor</button>
        </section>
    );
}

export default Home;