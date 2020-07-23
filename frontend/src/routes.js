import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Painel';
import Perfil from './pages/Perfil';
import ComunicadosList from './pages/Comunicados/List';
import ComunicadosEdit from './pages/Comunicados/Edit';
import AvisosList from './pages/Avisos/List';
import AvisosEdit from './pages/Avisos/Edit';
import TarefasList from './pages/Tarefas/List';
import TarefasEdit from './pages/Tarefas/Edit';
import Recados from './pages/Recados';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/perfil" component={Perfil} />

            <Route path="/comunicados" component={ComunicadosList} />
            <Route path="/*Comunicado" component={ComunicadosEdit} />

            <Route path="/avisos" component={AvisosList} />
            <Route path="/*Aviso" component={AvisosEdit} />
            
            <Route path="/tarefas" component={TarefasList} />
            <Route path="/*Tarefa" component={TarefasEdit} />

            <Route path="/Recados" component={Recados} />
        </Switch>
    );
}