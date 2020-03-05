import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import LoginForm from '@bit/smart-solution-4u.components.login'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AppContext from '../../AppContext.js'

const Login = props => {

  const { actions } = React.useContext(AppContext)

  const handleLogin = data => {
    if (data.username === 'admin' && data.password === '12345') {
      actions.setUser({
        username: 'admin',
        name: 'Administrator',
        email: 'admin@admin.com.au'
      })
      
      props.history.push('/dashboard')
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
      <LoginForm logo={ config.logoBlackTextPath } handleSignUp={ handleSignUp } handleForgotPassword={ handleForgotPassword } onLogin={ handleLogin } ></LoginForm>
    </DoubleColumn>
  );
}

export default withRouter( Login );