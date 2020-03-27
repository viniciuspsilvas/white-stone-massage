import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import { Button, Grid, Avatar, makeStyles, MenuItem } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { useLazyFetcher } from '../../../utils/useFetcher'
import { CREATE_STAFF } from '../../../api/staff'
import { GET_USER_BY_FILTER } from '../../../api/user'
import { AlertSuccess } from '../../../components/Alert'
import Upload from '../../../components/Upload/Upload'
import { CloudUpload, Delete } from '@material-ui/icons/';
import Select from '@bit/smart-solution-4u.components.select'
import { australianStates } from '../../../utils'

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

const NewStaff = props => {

  const classes = useStyles()
  const { register, handleSubmit, errors, getValues, setValue, reset, control } = useForm()
  const [ picturePath, setPicturePath ] = React.useState('')

  const onSubmit = data => {
    data.staff.id = null
    data.staff.pictureFile = data.staff.pictureFile && data.staff.pictureFile.length > 0 ? data.staff.pictureFile[0] : null
    save(data)
  }

  const goBack = () => {
    props.history.push('/staff')
  }

  const uploadPicture = file => {
    setPicturePath(URL.createObjectURL(file))
  }
  
  const generateUsername = () => {
    const staff = getValues()
    if (staff['staff.firstname'] && staff['staff.lastname']) {
      const lastname = staff['staff.lastname'].split(' ')
      const username = staff['staff.firstname'].substring(0,1).toLowerCase().concat(lastname[lastname.length - 1].toLowerCase())
      checkUsername({ filter: { username }})
    }
  }

  const deletePicture = () => {
    setPicturePath('')
  }

  const [ save ] = useLazyFetcher( CREATE_STAFF, { onComplete: (res) => { 
    deletePicture()
    AlertSuccess('Staff created successfully!')
    // reset()
  }})

  const [ checkUsername ] = useLazyFetcher( GET_USER_BY_FILTER, { onComplete: res => {
    
    const staff = getValues()
    const lastname = staff['staff.lastname'].split(' ')
    const username = staff['staff.firstname'].substring(0,1).toLowerCase().concat(lastname[lastname.length - 1].toLowerCase())

    if (res && res.length > 0) {
      res.sort((a, b) => a.username > b.username ? 1 : -1)
      const currentUserNumber = res[res.length -1].username.replace(/\D/g, '')

      setValue('staff.username', `${ username }${ currentUserNumber ? currentUserNumber + 1 : '1'}`)
    } else {
      setValue('staff.username', username)
    }
  }} 
  )

  return (
    <div>
      <form onSubmit={ handleSubmit( onSubmit )}>

        <ActionToolBar title={ 'New Staff' }>
          <Button variant='contained' color='primary' type='submit'> Save </Button>
          <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
        </ActionToolBar>

        <Container>
          <Grid container spacing={ 6 } >
            <Grid item xs={ 12 } md={ 2 }>
              <Grid container spacing={ 2 } className={ classes.pictureGrid }>
                <Avatar alt='Profile Picture' src={ picturePath } className={ classes.profilePicture } />
                <Grid item xs={ 12 } >
                  <Upload startIcon={ <CloudUpload /> } variant='contained' color='primary' name='staff.pictureFile' inputRef={ register() } onUpload={ uploadPicture } label='Upload' accept='image/*' />
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
                  <InputText label='Username' name='staff.username' inputRef={ register({ maxLength: 15 }) } disabled />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='First Name' name='staff.firstname' inputRef={ register({ required: true, maxLength: 20 })} errors={ errors } onBlur={ generateUsername } />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Last Name' name='staff.lastname' inputRef={ register({ required: true, maxLength: 50 })} errors={ errors } onBlur={ generateUsername } />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Email' name='staff.email' inputRef={ register({ required: true, maxLength: 50 })} errors={ errors } type='email' />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='ABN' name='staff.abn' inputRef={ register({ required: true, maxLength: 11 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='TFN' name='staff.tfn' inputRef={ register({ required: true, maxLength: 9 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Mobile Phone' name='staff.mobile' inputRef={ register({ required: true, maxLength: 10 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Commercial Phone' name='staff.commercialPhone' inputRef={ register({ required: true, maxLength: 10 })} mask={[/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 8 }>
                  <InputText label='Address' name='staff.address' inputRef={ register({ required: true, maxLength: 255 })} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <InputText label='Postcode' name='staff.postcode' inputRef={ register({ required: true, maxLength: 4 })} mask={[/\d/,/\d/,/\d/,/\d/]} errors={ errors } control={ control } />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <Select label='State' name='staff.state' required errors={ errors } control={ control } >
                    { australianStates.map(state => (
                      <MenuItem value={ state.abbr }>{ state.name }</MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  )
}

export default withRouter( NewStaff )