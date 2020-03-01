import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import SignupForm from '@bit/smart-solution-4u.components.signup'
import { withRouter } from 'react-router-dom'

const Signup = props => {

  const handleLogin = () => {
    props.history.push('/login')
  }

  return (
    <DoubleColumn logo={ config.logoPath }>
      <SignupForm logo={ config.logoPath } title={ config.companyName } handleLogin={ handleLogin } ></SignupForm>
    </DoubleColumn>
  );
}

export default withRouter( Signup );