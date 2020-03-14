import React from 'react'
import MiniMenu from '@bit/smart-solution-4u.components.mini-menu/dist/MiniMenu';
import config from '../../config/config.json'
import { CalendarToday, Spa, People, AssignmentInd } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard'
import { withRouter } from 'react-router-dom';
import AppContext from '../../AppContext.js';

const AppLayout = props => {

  const { state } = React.useContext( AppContext )

  const schema = [
    {label: 'Dashboard', icon: <DashboardIcon />, to:'/dashboard'},
    {label: 'Appointments', icon: <CalendarToday />, to:'/appointments'},
    {label: 'Treatments', icon: <Spa />, to:'/treatments'},
    {label: 'Customers', icon: <People />, to:'/customers'},
    {label: 'Staff', icon: <AssignmentInd />, to:'/staff'},
  ]

  const logout = () => {
    localStorage.removeItem('token')
    props.history.push( `/`)
  }

  if ( !state.user.profile ) return null

  return (
    <MiniMenu user={{ name: ` ${ state.user.profile.lastname }, ${ state.user.profile.firstname }`, ...state.user.profile }} schema={ schema } logo={ config.logoMenuPath } handleLogout={ logout } >
      { props.children }
    </MiniMenu>
  )
};

export default withRouter( AppLayout )