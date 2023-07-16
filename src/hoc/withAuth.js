import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const history = useHistory();

    // Your authentication logic here
    useEffect(() => {
      // Perform any necessary authentication checks
      // For example, check if the user is logged in or has valid credentials

      const isAuthenticated = localStorage.getItem('token')// Your authentication logic
      if (!isAuthenticated) {
        history.push('/login');
      }
    }, [history]);

    return <WrappedComponent {...props} />;
  };

  return AuthHOC;
};

export default withAuth;




/* --------------------------- IN your app.js file -------------------------- */

/* 
import withAuth from './withAuth';
import Home from './Home';
import AdminDashboard from './AdminDashboard';
import Login from './Login';

const ProtectedHome = withAuth(Home);
const ProtectedAdminDashboard = withAuth(AdminDashboard);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={ProtectedAdminDashboard} />
        <Route path="/" component={ProtectedHome} />
      </Switch>
    </Router>
  );
};
*/