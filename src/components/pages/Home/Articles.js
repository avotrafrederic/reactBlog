import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Articles() {
    const articles = [
        {
            title:"Article 1",
            description : ` Lorem ipsum dolor sit amet consectetur,
                            Lorem ipsum dolor sit amet consectetur,
                            
                        `,
            auteur : "Auteur 1",
            img : require("./../../../assets/img/portfolio/portfolio-1.jpg")
        },
        {
            title:"Article 2",
            description : ` Lorem ipsum dolor sit amet consectetur,
            Lorem ipsum dolor sit amet consectetur,
            `,
            auteur : "Auteur 2",
            img : require("./../../../assets/img/portfolio/portfolio-2.jpg")
        },
        {
            title:"Article 3",
            description : ` Lorem ipsum dolor sit amet consectetur,
            Lorem ipsum dolor sit amet consectetur,
            `,
            auteur : "Auteur 3",
            img : require("./../../../assets/img/portfolio/portfolio-3.jpg")
        },
    ];
  return (
    <>
        <section id="article" className='pb-5'>
            <Container>
                <h1 className="text-center text-uppercase text-white py-5">Articles</h1>
                <Row>
                    {articles.map((element,index)=>{
                        return (
                            <Col md={4} key={index + 1}>
                                <Card>
                                    <img src={element.img} alt="" className='card-img-top' />
                                    <Card.Body>
                                        <Card.Title>{element.title}</Card.Title>
                                        <Card.Text>
                                           {element.description}
                                        </Card.Text>
                                        <Card.Text> {element.auteur} </Card.Text>
                                    </Card.Body>
                                        <Card.Footer>
                                            <Button className='btn-sm'>En savoir plus</Button>
                                        </Card.Footer>
                                </Card>
                            </Col>
                        )
                    })}
                    
                </Row>
            </Container>
        </section>
    </>
  )
}
