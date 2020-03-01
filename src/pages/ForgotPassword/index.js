import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import ForgotPasswordForm from '@bit/smart-solution-4u.components.forgot-password'

const ForgotPassword = () => {

  return (
    <DoubleColumn logo={ config.logoPath }>
      <ForgotPasswordForm logo={ config.logoPath } title={ config.companyName } ></ForgotPasswordForm>
    </DoubleColumn>
  );
}

export default ForgotPassword;