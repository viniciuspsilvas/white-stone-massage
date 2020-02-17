import React from 'react';
import Header from './';
import { NavLink } from 'react-router-dom'

import logo2 from './logo2.png';

export default {
  title: 'layout/Header',
  component: Header,
};

const navLinks = <>
  <NavLink className="nav-link" activeClassName="active" to="/messages">Messages</NavLink>
  <NavLink className="nav-link" activeClassName="active" to="/students">Students</NavLink>
  <NavLink className="nav-link" activeClassName="active" to="/courses">Courses</NavLink>
  <NavLink className="nav-link" activeClassName="active" to="/settings">Settings</NavLink>
</>


const desc = "Smart Solution 4U";

export const basic = () => <Header desc={desc}> {navLinks} </Header>;

export const basicAuthenticated = () => <Header desc={desc} isAuthenticated={true}> {navLinks} </Header>;

export const newLogo = () => <Header logoFile={logo2} desc={desc}> {navLinks} </Header>;

export const newLogoAuthenticated = () => <Header desc={desc} isAuthenticated={true}> {navLinks} </Header>;