import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import './Birthday.css';
import productList from '../Components/data/listOfProduct.json';

const Products = ({title}) => {
  return (
    <div>
      <br /><br />
      <Container className='Birthday_Container'>
        <div>
          <h3 style={{ display: 'inline-block' }}>{title}</h3>
          <p style={{ display: 'inline-block', marginLeft: '2rem' }}>21 Reviews  |  72 of 192 Gifts</p>

          <Nav fill variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link href="/home">Recommended</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">New</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Price: Low to High</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Price: High to Low</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Container>

      <br></br>

      <Container className='Birthday_Container'>
        <div className="flex-container">
          {productList.map((product, index) => (
            <div key={index} className="mycard">
              <div className="image-container">
                  <img
                    key={index}
                    src={product.img}
                    alt='Testing'
                  />
              </div>
              <div>{product.productName}</div>
              <div>₹{product.price}</div>
              <div><span className='mycardbottomtext'>Earliest Delivery: {product.deliverTime}</span> <span className='mycardbottomtext'>3456 Reviews</span></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Products;