import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProjectCard from './components/ProjectCard/ProjectCard';



export default function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            
        </BrowserRouter>
    );

}

/* FALTA CRIAR OS COMPONENTS


<Route path="/dashboard/cadastrar-usuario" exact component={CreateUser}/>
<Route path="/dashboard/cadastrar-cliente" exact component={CreateClient}/>
            
*/