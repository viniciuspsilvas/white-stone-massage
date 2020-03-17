import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core'
import Theme from './config/Theme'
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import client from './api'
import Loading from './components/Loading'

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
    })),
    setLocalStorage: ( name, data ) => {
      localStorage.setItem( name, data )
    },
    getLocalStorage: name => {
      return localStorage.getItem( name )
    },
  }), [ setState ])

  return (
    <ThemeProvider theme={ Theme }>
      <AppContext.Provider value={{ state, actions }}> 
        <ApolloProvider client={ client }>
          <Loading useLoader={ state.useLoader } />
          <ToastContainer
            position="top-center"
            autoClose={ 6000 }
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
        </ApolloProvider>
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export const AppConsumer = AppContext.Consumer
export default AppContext