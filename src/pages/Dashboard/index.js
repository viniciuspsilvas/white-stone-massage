import React from 'react'
import { withRouter } from 'react-router-dom'
import MiniMenu from '@bit/smart-solution-4u.components.mini-menu'
import { CalendarToday, Spa, People, Laptop } from '@material-ui/icons';
import DashboardIcon from '@material-ui/icons/Dashboard'
import config from '../../config/config.json'

const Dashboard = () => {

  const schema = [
    {label: 'Dashboard', icon: <DashboardIcon />, to:'/'},
    {label: 'Appointments', icon: <CalendarToday />, to:'/appointments'},
    {label: 'Treatments', icon: <Spa />, to:'/treatments'},
    {label: 'Customers', icon: <People />, to:'/customers'},
    {label: 'Staff', icon: <Laptop />, to:'/staff'},
  ]

  return (
    <MiniMenu user={{ name: 'Administrador' }} schema={ schema } companyName={ config.companyName } logo={ config.secondLogoPath } />
  )
}

export default withRouter( Dashboard )