import React from "react";
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/constants';

function Subscription() {
    
    const [dataTrip,isLoadingTrip,erroTrip]=userApply(`${BASE_URL}trips/${element.id}`)

    const listTripsNames = dataTrip&&dataTrip.trips&&dataTrip.trips.map((element)=>{
        return <option key={element.id}>{element.name}</option>;
    })
    
    const navigate = useNavigate();

    const Login = () => {
        navigate("/login")
    }

    const returnLastPage = () => {
        navigate(-1)
    }


    return (
        <section>
            <h1>Inscreva-se na Viagem</h1>
            <li>
            <button onClick={ Login }>Fazer Login</button>
            <input type="string" placeholder="Nome" value={""}></input>
            <button onClick={ ${} }>Enviar</button>
            </li>
        </section>
    );
}

export default Subscription;