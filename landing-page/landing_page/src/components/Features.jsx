import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import first from '../assets/first.avif'
import second from '../assets/second.avif'
import third from '../assets/third.avif'


const Features = () => {
  const featuresData = [
    {
      title: 'Advanced Biopharma Solutions',
      text: 'Innovative solutions for research, development, and clinical trials with cutting-edge technology.',
      imgSrc: first,
      moreInfo: 'Our solutions streamline your R&D investments while ensuring compliance with evolving regulations.',
    },
    {
      title: 'Digital Transformation',
      text: 'Unlock the power of data and technology to transform healthcare delivery and patient outcomes.',
      imgSrc: second,
      moreInfo: 'From cloud services to AI-driven insights, we help you achieve superior ROI and scalability.',
    },
    {
      title: 'Operational Excellence',
      text: 'Maximize efficiency in manufacturing, supply chain, and overall operations with lean methodologies.',
      imgSrc: third,
      moreInfo: 'Achieve greater productivity while reducing costs, maintaining compliance, and managing risk.',
    }
  ];

  return (
    <Container className="features-section my-5">
      <h2 className="text-center-feature mb-4">Our Key Features</h2>
      <Row>
        {featuresData.map((feature, index) => (
          <Col md={4} key={index}>
            <Card className="feature-card">
              <div className="card-img-wrapper">
                <Card.Img variant="top" src={feature.imgSrc} className="card-img-hover" />
              </div>
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
                <Card.Text className="text-muted">{feature.moreInfo}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
