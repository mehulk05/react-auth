import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';

const AdminDashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Welcome to the Admin Dashboard</h1>
      {isAuthenticated && <p>You are logged in as an admin!</p>}
    </div>
  );
};

export default AdminDashboard;
