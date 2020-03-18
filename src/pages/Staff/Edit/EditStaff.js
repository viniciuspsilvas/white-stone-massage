import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import { Button, Grid, Avatar, makeStyles } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useFetcher } from '../../../utils/useFetcher'
import { GET_STAFF } from '../../../api/staff'

const useStyles = makeStyles(theme => ({
  pictureGrid: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  profilePicture: {
    width: '100%',
    height: '100%'
  }
}))

const EditStaff = props => {

  const classes = useStyles()
  const { register, handleSubmit, errors, setValue } = useForm()
  const [ picturePath, setPicturePath ] = React.useState('')

  useFetcher(
    GET_STAFF,
    {
      filter: { filter: { id: props.match.params.id ? parseInt(props.match.params.id) : 0 }},
      onComplete: (res) => {
        res.address = res.staff_address ? res.staff_address[0].address.address : ''
        res.postcode = res.staff_address ? res.staff_address[0].address.postcode : ''
        res.state = res.staff_address ? res.staff_address[0].address.state : ''
        res.username = res.user ? res.user.username : ''
        setPicturePath(res.picture)
        setValue('staff', res, true)
      }
    }
  )

  const onSubmit = data => {
    console.log('data', data)
  }

  const goBack = () => {
    props.history.push('/staff')
  }

  const uploadPicture = () => {
    setPicturePath('test')
  }
  
  const deletePicture = () => {
    setPicturePath('')
  }

  return (
    <div>
      <form onSubmit={ handleSubmit( onSubmit )}>

        <ActionToolBar title={ 'Edit Staff' }>
          <Button variant='contained' color='primary' type='submit'> Save </Button>
          <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
        </ActionToolBar>

        <Container>
          <Grid container spacing={ 6 } >
            <Grid item xs={ 12 } md={ 2 }>
              <Grid container spacing={ 2 } className={ classes.pictureGrid }>
                <Grid item xs={ 12 } >
                  <Avatar alt='Profile Picture' src={ picturePath } className={ classes.profilePicture } ></Avatar>
                </Grid>
                <Grid item xs={ 12 } >
                <Button variant='contained' color='primary' onClick={ uploadPicture }> Upload Picture </Button>
                  <br/>
                  <br/>
                  <Button variant='outlined' color='primary' onClick={ deletePicture }> Delete Picture </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={ 12 } md={ 10 }>
              <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } md={ 1 }>
                  <InputText label='Code' name='staff.id' inputRef={ register() } disabled />
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                  <InputText label='Username' name='staff.username' inputRef={ register() } disabled />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='First Name' name='staff.firstname' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Last Name' name='staff.lastname' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Email' name='staff.email' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='ABN' name='staff.abn' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='TFN' name='staff.tfn' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Mobile Phone' name='staff.mobile' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Commercial Phone' name='staff.commercialPhone' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 8 }>
                  <InputText label='Address' name='staff.address' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Postcode' name='staff.postcode' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='State' name='staff.state' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  )
}

export default withRouter( EditStaff )