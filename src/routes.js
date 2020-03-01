import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { AppProvider } from './AppContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'

export const Routes = () => {
  
  return (
  <AppProvider>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={ () => <Redirect to='/login' /> } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/forgotpassword' component={ ForgotPassword } />
        <Route exact path='/dashboard' component={ Dashboard } />
      </Switch>
    </BrowserRouter>
  </AppProvider>
)}

export default Routes;
