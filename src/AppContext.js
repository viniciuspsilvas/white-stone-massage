import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Theme from './config/Theme';

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

  return (
    <ThemeProvider theme={ Theme }>
      <AppContext.Provider value={{ state, actions }}> 
        {/* <ToastContainer
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
        /> */}
        { props.children } 
      </AppContext.Provider>
    </ThemeProvider>
  )
}

export const AppConsumer = AppContext.Consumer
export default AppContext