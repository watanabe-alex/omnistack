//npm install react-router-dom //para configurar as rotas

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//sempre que importa uma pasta ela já procura o arquivo index lá dentro
import Logon from './pages/Logon'; 
import Register from './pages/Register'; 
import Profile from './pages/Profile'; 
import NewIncident from './pages/NewIncident'; 


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>  
                {/* Tem que colocar 'exact' porque ele só busca o começo da rota e aí aparecia sempre essa página */}
                <Route path="/" exact component={Logon}/>            
                <Route path="/register" component={Register}/>            
                <Route path="/profile" component={Profile}/>            
                <Route path="/incidents/new" component={NewIncident}/>            
            </Switch>
        </BrowserRouter>
    );
}   