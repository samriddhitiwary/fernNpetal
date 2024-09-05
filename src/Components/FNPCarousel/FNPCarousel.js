import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function FNPCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/FNPCarousel/img6.webp'
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/FNPCarousel/img2.png'
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/FNPCarousel/img3.webp'
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/FNPCarousel/img4.jpg'
          alt="First slide"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/FNPCarousel/img5.webp'
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default FNPCarousel