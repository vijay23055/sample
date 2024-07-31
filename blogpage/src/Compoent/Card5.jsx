import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import FSD from '../FSD.jpeg'
import node from '../NodeJS.png'
import mongo from '../Mongo.png'

function Card5() {
    let data = [
        {
          course:"Full Stack",
          img:FSD
        },
        {
          course:"NodeJS",
          img:node
        },
        {
          course:"MONGO DB",
          img:mongo
        },
      ]
      return <>
      <Container>
          <Row>
            {data.map((e, index) => (
              <Col md={4} key={index}>
                <Card className='card' style={{ width: '18rem' }}>
                  <Card.Img className='img' variant="top" src={e.img} />
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{e.course}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
}

export default Card5
