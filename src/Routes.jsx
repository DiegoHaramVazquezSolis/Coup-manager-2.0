import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LoginController from './Controllers/LoginController';
import RegistroController from './Controllers/RegistroController';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginController} />
            <Route exact path="/registro/equipo" component={RegistroController} />
        </Switch>
    );
}

export default Routes;

