import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import LoginForm from '@bit/smart-solution-4u.components.login'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const Login = props => {

  const handleLogin = data => {
    if (data.username === 'admin' && data.password === '12345') {
      props.history.push('/dashboard/1')
    } else {
      toast.error(<span style={{ display: 'flex', justifyContent:'center', alignItems: 'center'}}><SentimentVeryDissatisfiedIcon style={{ marginRight: '10px' }} /> Incorrect username or password. </span>)
    }
  }

  const handleSignUp = () => {
    props.history.push('/signup')
  }

  const handleForgotPassword = () => {
    props.history.push('/forgotpassword')
  }

  return (
    <DoubleColumn logo={ config.logoPath }>
      <LoginForm logo={ config.logoPath } title={ config.companyName } handleSignUp={ handleSignUp } handleForgotPassword={ handleForgotPassword } onLogin={ handleLogin } ></LoginForm>
    </DoubleColumn>
  );
}

export default withRouter( Login );