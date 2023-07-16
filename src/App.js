import React from 'react';
import { BrowserRouter as Router, Switch, Route , Redirect} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './Routes/ProtectedRoute';
import Home from './components/Home';
import AdminDashboard from './components/Admin';
import Login from './components/Login';

const App = () => {
  console.log('e')
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} exact />
          <ProtectedRoute path="/admin" component={AdminDashboard} exact />
          <ProtectedRoute path="/home" component={Home} exact />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

        </Switch>
      </AuthProvider>
    </Router>
  );
};

export default App;
