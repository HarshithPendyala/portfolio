import React, { useState } from 'react'
import './Navbar.css';
import 
{ Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
  NavbarToggler,
  Collapse,
  Container

} from 'reactstrap';

export const Navigationbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  return (
    <div className='container'>

      <Navbar  color='light' className='nv' light expand='md' fixed='top'>
        <NavbarBrand href='#home' className='font-weight-bolder nvb '>Harshith.dev</NavbarBrand>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem><NavLink href='#home'  className='pages' onClick={()=>{setIsOpen(!isOpen)}}>Home</NavLink></NavItem>
            <NavItem><NavLink href='#aboutme' className='pages' onClick={()=>{setIsOpen(!isOpen)}}>About</NavLink></NavItem>
            <NavItem><NavLink href='#projects' className='pages' onClick={()=>{setIsOpen(!isOpen)}}>Projects</NavLink></NavItem>
            <NavItem><NavLink href='#contact' className='pages' onClick={()=>{setIsOpen(!isOpen)}}>Contact</NavLink></NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}