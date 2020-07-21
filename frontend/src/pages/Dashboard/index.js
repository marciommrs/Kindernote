import React from 'react';
import Routes from '../../routes';

import Header from '../Header';

import './styles.css'

import {NotificationContainer} from 'react-notifications';

function Dashboard() {
  return (
      <div className="dashboad-container">
          <NotificationContainer/>
          <Header />
          <div className="container">
            <Routes />
          </div>
      </div>
  );
}

export default Dashboard;
