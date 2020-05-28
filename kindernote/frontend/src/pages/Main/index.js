import React from 'react';

import SideBar from '../Sidebar';
import DashBoad from '../Dashboard';

import './styles.css';

export default function Main() {

    return (
        <div className="main-container">
            <div className="sidebar-container">
                <SideBar />
            </div>
            <div className="dashboad-container">
                <DashBoad />
            </div>
        </div>
    );
}