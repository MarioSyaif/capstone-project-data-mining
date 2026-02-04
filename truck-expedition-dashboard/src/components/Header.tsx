import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <path d="M2 5H4L6 3H18L20 5H22" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9" stroke="currentColor" strokeWidth="2"/>
            <circle cx="6" cy="17" r="2" fill="currentColor"/>
            <circle cx="18" cy="17" r="2" fill="currentColor"/>
          </svg>
          <h1>Truck Expedition</h1>
        </div>
        <nav>
          <a href="#dashboard">Dashboard</a>
          <a href="#orders">Orders</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;