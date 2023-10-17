import React from 'react'
import { Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

export default function Contact() {
  return (
    <>
        <section id="contact">
            <Container>
                <h1 className="text-center text-uppercase text-white py-5">contact</h1>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6}>
                       <Card>
                            <Card.Body>
                                <Form>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="your username" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput2"
                                        label="subjet"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" placeholder="your subject" />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput1"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Form>
                            </Card.Body>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </section>    
    </>
  )
}
