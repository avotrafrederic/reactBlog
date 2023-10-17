import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function MyFooter() {
  return (
    <>
        <footer style={{height:6 + "rem"}}>
            <Container className='h-100'>
                <Row className='h-100'>
                    <Col md={4}></Col>
                    <Col md={4} className='h-100 d-flex justify-content-center align-items-center'>
                        <p className='p p-0 m-0 text-white'>Copyright &copy; 2023</p>
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}
