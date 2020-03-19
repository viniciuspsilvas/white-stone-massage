import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import { Button, Grid, Avatar, makeStyles } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useFetcher, useLazyFetcher } from '../../../utils/useFetcher'
import { GET_STAFF } from '../../../api/staff'
import Upload from '../../../components/Upload/Upload'
import { CloudUpload, Delete } from '@material-ui/icons/';
import { DELETE_FILE, UPLOAD_FILE } from '../../../api/upload'
import { AlertSuccess } from '../../../components/Alert'

const useStyles = makeStyles(theme => ({
  pictureGrid: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'
  },
  profilePicture: {
    width: '10em',
    height: '10em'
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

  const uploadPicture = file => {
    upload(file)
    setPicturePath(URL.createObjectURL(file.file))
  }
  
  const deletePicture = () => {
    deleteFile({ path: picturePath })
  }

  const [ deleteFile ] = useLazyFetcher( DELETE_FILE, { onComplete: (res) => { 
    setValue('staff.picture', null)
    setPicturePath(null)
    AlertSuccess('Picture deleted successfully!')
  }})

  const [ upload ] = useLazyFetcher( UPLOAD_FILE, { onComplete: (res) => { 
    setValue('staff.picture', res)
    setPicturePath(res)
    AlertSuccess('Picture uploaded successfully!')
  }})

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
                <Avatar alt='Profile Picture' src={ picturePath } className={ classes.profilePicture } ></Avatar>
                <Grid item xs={ 12 } >
                  <Upload startIcon={ <CloudUpload /> } variant='contained' color='primary' onUpload={ uploadPicture } label='Upload' accept='image/*' />
                  { picturePath ? <div><br /><Button startIcon={ <Delete /> } variant='outlined' color='primary' onClick={ deletePicture } > Delete </Button></div> : null }
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
                  <InputText label='ABN' name='staff.abn' inputRef={ register({ required: true, maxLength: 11 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='TFN' name='staff.tfn' inputRef={ register({ required: true, maxLength: 9 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Mobile Phone' name='staff.mobile' inputRef={ register({ required: true, maxLength: 10 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Commercial Phone' name='staff.commercialPhone' inputRef={ register({ required: true, maxLength: 10 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 8 }>
                  <InputText label='Address' name='staff.address' inputRef={ register({ required: true, maxLength: 255 })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Postcode' name='staff.postcode' inputRef={ register({ required: true, maxLength: 4 })} mask={[/\d/,/\d/,/\d/,/\d/]} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='State' name='staff.state' inputRef={ register({ required: true, maxLength: 3 })} mask={[/[A-Z]/,/[A-Z]/,/[A-Z]/]} errors={ errors } />
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