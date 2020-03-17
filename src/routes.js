import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { AppProvider } from './AppContext'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Customer from './pages/Customer'
import Treatment from './pages/Treatment'
import Staff from './pages/Staff'
import Appointment from './pages/Appointment'
import EditTreatment from './pages/Treatment/Edit'
import NewTreatment from './pages/Treatment/New'
import EditStaff from './pages/Staff/Edit/EditStaff'
import NewStaff from './pages/Staff/New/NewStaff'

export const Routes = () => {
  
  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={ () => <Redirect to='/login' /> } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/signup' component={ Signup } />
          <Route exact path='/forgotpassword' component={ ForgotPassword } />
          <PrivateRoute exact path='/dashboard' component={ Dashboard } />
          <PrivateRoute exact path='/customers' component={ Customer } />
          <PrivateRoute exact path='/staff' component={ Staff } />
          <PrivateRoute exact path='/staff/edit/:id' component={ EditStaff } />
          <PrivateRoute exact path='/staff/new' component={ NewStaff } />
          <PrivateRoute exact path='/treatments' component={ Treatment } />
          <PrivateRoute exact path='/treatments/edit/:id' component={ EditTreatment } />
          <PrivateRoute exact path='/treatments/new' component={ NewTreatment } />
          <PrivateRoute exact path='/appointments' component={ Appointment } />
        </Switch>
      </BrowserRouter>
    </AppProvider>
)}

export default Routes;