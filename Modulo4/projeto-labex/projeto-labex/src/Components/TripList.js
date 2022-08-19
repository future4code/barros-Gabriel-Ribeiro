import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from '../constants/constants';
import Card from "./Card";

function TripList() {

    const [dataTrip,isLoadingTrip,erroTrip]=useRequestData(`${BASE_URL}trips`)
    
    const listTrip = dataTrip&&dataTrip.trips&&dataTrip.trips.map((dataTrip)=>{
        return<li>{Card(dataTrip.id, dataTrip.name, dataTrip.description, dataTrip.duration, dataTrip.date)}</li>
    })

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login")
    };

    const subscribe = () => {
        navigate("/viagens/inscricao")
    };

    return (
        <section>
            <h1>Nossas Viagens</h1>
                {isLoadingTrip&&"Carregando..."}
                <ul>
                {!isLoadingTrip&&dataTrip&&listTrip}
                </ul>
                {!isLoadingTrip&&!dataTrip&&erroTrip}
            <button onClick={ goToLogin }>Login</button>
            <button onClick={ subscribe }>Se inscrever na viagem</button>
        </section>
    );
}

export default TripList;