import React from "react";
import { useNavigate } from 'react-router-dom';
import { useProtectPage } from "../hooks/useProtectPage";
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from "../constants/constants";

function AdminHome() {
    
    useProtectPage();

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

    //-------Page

    const data=useRequestData(`${BASE_URL}juniorp/trip/reTQKzHx3izgvBMzsFTi`,
    {headers:{
        auth:localStorage.getItem("token")

    }}
    );
    console.log(data);

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