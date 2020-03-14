import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import Checkbox from '@bit/smart-solution-4u.components.checkbox'
import DragNDrop from '@bit/smart-solution-4u.components.dragndrop'
import { Button, Grid, Avatar, Typography, Divider, makeStyles, Hidden } from '@material-ui/core'
import { useForm } from 'react-hook-form'

const useStyles = makeStyles( theme => ({
  dragndropContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}))

const NewStaff = props => {

  const classes = useStyles()
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const goBack = () => {
    props.history.push('/treatments')
  }

  return (
    <div>
      <ActionToolBar title='Create Treatment'>
        <Button variant='contained' color='primary'> Save </Button>
        <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
      </ActionToolBar>

      <Container>
        <form onSubmit={ handleSubmit( onSubmit )}>
          <Grid container spacing={ 6 } >
            <Grid item xs={ 12 } md={ 6 }>
              <Grid container spacing={ 2 } >
                <Grid item xs={ 12 } md={ 6 }>
                  <InputText label='Name' name='name' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                  <InputText label='Price' name='price' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 12 }>
                  <InputText label='Description' name='description' inputRef={ register({ required: true })} errors={ errors } multiline />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <Checkbox label='Active' name='active' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default withRouter( NewStaff )