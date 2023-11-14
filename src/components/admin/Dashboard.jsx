import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Api from '../api/Api';

export default function Dashboard() {
    const [posts,setPosts] = useState([]);
    const [counter,setCounter]=useState(0);
    useEffect(()=>{
        Api.get("allposts").then(response =>{
            setPosts(response.data)
        })
    },[])
    setTimeout(()=>{
        if(counter < posts.length){
            setCounter(counter + 1)
        }
    },30)
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md="4">
                    <Card>
                        <Card.Body>
                            <h5 className="card-text">{counter}</h5>
                            <h3 className="card-title">All Posts</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4">
                <Card>
                        <Card.Body>
                            <h5 className="card-text"></h5>
                            <h3 className="card-title">All Posts</h3>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md="4">
                <Card>
                        <Card.Body>
                            <h5 className="card-text"></h5>
                            <h3 className="card-title">All Posts</h3>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
