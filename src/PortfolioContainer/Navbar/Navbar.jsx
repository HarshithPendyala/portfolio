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

      <Navbar  color='dark' className='nv' dark expand='md' fixed='top'>
        <Container>

        <NavbarBrand href='#home' className='font-weight-bolder nvb '>HP</NavbarBrand>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className='ml-auto'>
            <NavItem><NavLink href='#skills'  className='pages active'>Skills</NavLink></NavItem>
            <NavItem><NavLink href='#projects' className='pages'>Projects</NavLink></NavItem>
            <NavItem><NavLink href='#aboutme' className='pages'>About</NavLink></NavItem>
            <NavItem><NavLink href='#contact' className='pages'>Contact</NavLink></NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
