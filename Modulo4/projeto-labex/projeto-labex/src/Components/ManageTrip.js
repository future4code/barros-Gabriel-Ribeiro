import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from '../constants/constants';
import Card from "./Card";
import { useProtectPage } from "../hooks/useProtectPage";

function ManageTrip() {

    //-----------Navigation

    useProtectPage();

    const navigate = useNavigate();

    const logOff = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }

    //-------Content
    
    const [dataTrip,isLoadingTrip,erroTrip]=useRequestData(`${BASE_URL}trips`)

    console.log(dataTrip)

    const listTrip = dataTrip&&dataTrip.trips&&dataTrip.trips.map((trip)=>{
       return <Card id={trip.id} name={trip.name} description={trip.description} planet={trip.planet} duration={trip.duration} date={trip.date}/>
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