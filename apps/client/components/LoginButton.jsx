"use client";
import React from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    // In a real app, this would redirect to the backend auth endpoint
    // For now, it just shows an alert.
    alert('Logging in with GitHub...');
    // window.location.href = '/api/auth/github';
  };

  return (
    <button className="login-button" onClick={handleLogin}>
      Login with GitHub
    </button>
  );
};

export default LoginButton;