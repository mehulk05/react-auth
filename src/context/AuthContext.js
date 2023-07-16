import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null represents the initial loading state

  useEffect(() => {
    // Simulate an asynchronous check for authentication
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token); // Update the authentication status based on the presence of a token
    };

    checkAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {isAuthenticated === null ? (
        <div>Loading...</div> // Render a loader while checking authentication status
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
