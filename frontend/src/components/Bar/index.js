import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxHeight: '40px',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolBar: {
    maxHeight: '40px',
    minHeight: '40px',
    paddingRight: '0px',
  }
}));

export default function Bar() {
  const classes = useStyles();
  const history = useHistory();

  function navigate(url) {
      history.push(url);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}><DashboardIcon /></Button>
          <Button color="inherit"><ExitToAppIcon /></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
