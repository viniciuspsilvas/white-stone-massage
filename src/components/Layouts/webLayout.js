import React from 'react'
import { Route } from 'react-router-dom';
import Container from '../Container/Container';
import WebMenu from '../WebMenu/WebMenu';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'calc(100vh - 20em - 95px)'
  }
}))

const WebLayout = ({component: Component, ...rest}) => {

  const classes = useStyles()

  return (
    <Route {...rest} render={matchProps => (
      <Container>
        <WebMenu />
        <Container className={ classes.root } >
          <Component {...matchProps} />
        </Container>
        <Footer />
      </Container>
    )} />
  )
};

export default WebLayout