import React from "react";
import { useNavigate } from 'react-router-dom';
import useRequestData from "../hooks/useRequestData";
import { BASE_URL } from '../constants/constants';
import Card from "./Card";
import styled from "styled-components";

const listStyle = styled.section`
background-image: url(https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);

`

function TripList() {

    const [dataTrip,isLoadingTrip,erroTrip]=useRequestData(`${BASE_URL}trips`)

    console.log(dataTrip)

    const listTrip = dataTrip&&dataTrip.trips&&dataTrip.trips.map((trip)=>{
       return <Card id={trip.id} name={trip.name} description={trip.description} planet={trip.planet} duration={trip.duration} date={trip.date}/>
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
            <button onClick={ subscribe }>Se inscrever em uma viagem</button>
            {listTrip} 
            <button onClick={ goToLogin }>Login</button>
        </section>
    );
}

export default TripList;