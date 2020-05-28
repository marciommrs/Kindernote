import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './styles.css';

export default function Dashboad() {

    return (
        <div>
            <Grid container spacing={3} className="grid-container">
                <Grid item xs={3} className="grid">
                    <Paper className="paper">Comunicados</Paper>
                </Grid>
                <Grid item xs={3} className="grid">
                    <Paper className="paper">Avisos</Paper>
                </Grid>
                <Grid item xs={3} className="grid">
                    <Paper className="paper">Tarefas</Paper>
                </Grid>
                <Grid item xs={3} className="grid">
                    <Paper className="paper">Recados</Paper>
                </Grid>
            </Grid>
        </div>
    );
}