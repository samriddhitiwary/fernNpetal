import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Gift_Together = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    console.log('Button clicked!'); 
    navigate('/products'); 
  };

  return (
    <div>
      <br />
      <br />
      <Container className='CuratedGifts_div'>
        <div className='CuratedGifts_Heading_div'>
          <p className='CuratedGifts_Heading'>
            The 2024 Birthday Collection
            <Button variant="success" className='CuratedGifts_btn' onClick={handleViewAllClick}>
              VIEW ALL
            </Button>
          </p>
        </div>

        <br />

        <div className='CuratedGifts_grid_2'>
          {[
            { src: 'images/Gift_Together/img1.webp', text: 'FLOWERS N CHOCOLATES' },
            { src: 'images/Gift_Together/img2.webp', text: 'FLOWERS N CAKES' },
            { src: 'images/Gift_Together/img3.webp', text: 'PLANT COMBOS' },
            { src: 'images/Gift_Together/img4.webp', text: 'GIFT HAMPERS' },
            { src: 'images/Gift_Together/img5.webp', text: 'CHOCOLATES COMBOS' }
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

export default Gift_Together;
