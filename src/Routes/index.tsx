
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/' component={Dashboard}/>
      </Switch>
    </Router>
  )
}

export default Routes;