import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';


const MiniNavbar2 = () => {
    return (
        <div>
            <br></br>
            <br></br>
            <Container className='MiniNavbar2_cont'>
                <Carousel slide={false} className='MiniNavbar2_caro'>

                    <Carousel.Item>
                        <img src='images/MiniNavbar2/img1.webp'></img>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src='images/MiniNavbar2/img2.webp'></img>
                    </Carousel.Item>

                </Carousel>
            </Container>
        </div>
    )
}

export default MiniNavbar2