import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import './Best_Seller.css';

const Best_Seller = () => {
  return (
    <div>
      <br />
      <br />
      <Container className='Best_Seller_div'>
        <div className='Best_Seller_div'>
          <p className='Best_Seller_Heading'>
            Gifts That Go Togehther
            <Button variant="success" className='Best_Sellers_btn'>VIEW ALL</Button>
          </p>
        </div>

        <br />

        <div className='Best_Seller_grid_2'>
          {[
            { src: 'images/Best_Seller/img1.webp', text: 'FLOWERS' },
            { src: 'images/Best_Seller/img2.webp', text: 'CAKES' },
            { src: 'images/Best_Seller/img3.webp', text: 'COMBOS' },
            { src: 'images/Best_Seller/img4.webp', text: 'GIFTS' },
            { src: 'images/Best_Seller/img5.webp', text: 'FASHION' },
            { src: 'images/Best_Seller/img6.webp', text: 'FASHION' }
          ].map((item, index) => (
            <div className='Best_Seller_grid_img_2' key={index}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Text className='Best_Seller_txt'>
                    <b>{item.text}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <br />
        <br />
      </Container>
    </div>
  );
};

export default Best_Seller;
