import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './reset.css'
import './global.css'

import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
        <div className="app-container">
            <Sidebar />
            <Dashboard />
        </div>
    </BrowserRouter>
  );
}

export default App;
