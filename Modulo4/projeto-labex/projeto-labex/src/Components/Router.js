import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import Home from './Home';
import Login from './Login';
import Subscription from './Subscription';
import TripList from './TripList';
import NewTrip from './NewTrip';
import ManageTrip from './ManageTrip';

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