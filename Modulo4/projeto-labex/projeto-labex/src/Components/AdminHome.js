import React from "react";
import { useNavigate } from 'react-router-dom';

function AdminHome() {
    const navigate = useNavigate();

    const tripDetails = () => {
        navigate("/admin/gerenciar-viagem")
    }

    const newTrip = () => {
        navigate("/admin/nova-viagem")
    }

    const returnLastPage = () => {
        navigate(-1)
    }

    return (
        <section>
            <h1>Gerencie Viagens</h1>
            <button onClick={ returnLastPage }>Voltar</button>
            <button onClick={ tripDetails }>Detalhes</button>
            <button onClick={ newTrip }>Criar nova viagem</button>
        </section>
    );
}

export default AdminHome;