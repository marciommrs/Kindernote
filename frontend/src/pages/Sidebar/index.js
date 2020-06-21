import React from 'react';
import { useHistory } from 'react-router-dom';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
/** Icons */
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventNoteIcon from '@material-ui/icons/EventNote';
import ProfileIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';
import TasksIcon from '@material-ui/icons/CollectionsBookmark';
import MessageIcon from '@material-ui/icons/QuestionAnswer';
import ExitIcon from '@material-ui/icons/ExitToApp';

import logoImg from '../../assets/user.jpg';
import iconImg from '../../assets/icon.png';

import './styles.css';

export default function Sidebar() {
    const history = useHistory();

    function navigate(url) {
        history.push(url);
    }

    return (
        <div className="sidebar-container">
            <Drawer
                className="drawer"
                variant="permanent"                
                anchor="left">
                <List className="sidebar-list">
                    <Divider variant="fullWidth" />
                    <ListItem button key='Painel' onClick={() => navigate("/")}>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary='Painel de controle' />
                    </ListItem>
                    <ListItem button key='Perfil' onClick={() => navigate("/perfil")}>
                        <ListItemIcon><ProfileIcon /></ListItemIcon>
                        <ListItemText primary='Perfil' />
                    </ListItem>
                    <ListItem button key='Comunicados' onClick={() => navigate("/comunicados")}>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary='Comunicados' />
                    </ListItem>
                    <ListItem button key='Avisos' onClick={() => navigate("/avisos")}>
                        <ListItemIcon><EventNoteIcon /></ListItemIcon>
                        <ListItemText primary='Avisos' />
                    </ListItem>
                    <ListItem button key='Tarefas' onClick={() => navigate("/tarefas")}>
                        <ListItemIcon><TasksIcon /></ListItemIcon>
                        <ListItemText primary='Tarefas' />
                    </ListItem>
                    <ListItem button key='Recados' onClick={() => navigate("/recados")}>
                        <ListItemIcon><MessageIcon /></ListItemIcon>
                        <ListItemText primary='Recados' />
                    </ListItem>
                    <ListItem button key='Sair'>
                        <ListItemIcon><ExitIcon /></ListItemIcon>
                        <ListItemText primary='Sair' />
                    </ListItem>
                    <Divider variant="fullWidth" />
                </List>
            </Drawer>

            <div className="toolbarIcon">                
                <img src={logoImg} alt="Usuário"/>
                <span>Lui Barbosa Marques Rosa</span>
            </div>
            <div className="logoIcon">                
                <img src={iconImg} alt="Kindernote"/><br/>
                <span>versão 1.0.0</span>
            </div>
        </div>
    );
}