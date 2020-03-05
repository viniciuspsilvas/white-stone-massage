import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import Theme from './config/Theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AppContext = React.createContext()

export const AppProvider = ( props ) => {

  const [ state, setState ] = useState({ useLoader: false, user: {} })

  const actions = React.useMemo(() => ({
    setUseLoader: useLoader => setState(st => ({
      ...st,
      useLoader
    })),
    setUser: user => setState(st => ({
      ...st,
      user
    }))
  }), [ setState ])

  React.useEffect(() => {

    actions.setUser({
      name: 'Patricia Ott',
      email: 'patricia@gmail.com'
    })

      // get user by token => window.localStorage.token
      // set user => actions.setUser()
  }, [ actions ])

  return (
    <ThemeProvider theme={ Theme }>
      <AppContext.Provider value={{ state, actions }}> 
        <ToastContainer
          position="top-center"
          autoClose={ 5000 }
          hideProgressBar={ false }
          newestOnTop={ false }
          bodyClassName='custom-toast'
          closeOnClick
          rtl={ false }
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        { props.children } 
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export const AppConsumer = AppContext.Consumer
export default AppContext