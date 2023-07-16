import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <h1>Welcome to the Home Page</h1>
      {isAuthenticated && <p>You are logged in!</p>}
    </div>
  );
};

export default Home;
