import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import ListCustomerScreen from './ListCustomerScreen'

const Customer = props => {

  const handleNew = () => {
    props.history.push( `${ props.location.pathname }/new`)
  }

  return (
    <div>
      <ActionToolBar title='Customer'>
        <Button variant='contained' color='primary' onClick={ handleNew }> New </Button>
      </ActionToolBar>
      <ListCustomerScreen />
    </div>
  )
}

export default withRouter( Customer )