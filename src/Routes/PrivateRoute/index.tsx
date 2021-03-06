import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

type RouteType = {
  component: React.ComponentType<RouteProps>,
  path: string,
  exact: boolean
}


const PrivateRoute: React.FC<RouteType> = ({ component: RouteComponent, ...rest }) => {

  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? (
          <RouteComponent {...routeProps}/>
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  )
};

export default PrivateRoute;