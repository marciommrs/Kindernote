import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: '5px 30px 30px 30px'
  },
  grid: {
    margin: 0,
    cursor: 'pointer',
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    opacity: 0.6,
    backgroundImage: 'none',
    "&:hover": {
      backgroundColor: '#e2e2e2',
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  function navigate(url) {
    history.push(url);
  }

  return (
    <>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={3} className={classes.grid} onClick={() => navigate("/comunicados")}>
            <Paper className={classes.paper}>Comunicados</Paper>
        </Grid>
        <Grid item xs={3} className={classes.grid} onClick={() => navigate("/avisos")}>
            <Paper className={classes.paper}>Avisos</Paper>
        </Grid>
        <Grid item xs={3} className={classes.grid} onClick={() => navigate("/tarefas")}>
          <Paper className={classes.paper}>Tarefas</Paper>
        </Grid>
        <Grid item xs={3} className={classes.grid} onClick={() => navigate("/recados")}>
          <Paper className={classes.paper}>Recados</Paper>
        </Grid>
      </Grid>
    </>
  );
}