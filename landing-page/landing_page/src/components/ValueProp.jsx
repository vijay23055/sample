import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const ValueProp = () => {
  return (
    <Card className="my-5 value">
      <h2 className="text-center">Why Choose HCLTech?</h2>
      <Row >
        <Col lg={4}className="value-row">
          <h3>Data-Driven Drug Development</h3>
          <p>Leverage AI and advanced analytics to streamline research and reduce time to market.In today's fast-paced pharmaceutical landscape, the integration of artificial intelligence (AI) and advanced analytics is revolutionizing drug development. By harnessing vast amounts of data—from clinical trials to real-world evidence—companies can significantly streamline their research processes.</p>
        </Col>
        <Col lg={4}className="value-row">
          <h3>Regulatory Compliance</h3>
          <p>Ensure compliance with global standards through integrated digital systems.In the pharmaceutical and biotechnology industries, regulatory compliance is critical to ensuring that products are safe, effective, and of high quality. Organizations must navigate a complex landscape of regulations established by health authorities around the world, such as the FDA (U.S. Food and Drug Administration) and EMA (European Medicines Agency).</p>
        </Col>
        <Col lg={4}className="value-row">
          <h3>Operational Efficiency</h3>
          <p>Enhance lab management and boost efficiency with IoT and automation.Operational efficiency is vital for pharmaceutical and biotech companies aiming to optimize their processes, reduce costs, and improve overall productivity. By incorporating Internet of Things (IoT) technology and automation into lab management, organizations can streamline their operations significantly.</p>
        </Col>
      </Row>
    </Card>
  );
};

export default ValueProp;
