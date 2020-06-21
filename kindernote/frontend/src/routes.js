import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Painel';
import Perfil from './pages/Perfil';
import Comunicados from './pages/Comunicados';
import Avisos from './pages/Avisos';
import Tarefas from './pages/Tarefas';
import Recados from './pages/Recados';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/perfil" component={Perfil} />
            <Route path="/comunicados" component={Comunicados} />
            <Route path="/avisos" component={Avisos} />
            <Route path="/tarefas" component={Tarefas} />
            <Route path="/Recados" component={Recados} />
        </Switch>
    );
}