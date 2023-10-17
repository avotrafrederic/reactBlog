import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Articles from './Home/Articles'
import Contact from './Home/Contact'

export default function Home(props) {
  return (
    <>
        <section id='home'>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col md={6} className='h-100 d-flex flex-column justify-content-center'>
                        <h1 className='h1 text-white'>{props.title}</h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta.</p>
                        <Button className='rounded-pill btn-info text-uppercase text-white'>Nous Contactez</Button>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </Container>
        </section>
        <section id='about'>
            <Container>
                <h1 className="text-center text-uppercase text-white py-5">ABOUT</h1>
                <Row>
                    <Col md={6}>
                        <img src={require("./../../assets/img/about-img.jpg")} alt="" className='img-fluid img-thumbnail' />
                    </Col>
                    <Col md={6} className='text-white'>
                        <h2>MonBlog.mg?</h2>
                        <p className='p text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo ab harum.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
        <Articles/>
        <Contact/>
    </>
  )
}
