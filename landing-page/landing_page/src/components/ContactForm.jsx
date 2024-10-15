import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import contact from '../assets/form.avif'

const ContactForm = () => {
  return (
    <div className="contact-forms">
      <Container id="contact" className="my-5 contact-form">
        <h2 className="text-center-form">Transform Your Biopharma Operations Today</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Your Email" required />
          </Form.Group>

          <Form.Group controlId="formCompany">
            <Form.Label>Company</Form.Label>
            <Form.Control type="text" placeholder="Company" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Get Started Now
          </Button>
        </Form>
      </Container>
    </div>

  );
};

export default ContactForm;
