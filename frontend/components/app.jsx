import React from 'react';
import GreetingContainer from "./greeting_container";
import SignupContainer from './session_form/signup_container'
import LoginContainer  from './session_form/login_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <div className ="header">
       <Link className ="logo" to="/">BetterCraft</Link>
      <div className = "header-right">
      <GreetingContainer/>
      </div>
    </div>
    <Redirect to="/" />
    <AuthRoute exact path="/signup" component={SignupContainer} />
    <AuthRoute exact path="/login" component={LoginContainer} />

  </div>
);


export default App