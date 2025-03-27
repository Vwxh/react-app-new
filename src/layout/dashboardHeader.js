import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './../css/public/layout-dashboardHeader.css';

export const DashboardHeader = () => {
  const location = useLocation(); // Get the current route
  const [activeTab, setActiveTab] = useState(location.pathname); // Track active tab

  return (
    <div className='navigation-div'>
      <nav>

        <Link 
          to="user" 
          className={activeTab === "/user" ? "active-link" : ""}
          onClick={() => setActiveTab("/user")}
        >
          USER
        </Link>

        <Link 
          to="attendance" 
          className={activeTab === "/dashboard/attendance" ? "active-link" : ""}
          onClick={() => setActiveTab("/dashboard/attendance")}
        >
          ATTENDANCE
        </Link>

        <Link 
          to="device" 
          className={activeTab === "/device" ? "active-link" : ""}
          onClick={() => setActiveTab("/device")}
        >
          DEVICE
        </Link>
      </nav>
    </div>
  );
};

