import React from 'react';
import './Header.css'; 
import EmployeeForm from './EmployeeForm'; 
import EmployeeDetail from './EmployeeDetail'; 
import EmployeeList from './EmployeeList'; 

const Header = () => {
  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo-container">
          {/* Replace with your logo image or text */}
          <img src="/path-to-your-logo.png" alt="Logo" className="App-logo" />
          <h1 className="App-title">Employee Management System</h1>
        </div>
        {/* Add navigation links if needed */}
        <nav className="App-nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/employees">Employees</a></li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
