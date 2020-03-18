import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import LoginForm from '@bit/smart-solution-4u.components.login'
import { withRouter } from 'react-router-dom'
import AppContext from '../../AppContext.js'
import { AUTHENTICATE } from '../../api/auth'
import { useLazyFetcher } from '../../utils/useFetcher'

const Login = props => {

  const { actions } = React.useContext(AppContext)

  const [ checkUser ] = useLazyFetcher(AUTHENTICATE, {
    onComplete: (res) => {
      actions.setLocalStorage('token', res)
      props.history.push('/dashboard')
    }
  })

  const handleLogin = data => {
    checkUser({ filter: data } )
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

export default withRouter( Login )