import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const history = useHistory();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    // Perform logout logic, e.g., clear token from local storage
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    history.push('/login');
  };

  return (
    <div>
      <h2>Header</h2>
      {isAuthenticated ? (
        <div>
          <p>Hi, User!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default Header;
