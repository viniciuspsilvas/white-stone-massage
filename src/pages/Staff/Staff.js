import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import ListStaff from './ListStaff'

const Staff = props => {

  const handleNew = () => {
    props.history.push( `${ props.location.pathname }/new`)
  }

  const handleEdit = React.useCallback(id => {
    props.history.push( `${ props.location.pathname }/edit/${ id }`)
  }, [ props.history, props.location.pathname ])

  return (
    <div>
      <ActionToolBar title='Staff'>
        <Button variant='contained' color='primary' onClick={ handleNew }> New </Button>
      </ActionToolBar>
      <ListStaff onEdit={ handleEdit } />
    </div>
  )
}

export default withRouter( Staff )