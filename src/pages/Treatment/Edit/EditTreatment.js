import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import Checkbox from '@bit/smart-solution-4u.components.checkbox'
import { Button, Grid } from '@material-ui/core'
import { useForm } from 'react-hook-form'

const EditTreatment = props => {

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  const goBack = () => {
    props.history.push('/treatments')
  }

  return (
    <div>
      <ActionToolBar title={ `Edit Treatment # ${ props.match.params.id }` }>
        <Button variant='contained' color='primary'> Save </Button>
        <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
      </ActionToolBar>

      <Container>
        <form onSubmit={ handleSubmit( onSubmit )}>
          <Grid container spacing={ 4 } >
            <Grid item xs={ 12 } md={ 2 }>
              <InputText label='Code' inputRef={ register() } disabled />
            </Grid>
            <Grid item xs={ 12 } md={ 3 }>
              <InputText label='Name' name='name' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 4 }>
              <InputText label='Description' name='description' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 2 }>
              <InputText label='Price' name='price' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 2 }>
              <InputText label='Created At' inputRef={ register() } disabled />
            </Grid>
            <Grid item xs={ 12 } md={ 2 }>
              <Checkbox label='Active' name='active' inputRef={ register() } errors={ errors } />
            </Grid>
          </Grid>
          </form>
      </Container>
    </div>
  )
}

export default withRouter( EditTreatment )