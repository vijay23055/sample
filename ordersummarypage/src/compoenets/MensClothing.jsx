import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Men({ products, category, handleQuantityChange, quantities }) {
  const filterproduct = products.filter(product => product.category === category);

  return (
    <div className='card-body'>
        <Row>
          {filterproduct.map(product => (
            <Col key={product.id} md={4} className="mb-2">
              <Card className="product-card">
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price} <br />
                    <strong>Description:</strong> {product.description} <br />
                    <strong>Category:</strong> {product.category} <br />
                    <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
                  </Card.Text>
                  <input
                    type="number"
                    value={quantities[product.id] || 0}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value, product.title)}
                    min="0"
                    className="quantity-input"
                  />
                  <Button variant="primary" className="buy-button">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
    </div>
  );
}

export default Men;
