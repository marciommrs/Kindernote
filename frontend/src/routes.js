import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Painel';
import Perfil from './pages/Perfil';
import ComunicadosList from './pages/Comunicados/List';
import ComunicadosEdit from './pages/Comunicados/Edit';
import AvisosList from './pages/Avisos/List';
import AvisosEdit from './pages/Avisos/Edit';
import Tarefas from './pages/Tarefas';
import Recados from './pages/Recados';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/perfil" component={Perfil} />

            <Route path="/comunicados" component={ComunicadosList} />
            <Route path="/addComunicado" component={ComunicadosEdit} />
            <Route path="/editComunicado" component={ComunicadosEdit} />

            <Route path="/avisos" component={AvisosList} />
            <Route path="/addAviso" component={AvisosEdit} />
            <Route path="/editAviso" component={AvisosEdit} />
            
            <Route path="/tarefas" component={Tarefas} />
            <Route path="/Recados" component={Recados} />
        </Switch>
    );
}