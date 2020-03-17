import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import { Button, Grid } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useFetcher } from '../../../utils/useFetcher'
import { GET_STAFF } from '../../../api/staff'

const EditStaff = props => {

  const { register, handleSubmit, errors, setValue } = useForm()

  useFetcher(
    GET_STAFF,
    {
      filter: { filter: { id: props.match.params.id ? parseInt(props.match.params.id) : 0 }},
      onComplete: (res) => {
        console.log(res)
        setValue('staff', res, true)
      }
    }
  )

  const onSubmit = data => {
    console.log(data)
  }

  const goBack = () => {
    props.history.push('/staff')
  }

  return (
    <div>
      <ActionToolBar title={ 'Edit Staff' }>
        <Button variant='contained' color='primary'> Save </Button>
        <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
      </ActionToolBar>

      <Container>
        <form onSubmit={ handleSubmit( onSubmit )}>
          <Grid container spacing={ 6 } >
            <Grid item xs={ 12 } md={ 2 }>
              <InputText label='Code' name='staff.id' inputRef={ register() } disabled />
            </Grid>
            <Grid item xs={ 12 } md={ 5 }>
              <InputText label='First Name' name='staff.firstname' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 5 }>
              <InputText label='Last Name' name='staff.lastname' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 4 }>
              <InputText label='Email' name='staff.email' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 4 }>
              <InputText label='ABN' name='staff.abn' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 4 }>
              <InputText label='TFN' name='staff.tfn' inputRef={ register({ required: true })} errors={ errors } />
            </Grid>
            <Grid item xs={ 12 } md={ 3 }>
              <InputText label='Created At' name='staff.createdAt' inputRef={ register() } disabled />
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

export default withRouter( EditStaff )