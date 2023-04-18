import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Input } from '@mantine/core';

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
      navigate('/upload');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className='signIn'>
      <h2>Enter Password</h2>
      <Input type="password" value={password} onChange={handlePasswordChange} />
      <Button className='signIn_button' onClick={handleLogin}>Log In</Button>
      {error && <div>{error}</div>}
    </div>
  );
}
