import React, { useEffect, useState } from 'react'
import Header from '../../partials/Header'
import { useLocation, useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Api from '../../api/Api';

export default function Posts() {
    const title = "My Posts"
    const [link,setLink]= useState("");
    const [posts,setPosts] = useState({});
    let location = useLocation();
    let params = useParams();
    useEffect(()=>{
        Api.get(`showArticle/${params.id}`).then(response =>{
            setPosts(response.data);
        })
        setLink(location.pathname)
    },[location])
  return (
    <>
        <Header title={title} link={posts.title}/>
        <section>
            <Container>
                <Row>
                    <Col md={6}></Col>
                    <Col md={6} className='text-white'>
                        <h1>{posts.title}</h1>
                        <p>{posts.description}</p>
                        <h6><strong>{posts.author}</strong></h6>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}
