import React from 'react'
import Loader from 'react-loader-spinner'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
  root: {
    position: 'fixed',
    minWidth: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: '9999999'
  }
}))

const Loading = ({ useLoader }) => {

  const classes = useStyles()

  return (
    <Loader
      className={ classes.root }
      visible={ useLoader }
      type="RevolvingDot"
      color="#00BFFF"
      height={100}
      width={100}
    />
  )
}

export default Loading