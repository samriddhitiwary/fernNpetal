import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';
import './Pick_thier_Fav.css';

const Pick_thier_Fav = () => {
    return (
        <div>
            <br />
            <br />
            <Container className='Pick_thier_Fav_div'>
                <div className='Pick_thier_Fav_Heading_div'>
                    <p className='Pick_thier_Fav_Heading'>
                        Pick Their Favourite
                        <Button variant="success" className='Pick_thier_Fav_btn'>VIEW ALL</Button>
                    </p>
                </div>

                <br />


                <div className='Event'>

                    <div className='Event_div' >
                        <img src='images/Pick_thier_Fav/img1.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Roses</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Pick_thier_Fav/img2.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Persoanlized Flowers</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Pick_thier_Fav/img3.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Carnations</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Pick_thier_Fav/img4.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Orchids</b></p>
                    </div>









                </div>

                
            </Container>
        </div>
    );
};

export default Pick_thier_Fav;
