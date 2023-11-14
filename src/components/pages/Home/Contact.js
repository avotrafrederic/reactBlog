import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'

export default function Contact() {
    const [form,setForm] = useState({});

    const handlechange=(event)=>{
        setForm({...form, [event.target.name]:event.target.value});
    }
   

  return (
    <>
        <section id="contact">
            <Container>
                <h1 className="text-center text-uppercase text-white py-5">contact</h1>
                <Row>
                    <Col md={6}>
                        
                    </Col>
                    <Col md={6}>
                       <Card>
                            <Card.Body>
                                <Form>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Username"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" value={form.username} name="username" placeholder="your username"  onChange={handlechange} />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput2"
                                        label="subjet"
                                        className="mb-3"
                                    >
                                        <Form.Control type="text" value={form.subject} name="subject" placeholder="your subject" onChange={handlechange}  />
                                    </FloatingLabel>
                                    <FloatingLabel
                                        controlId="floatingInput1"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" value={form.email} name="email" placeholder="name@example.com" onChange={handlechange} />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        value={form.message}
                                        name="message"

                                        onChange={handlechange}
                                        />
                                    </FloatingLabel>

                                </Form>
                            </Card.Body>
                            <Card.Footer>
                                <Button className='btn btn-info btn-md' onClick={()=>{console.log(form)}}>Valider</Button>
                            </Card.Footer>
                       </Card>
                    </Col>
                </Row>
            </Container>
        </section>    
    </>
  )
}
