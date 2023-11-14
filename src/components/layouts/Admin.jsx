import React from 'react'
import './../../assets/css/admin.module.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

export default function Admin() {
  return (
    <React.Fragment>
        <main id='admin'>
            <div className="sidebar bg-dark d-flex flex-column">
                <div className='logo' style={{height:'5rem'}}>
                    <h1 className='text-white'>Logo</h1>
                </div>
                <div style={{height:"inherit"}}>
                    <Nav className='d-flex flex-column'>
                        <Nav.Item style={{height:'3.5rem'}}>
                            <Link to={"dashboard"} className='nav-link'>Dashboard</Link>
                        </Nav.Item>
                        <Nav.Item style={{height:'3.5rem'}}>
                            <Link to={"posts"} className='nav-link'>Articles</Link>
                        </Nav.Item>
                        <Nav.Item style={{height:'3.5rem'}}>
                            <Nav.Link >Users</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{height:'3.5rem'}}>
                            <Nav.Link>Logout</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
            <div className="content d-flex flex-column">
                <Navbar expand bg='dark' className='navbar-dark' style={{height:'5rem'}}>
                    <Container>
                        <Nav>
                            <Nav.Link>users</Nav.Link>
                            <Nav.Link>settings</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <div style={{height:"inherit",overflowY:"auto"}}>
                    <Outlet/>
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}
