import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login'
import Principal from '../pages/Principal'
import Registro from "../pages/Registro";

function Rutas () {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Login }/>
                <Route path='/principal' component ={ Principal }/>
                <Route path="/registrar" component ={ Registro } />
            </Switch>
        </BrowserRouter>
    );
}

export default Rutas;