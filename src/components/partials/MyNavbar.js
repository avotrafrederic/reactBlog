import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function (props) {
  return (
    <React.Fragment>
        <Navbar expand='md' fixed='top' className='navbar-dark'>
            <Container>
                <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                <Navbar.Toggle aria-controls='mynavbar'/>
                <Navbar.Collapse id='mynavbar'>
                    <Nav>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>About</Nav.Link>
                        <Nav.Link>Articles</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </React.Fragment>
    
  )
}
