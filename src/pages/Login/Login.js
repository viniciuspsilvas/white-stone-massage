import React from 'react'
import config from '../../config/config.json'
import DoubleColumn from '@bit/smart-solution-4u.components.double-column'
import LoginForm from '@bit/smart-solution-4u.components.login'
import { withRouter } from 'react-router-dom'
import AppContext from '../../AppContext.js'
import { useLazyQuery } from '@apollo/react-hooks'
import { AUTHENTICATE, VALIDATE_TOKEN } from '../../api/auth'
import Loading from '../../components/Loading'
import { useFetcher } from '../../utils/useFetcher'

const Login = props => {

  const { actions } = React.useContext(AppContext)

  const [ validateToken, validatingOptions ] = useLazyQuery(VALIDATE_TOKEN, {
    onCompleted: (res) => {
      props.history.push('/dashboard')
    }
  })

  React.useEffect(() => {
    if (actions.getLocalStorage('token')) {
      
    }
  }, [ actions, validateToken ])

  // TODO - add loading
  const [ checkUser, { loading }] = useLazyQuery(AUTHENTICATE, {
    onCompleted: (res) => {
      actions.setLocalStorage('token', res.authenticate)
      props.history.push('/dashboard')
    }
  })

  const handleLogin = data => {
    checkUser({ variables: { filter: data } })
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