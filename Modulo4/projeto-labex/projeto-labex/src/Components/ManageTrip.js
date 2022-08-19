import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from '../constants/constants';
import Card from "./Card";

function ManageTrip() {
    const navigate = useNavigate();

    const logOff = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }

    const [dataTrip,isLoadingTrip,erroTrip]=useRequestData(`${BASE_URL}trips`)
    
    const listTrip = dataTrip&&dataTrip.trips&&dataTrip.trips.map((dataTrip)=>{
        return<li>{Card(dataTrip.id, dataTrip.name, dataTrip.description, dataTrip.duration, dataTrip.date)}</li>
    })

    return (
        <section>
            <h1>Nome da Viagem</h1>
            <button onClick={ logOff }>Deslogar</button>
            <button onClick={ returnLastPage }>Voltar</button>
                {isLoadingTrip&&"Carregando..."}
                <ul>
                {!isLoadingTrip&&dataTrip&&listTrip}
                </ul>
                {!isLoadingTrip&&!dataTrip&&erroTrip}
        </section>
    );
}

export default ManageTrip;