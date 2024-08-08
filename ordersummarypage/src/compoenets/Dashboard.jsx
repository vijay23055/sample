import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
import { Dropdown, Button, Container, Row, Col, Card } from 'react-bootstrap';
import Men from './MensClothing';
import OrderDetails from './Orderdetails';

function Dashboard() {
  const { user } = useContext(UserContext);
  const [selectedTitle, setSelectedTitle] = useState('');
  const [quantities, setQuantities] = useState({});
  const [selectedProductTitle, setSelectedProductTitle] = useState(''); // New state for the product title

  const handleQuantityChange = (productId, value, title) => {
    setQuantities({
      ...quantities,
      [productId]: parseInt(value, 10) || 0,
    });
    setSelectedProductTitle(title); // Set the title of the product being updated
  };

  const uniqueCategories = [...new Set(user[0].products.map(product => product.category))];

  const filteredProducts = user[0].products.filter(product => product.category === selectedTitle);

  const totalPrice = selectedTitle ? filteredProducts.reduce((acc, product) => acc + (product.price * (quantities[product.id] || 0)), 0) : 0;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-9'>
          <div className='custom-card'>
            <div className='card-header'>
              <p>Product Section</p>
              <hr/>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {selectedTitle || "Select Category"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {uniqueCategories.map(category => (
                    <Dropdown.Item key={category} onClick={() => setSelectedTitle(category)}>
                      {category}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Men products={user[0].products} category={selectedTitle} handleQuantityChange={handleQuantityChange} quantities={quantities} />
          </div>
        </div>
      
        <div className='colorder'>
          <OrderDetails total={totalPrice.toFixed(2)} quantity={Object.values(quantities).reduce((acc, qty) => acc + qty, 0)} title={selectedProductTitle} />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
