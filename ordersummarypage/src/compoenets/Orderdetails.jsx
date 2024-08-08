import React from 'react';
import { Button } from 'react-bootstrap';


function OrderDetails({ total, quantity, title }) {
  return (
    <div className='order-details-card'>
      <div className='order-details-header'>
        <h3>Order Details</h3>
      </div>
      <div className='order-details-body'>
        <div className='order-detail'>
          <span className='label'>Product Name:</span>
          <span className='value'>{title}</span>
        </div>
        <div className='order-detail'>
          <span className='label'>Total Price:</span>
          <span className='value'>${total}</span>
        </div>
        <div className='order-detail'>
          <span className='label'>Quantity:</span>
          <span className='value'>{quantity}</span>
        </div>
        <div className='order-detail'>
          <Button variant='success' className='checkout-button'>Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;