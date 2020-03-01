import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import LoginForm from '@bit/smart-solution-4u.components.login'

const Login = () => {

  return (
    <DoubleColumn logo={ config.logoPath }>
      <LoginForm logo={ config.logoPath } title={ config.companyName } ></LoginForm>
    </DoubleColumn>
  );
}

export default Login;