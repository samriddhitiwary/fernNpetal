import React from 'react';
import Card from 'react-bootstrap/Card';
import { Button, Container } from 'react-bootstrap';


const Plants = () => {
    return (
        <div>
            <br />
            <br />
            <Container className='Pick_thier_Fav_div'>
                <div className='Pick_thier_Fav_Heading_div'>
                    <p className='Pick_thier_Fav_Heading'>
                        Plants for every Vibe
                        <Button variant="success" className='Pick_thier_Fav_btn'>VIEW ALL</Button>
                    </p>
                </div>

                <br />


                <div className='Event'>

                    <div className='Event_div' >
                        <img src='images/Plants/img1.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Lucky Babmboo</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Plants/img2.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Jade Plants</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Plants/img3.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Indoor Plants</b></p>
                    </div>

                    <div className='Event_div' >
                        <img src='images/Plants/img4.webp' className='Event_img' style={{ width: '18rem', height: '18rem' }}></img>
                        <br></br>
                        <p style={{ marginLeft: '1%' }}><b>Money Plants</b></p>
                    </div>









                </div>

               
            </Container>
        </div>
    );
};

export default Plants;
