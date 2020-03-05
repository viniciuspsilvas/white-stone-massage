import React from 'react'
import MiniMenu from '@bit/smart-solution-4u.components.mini-menu/dist/MiniMenu';
import config from '../../config/config.json'
import { CalendarToday, Spa, People, Laptop } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard'
import { withRouter } from 'react-router-dom';
import AppContext from '../../AppContext.js';

const AppLayout = (props) => {

  const { state } = React.useContext(AppContext)

  const schema = [
    {label: 'Dashboard', icon: <DashboardIcon />, to:'/dashboard'},
    {label: 'Appointments', icon: <CalendarToday />, to:'/appointments'},
    {label: 'Treatments', icon: <Spa />, to:'/treatments'},
    {label: 'Customers', icon: <People />, to:'/customers'},
    {label: 'Staff', icon: <Laptop />, to:'/staff'},
  ]

  if ( !state.user ) return null

  return (
    <MiniMenu user={{ name: state.user.name }} schema={ schema } logo={ config.logoMenuPath } >
      { props.children }
    </MiniMenu>
  )
};

export default withRouter( AppLayout )