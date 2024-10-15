import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import overview from '../assets/overview.avif'

const Overview = () => {
  return (
    <div className="overview-wrapper">  {/* Full-width wrapper */}
      <Container className="overview-section my-5">
        <Row>
          <Col md={6}>
            <h2>Biopharma: The Future of Health</h2>
            <h5>New drugs. New pressures. New paradigms.</h5>
            <p>
              The pressures on biopharmaceutical companies to deliver on clinical outcomes 
              while managing costs and regulations have never been greater.
            </p>
            <p>
              How do you balance R&D investments while operating at lower margins?
            </p>
            <p>
              How do you achieve transformational health outcomes against the backdrop 
              of regulatory scrutiny and regulation?
            </p>
            <p>
              Accelerate your organization's digital transformation journey and unlock 
              greater value and ROI in today's rapidly evolving landscape with solutions from HCLTech.
            </p>
            <Button variant="primary">Let's Talk</Button>
          </Col>
          <Col md={6}>
            <img src={overview} alt="Biopharma Scientists" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
