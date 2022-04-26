import React, { useState } from 'react'
import './Navbar.css';
import {FaDownload} from 'react-icons/fa';

import 
{ Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Button

} from 'reactstrap';

export const Navigationbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    
    <Navbar  color='dark' className='nv' dark expand='md' fixed='top'>
      <NavbarBrand href='#home' className='font-weight-bolder text-info nvb '>HP</NavbarBrand>
      <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}}/>
      <Collapse isOpen={isOpen} navbar>
        <Nav navbar className='ml-auto'>
          <NavItem><NavLink href='#aboutme'>About Me</NavLink></NavItem>
          <NavItem><NavLink href='#projects'>Projects</NavLink></NavItem>
          <NavItem><NavLink href='#contact'>Contact</NavLink></NavItem>
          <NavItem><NavLink href="Harshith.Pendyala.pdf" download="Harshith.Pendyala.pdf">
          <Button outline color='info'> Get Resume <FaDownload/> </Button>
          </NavLink></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}
