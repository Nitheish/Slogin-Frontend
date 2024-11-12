import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Welcome() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

 
  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken'); 

      if (!refreshToken) {
        console.log('No refresh token found, logging out...');
        handleLogout();
        return;
      }

      
      const { data } = await axios.post('http://localhost:7000/api/auth/refresh-token', {
        token: refreshToken, 
      });

      
      localStorage.setItem('accessToken', data.accessToken);
      console.log('Token refreshed:', data.accessToken);
    } catch (error) {
      console.error('Token refresh failed:', error);
      handleLogout(); 
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    refreshToken();
  }, []); 
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h2>Welcome to the Welcome Page!</h2>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Welcome;
