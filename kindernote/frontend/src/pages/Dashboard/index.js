import React from 'react';
import Routes from '../../routes'

import Header from '../Header';

import './styles.css'

function Dashboard() {
  return (
      <div className="dashboad-container">
          <Header />
          <div className="container">
            <Routes />
          </div>
      </div>
  );
}

export default Dashboard;
