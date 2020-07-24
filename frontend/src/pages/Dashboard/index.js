import React from 'react';
import Routes from '../../routes';
import Bar from '../../components/Bar';
import { makeStyles } from '@material-ui/core/styles';
import {NotificationContainer} from 'react-notifications';

import './styles.css'

const useStyles = makeStyles((theme) => ({
  dashboardContainer: {
    height: '100vh',
    width: '100%',
    margin: 0,
    padding: '0px',
  },
  container: {
    textAlign: 'center',
    padding: '0px 30px',
  },
}));



function Dashboard() {
  const classes = useStyles();

  return (
      <div className={classes.dashboardContainer}>
          <NotificationContainer/>
          <Bar />
          <div className={classes.container}>
            <Routes />
          </div>
      </div>
  );
}

export default Dashboard;
