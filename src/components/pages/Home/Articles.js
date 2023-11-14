import React, { useEffect, useState } from 'react'
import {  Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';

export default function Articles(props) {
    

    let location = useLocation();
    const [isAllPosts,setAllposts] = useState(false)
    useEffect(()=>{
        if(location.pathname === "/myposts"){
            setAllposts(true)
        }else{
            setAllposts(false)
        }
    },[location])
  return (
    <>
        <section id="article" className='pb-5'>
            <Container>
                <h1 className="text-center text-uppercase text-white py-5">Articles</h1>
                <Row>
                    {props.articles.map((element,index)=>{
                        return (
                            <Col md={4} key={index + 1} className='mb-2'>
                                <Card>
                                    <img src={element.img} alt="" className='card-img-top' />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                           {element.description.slice(0,35)}
                                        </Card.Text>
                                        <Card.Text> {element.author} </Card.Text>
                                    </Card.Body>
                                        <Card.Footer>
                                            <Link to={`/myposts/${element.id}`} className='btn btn-info btn-sm'>En savoir plus</Link>
                                        </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                    
                </Row>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6} className='d-flex justify-content-end align-items-center py-3'>
                        {!isAllPosts ? <Link to={"/myposts"} className='btn btn-info btn-sm px-4'>Voir plus</Link> : ""}
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
