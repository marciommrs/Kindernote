import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './reset.css'
import './global.css'

import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
        <Switch>
        <Route path="/login" exact component={() => <h1>LOGIN</h1>} />
          <div className="app-container">
              <Sidebar />
              <Dashboard />
          </div>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
