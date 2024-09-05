import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const MiniCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    }
  return (
    <>
    <br></br>
    <br></br>
    <Container>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src='images/MiniCarousel/img1.webp'></img>        
      </Carousel.Item>

      <Carousel.Item>
       <img src='images/MiniCarousel/img2.webp'></img>        
      </Carousel.Item>

      <Carousel.Item>
       <img src='images/MiniCarousel/img3.webp'></img>        
      </Carousel.Item>

      <Carousel.Item>
       <img src='images/MiniCarousel/img4.webp'></img>        
      </Carousel.Item>



      
        
    </Carousel>
    </Container>
    </>
  )
}

export default MiniCarousel