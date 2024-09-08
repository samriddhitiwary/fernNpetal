import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import './Birthday_Collection.css';
import { useNavigate } from 'react-router-dom';

const Birthday_Collection = () => {
  const navigate = useNavigate(); 

  const handleViewAllClick = () => {
    navigate('/products'); 
}
  
  return (
    <div>
      <br />
      <br />
      <Container className='CuratedGifts_div'>
        <div className='CuratedGifts_Heading_div'>
          <p className='CuratedGifts_Heading'>
            The 2024 Birthday Collection
            <Button variant="success" className='CuratedGifts_btn' onClick={handleViewAllClick}>VIEW ALL</Button>
          </p>
        </div>

        <br />

        <div className='CuratedGifts_grid_2'>
          {[
            { src: 'images/Birthday_Collection/img1.webp', text: 'FLOWERS' },
            { src: 'images/Birthday_Collection/img2.webp', text: 'CAKES' },
            { src: 'images/Birthday_Collection/img3.webp', text: 'COMBOS' },
            { src: 'images/Birthday_Collection/img4.webp', text: 'GIFTS' },
            { src: 'images/Birthday_Collection/img5.webp', text: 'FASHION' }
          ].map((item, index) => (
            <div className='CuratedGifts_grid_img_2' key={index}>
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={item.src} />
                <Card.Body>
                  <Card.Text className='Birthday_Collection_txt'>
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

export default Birthday_Collection;
