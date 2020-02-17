import React, { useState } from 'react';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.css';

import {
  Navbar, NavbarBrand, Nav, Collapse, NavbarToggler
} from 'reactstrap';

import { NavLink } from 'react-router-dom'
 
const Header = ( { isAuthenticated, children, desc, logoFile }) => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const logoFinal = logoFile ? logoFile : logo;

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <img src={logoFinal} alt={desc} />
      </NavbarBrand>

      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        {
          isAuthenticated &&
          <Nav className="ml-auto" navbar>
            <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>

            {children}

            <Nav className="ml-auto navbar-right" navbar >
              <NavLink className="nav-link text-danger" activeClassName="active" to="/settings">Logout</NavLink>
            </Nav>
          </Nav>
        }
      </Collapse>
    </Navbar>
  );
}

export default Header;