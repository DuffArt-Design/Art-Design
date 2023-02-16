import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Secret({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (password === process.env.REACT_APP_PASSWORD) {
      onLogin(true);
      console.log("onLogin called");
      navigate('/upload');
    } else {
      setError('Incorrect password');
    }
  };
  
  

  return (
    <div>
      <h2>Enter Password</h2>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button onClick={handleLogin}>Log In</button>
      {error && <div>{error}</div>}
    </div>
  );
}
