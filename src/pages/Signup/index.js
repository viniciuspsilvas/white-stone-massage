import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import SignupForm from '@bit/smart-solution-4u.components.signup'

const Signup = () => {

  return (
    <DoubleColumn logo={ config.logoPath }>
      <SignupForm logo={ config.logoPath } title={ config.companyName } ></SignupForm>
    </DoubleColumn>
  );
}

export default Signup;