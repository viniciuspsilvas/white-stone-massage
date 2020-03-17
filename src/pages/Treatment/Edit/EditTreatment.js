import React from 'react'
import { withRouter } from 'react-router-dom'
import ActionToolBar from '@bit/smart-solution-4u.components.action-tool-bar'
import InputText from '@bit/smart-solution-4u.components.text-input'
import Container from '@bit/smart-solution-4u.components.container'
import Checkbox from '@bit/smart-solution-4u.components.checkbox'
import DragNDrop from '@bit/smart-solution-4u.components.dragndrop'
import { Button, Grid, Typography, Avatar, Hidden, Divider, makeStyles } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { setFormValue } from '../../../utils'

const useStyles = makeStyles( theme => ({
  dragndropContainer: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}))

const EditTreatment = props => {

  const classes = useStyles()
  const { register, handleSubmit, errors, setValue } = useForm()

  React.useEffect(() => {
    setFormValue({ id: 4, name: 'tes4t', description: 'test', price: 1.90, active: true, createdAt: new Date().getDate()}, setValue)
  }, [ setValue ])

  const onSubmit = data => {
    console.log(data)
  }

  const goBack = () => {
    props.history.push('/treatments')
  }

  return (
    <div>
      <ActionToolBar title={ 'Edit Treatment' }>
        <Button variant='contained' color='primary'> Save </Button>
        <Button variant='outlined' color='primary' onClick={ goBack }> Back </Button>
      </ActionToolBar>

      <Container>
        <form onSubmit={ handleSubmit( onSubmit )}>
          <Grid container spacing={ 6 } >
            <Grid item xs={ 12 } md={ 6 }>
              <Grid container spacing={ 2 } >
                <Grid item xs={ 12 } md={ 1 }>
                  <InputText label='Code' name='id' inputRef={ register() } disabled />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Name' name='name' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 4 }>
                  <InputText label='Price' name='price' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
                <Grid item xs={ 12 } md={ 3 }>
                  <InputText label='Created At' name='createdAt' inputRef={ register() } disabled />
                </Grid>
                <Grid item xs={ 12 } md={ 12 }>
                  <InputText label='Description' name='description' inputRef={ register({ required: true })} errors={ errors } multiline />
                </Grid>
                <Grid item xs={ 12 } md={ 2 }>
                  <Checkbox label='Active' name='active' inputRef={ register({ required: true })} errors={ errors } />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={ 12 } md={ 6 } className={ classes.dragndropContainer }>
              <Hidden mdDown>
                <Divider orientation='vertical' />
              </Hidden>
              <DragNDrop droppableList={ list } renderItem={ user => (
                <div style={{ display: 'flex', alignItems: 'center'}} >
                  <Avatar id={ user.id } image={{ src: user.picture, alt: `${ user.firstname } picture`, height: '40px' }} style={{ marginRight: '15px' }} />
                  <Typography variant='body1'> { user.first_name } { user.last_name } </Typography>
                </div>
              )} />
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  )
}

const list = [
  {
    id: 'allowed',
    title: 'Staff Allowed',
    items: [{
      "id": 1,
      "first_name": "Bibi",
      "last_name": "Kmicicki",
      "email": "bkmicicki0@yellowpages.com",
      "picture": "https://robohash.org/corruptieaoptio.jpg?size=50x50&set=set1"
    }, {
      "id": 2,
      "first_name": "Inger",
      "last_name": "Kalinowsky",
      "email": "ikalinowsky1@fotki.com",
      "picture": "https://robohash.org/magniofficiasimilique.jpg?size=50x50&set=set1"
    }, {
      "id": 3,
      "first_name": "Samuele",
      "last_name": "Cornels",
      "email": "scornels2@google.cn",
      "picture": "https://robohash.org/aliquamdolorumab.jpg?size=50x50&set=set1"
    }, {
      "id": 4,
      "first_name": "Aubrette",
      "last_name": "Calam",
      "email": "acalam3@etsy.com",
      "picture": "https://robohash.org/quiesteveniet.jpg?size=50x50&set=set1"
    }]
  },
  {
    id: 'notallowed',
    title: 'Staff Not Allowed',
    items: [{
      "id": 1,
      "first_name": "Adorne",
      "last_name": "Screech",
      "email": "ascreech0@dot.gov",
      "picture": "https://robohash.org/enimautemdolore.jpg?size=50x50&set=set1"
    }, {
      "id": 2,
      "first_name": "Kele",
      "last_name": "Bootland",
      "email": "kbootland1@t-online.de",
      "picture": "https://robohash.org/numquamearumqui.jpg?size=50x50&set=set1"
    }, {
      "id": 3,
      "first_name": "Aubrie",
      "last_name": "Boom",
      "email": "aboom2@tumblr.com",
      "picture": "https://robohash.org/rationenequeaut.jpg?size=50x50&set=set1"
    }, {
      "id": 4,
      "first_name": "Eugenie",
      "last_name": "Markwick",
      "email": "emarkwick3@go.com",
      "picture": "https://robohash.org/sedharumnesciunt.jpg?size=50x50&set=set1"
    }, {
      "id": 5,
      "first_name": "Bud",
      "last_name": "Braksper",
      "email": "bbraksper4@diigo.com",
      "picture": "https://robohash.org/explicaboquovelit.jpg?size=50x50&set=set1"
    }, {
      "id": 6,
      "first_name": "Antonius",
      "last_name": "Beevers",
      "email": "abeevers5@boston.com",
      "picture": "https://robohash.org/magnammagniporro.jpg?size=50x50&set=set1"
    }, {
      "id": 7,
      "first_name": "Marwin",
      "last_name": "Nerne",
      "email": "mnerne6@slideshare.net",
      "picture": "https://robohash.org/nostrumeasit.jpg?size=50x50&set=set1"
    }, {
      "id": 8,
      "first_name": "Aubrette",
      "last_name": "Hambleton",
      "email": "ahambleton7@netvibes.com",
      "picture": "https://robohash.org/voluptatemesthic.jpg?size=50x50&set=set1"
    }, {
      "id": 9,
      "first_name": "Trefor",
      "last_name": "Dargie",
      "email": "tdargie8@spiegel.de",
      "picture": "https://robohash.org/rerumaliaset.jpg?size=50x50&set=set1"
    }, {
      "id": 10,
      "first_name": "Winn",
      "last_name": "Strickler",
      "email": "wstrickler9@hubpages.com",
      "picture": "https://robohash.org/quasvoluptassint.jpg?size=50x50&set=set1"
    }]
  }
]

export default withRouter( EditTreatment )