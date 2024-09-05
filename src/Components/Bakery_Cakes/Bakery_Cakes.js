import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';


const Bakery_Cakes = () => {
    return (
        <div>
            <br />
            <br />
            <Container className='Pick_thier_Fav_div'>
                <div className='Pick_thier_Fav_Heading_div'>
                    <p className='Pick_thier_Fav_Heading'>
                        Bakery-Fresh Cakes
                        <Button variant="success" className='Pick_thier_Fav_btn'>VIEW ALL</Button>
                    </p>
                </div>

                <br />


                <div className='Event'>

                    <div className='Event_div' >
                        <img src='images/Bakery_Cakes/img1.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Chocolate Cakes</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Bakery_Cakes/img2.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Buttersoctch Cakes</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Bakery_Cakes/img3.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Pineapple Cakes</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Bakery_Cakes/img4.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Flower N Cakes</b></p>
                    </div>









                </div>

               
            </Container>
        </div>
    );
};

export default Bakery_Cakes;
