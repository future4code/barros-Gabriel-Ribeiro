import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from '../Components/AdminHome';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Subscription from '../Components/Subscription';
import TripList from '../Components/TripList';
import NewTrip from '../Components/NewTrip';
import ManageTrip from '../Components/ManageTrip';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="login" element={ <Login /> } />

            <Route path="viagens/lista" element={ <TripList /> } />
            <Route path="viagens/inscricao" element={ <Subscription /> } />

            <Route path="admin/home" element={ <AdminHome /> } />
            <Route path="admin/nova-viagem" element={ <NewTrip /> } />
            <Route path="admin/gerenciar-viagem" element={ <ManageTrip /> } />

        </Routes>
    </BrowserRouter>
  );
}

export default Router;