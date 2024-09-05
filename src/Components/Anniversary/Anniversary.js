import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';


const Anniversary = () => {
  return (
    <div>
      <br />
      <br />
      <Container className='CuratedGifts_div'>
        <div className='CuratedGifts_Heading_div'>
          <p className='CuratedGifts_Heading'>
           Anniversary : Rekindle Love
            
          </p>
        </div>

        <br />

        <div className='CuratedGifts_grid_2'>
          {[
            { src: 'images/Anniversary/img1.webp', text: 'FLOWERS' },
            { src: 'images/Anniversary/img2.webp', text: 'CAKES' },
            { src: 'images/Anniversary/img.webp', text: 'COMBOS' },
            { src: 'images/Anniversary/img4.webp', text: 'GIFTS' },
            { src: 'images/Anniversary/img5.webp', text: 'FASHION' }
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

        
      </Container>
      
      
    </div>
  );
};

export default Anniversary;
