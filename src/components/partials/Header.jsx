import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Header(props) {
  return (
    <section id='home'>
        <Container className='h-100'>
            <Row className='h-100'>
                <Col md={6} className='h-100 d-flex flex-column justify-content-end pb-5'>
                    <h1 className='h1 text-white'>{props.title}</h1>
                    <p className='text-white'>{props.title} &gt;  {props.link}</p>
                </Col>
                <Col md={6}></Col>
            </Row>
        </Container>
    </section>
  )
}
