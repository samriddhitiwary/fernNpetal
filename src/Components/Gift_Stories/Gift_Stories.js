import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';


const Gift_Stories = () => {
    return (
        <div>
            <br />
            <br />
            <Container className='Pick_thier_Fav_div'>
                <div className='Pick_thier_Fav_Heading_div'>
                    <p className='Pick_thier_Fav_Heading'>
                        Gifts That Tell Stories
                        <Button variant="success" className='Pick_thier_Fav_btn'>VIEW ALL</Button>
                    </p>
                </div>

                <br />


                <div className='Event'>

                    <div className='Event_div' >
                        <img src='images/Gift_Stories/img1.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Stationary Gifts</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Gift_Stories/img2.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Cushions</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Gift_Stories/img3.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Photo Frames</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Gift_Stories/img4.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Mugs</b></p>
                    </div>









                </div>

               
            </Container>
        </div>
    );
};

export default Gift_Stories;
