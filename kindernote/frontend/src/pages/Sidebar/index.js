import React from 'react';


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

    return (
        <div>
            
            <Drawer
                className="drawer"
                variant="permanent"                
                anchor="left">
                <div className="toolbarIcon">
                    <img src={logoImg} alt="Usuário"/>
                </div>
                <Divider />
                
                <List>
                    <ListItem button key='Painel'>
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary='Painel de controle' />
                    </ListItem>
                    <ListItem button key='Perfil'>
                        <ListItemIcon><ProfileIcon /></ListItemIcon>
                        <ListItemText primary='Perfil' />
                    </ListItem>
                    <ListItem button key='Comunicados'>
                        <ListItemIcon><InfoIcon /></ListItemIcon>
                        <ListItemText primary='Comunicados' />
                    </ListItem>
                    <ListItem button key='Avisos'>
                        <ListItemIcon><EventNoteIcon /></ListItemIcon>
                        <ListItemText primary='Avisos' />
                    </ListItem>
                    <ListItem button key='Tarefas'>
                        <ListItemIcon><TasksIcon /></ListItemIcon>
                        <ListItemText primary='Tarefas' />
                    </ListItem>
                    <ListItem button key='Recados'>
                        <ListItemIcon><MessageIcon /></ListItemIcon>
                        <ListItemText primary='Recados' />
                    </ListItem>
                    <ListItem button key='Sair'>
                        <ListItemIcon><ExitIcon /></ListItemIcon>
                        <ListItemText primary='Sair' />
                    </ListItem>

                </List>

                <Divider />
                <div className="logoIcon">
                    <img src={iconImg} alt="Kindernote"/><br/>
                    <span>versão 1.0.0</span>
                </div>
                
                

            </Drawer>
        </div>
    );
}