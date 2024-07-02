import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Make sure App.css exists in src directory
import Header from './Components/Header'; // Adjust path based on your structure
import EmployeeForm from './Components/EmployeeForm'; // Adjust path based on your structure
import EmployeeDetail from './Components/EmployeeDetail'; // Adjust path based on your structure
import EmployeeList from './Components/EmployeeList'; // Adjust path based on your structure

function App() {
  const [employees, setEmployees] = React.useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <EmployeeForm onSubmit={addEmployee} />
              <EmployeeList employees={employees} />
              <button onClick={saveData}>Save Data</button>
            </>
          } />
          <Route path="/employees/:id" element={<EmployeeDetail employees={employees} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
