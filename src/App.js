import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';

function App() {
  
  const accessToken = localStorage.getItem('accessToken');
  console.log(localStorage.getItem('accessToken'), "access_token");
console.log(accessToken, "accessToken");
const isAuthenticated = !!accessToken;

console.log("Access token in localStorage:", accessToken);
console.log("Is authenticated:", isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome /> } />
      </Routes>
    </Router>
  );
}

export default App;
