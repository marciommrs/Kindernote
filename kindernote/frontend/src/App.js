import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import './reset.css'
import './global.css'

import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
        <div className="app-container">
            <Sidebar />
            <Dashboard />
        </div>
      </Router>
  );
}

export default App;
