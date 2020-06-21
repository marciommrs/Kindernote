import React from 'react';
import { useHistory } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './styles.css';

export default function Header() {
    const history = useHistory();

    function navigate(url) {
        history.push(url);
    }

    return (
          <Grid container spacing={3} className="grid-container">
              <Grid item xs={3} className="grid" onClick={() => navigate("/comunicados")}>
                  <Paper className="paper">Comunicados</Paper>
              </Grid>
              <Grid item xs={3} className="grid" onClick={() => navigate("/avisos")}>
                  <Paper className="paper">Avisos</Paper>
              </Grid>
              <Grid item xs={3} className="grid" onClick={() => navigate("/tarefas")}>
                  <Paper className="paper">Tarefas</Paper>
              </Grid>
              <Grid item xs={3} className="grid" onClick={() => navigate("/recados")}>
                  <Paper className="paper">Recados</Paper>
              </Grid>
          </Grid>
    );
}