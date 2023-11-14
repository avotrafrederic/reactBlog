import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function MyNavbar(props) {
    return (
        <React.Fragment>
            <Navbar expand='md' fixed='top' className={!props.isScroll ? "navbar-dark":"navbar-dark bg-dark"}>
                <Container>
                    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls='mynavbar'/>
                    <Navbar.Collapse id='mynavbar'>
                        <Nav>
                            <Link to={""} className='nav-link'>Home</Link>
                            <Link to={"#about"} className='nav-link'>About</Link>
                            <Link to={"#article"} className='nav-link'>Articles</Link>
                            <Link to={"#contact"} className='nav-link'>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    
  )
}
