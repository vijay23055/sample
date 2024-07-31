import React from 'react'
import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import python from '../python.jpeg'
import machine from '../ML.jpeg'
import nlp from '../nlp.jpeg'
function Card1() {
  let data = [
    {
      course:"Python Object",
      img:python
    },
    {
      course:"Machine Learning",
      img:machine
    },
    {
      course:"Unlock the power of NLP",
      img:nlp
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

export default Card1
