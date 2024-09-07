import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Gift_In_Trend.css'

const Gift_In_Trend = () => {
  return (
    <>
    <br></br><br></br>
    <div>
       
        <Container className='Gift_In_Trend_Container'>
            <br></br>
        <div className='CuratedGifts_Heading_div' >
            <p className='Gift_In_Trend_Heading'>Gifts In Trend</p>

        </div>
            <br></br>
            
            <div className='CuratedGifts_grid_2'>
                <div className='CuratedGifts_grid_img_2'>
                    <Card style={ {width: '15rem',marginLeft:'2%',marginBottom:'1%'}}>
                        <Card.Img variant="top" src="images/Gift_In_Trend/img1.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                               Personalised Anniversary Chocolate Photocake
                               
                            </Card.Text>
                            <Card.Text>
                            <b>₹999</b> 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                <div className='CuratedGifts_grid_img_2'>
                    <Card style={ {width: '15rem',marginLeft:'2%',marginBottom:'2%'}}>
                        <Card.Img variant="top" src="images/Gift_In_Trend/img2.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                            Chocolate Truffle Cream Cake Half kg
                            </Card.Text>
                            <Card.Text>
                            <b>₹599</b> 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={ {width: '15rem',marginLeft:'2%',marginBottom:'2%'}}>
                        <Card.Img variant="top" src="images/Gift_In_Trend/img3.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                                Mystical Unicorn Personalised Night Lamp
                            </Card.Text>
                            <Card.Text>
                            <b>₹599</b> 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={ {width: '15rem',marginLeft:'2%',marginBottom:'2%'}}>
                        <Card.Img variant="top" src="images/Gift_In_Trend/img4.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                              Roses Combo Harmony for your loves ones
                            </Card.Text>
                            <Card.Text>
                            <b>₹2350</b> 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={ {width: '15rem',marginLeft:'2%',marginBottom:'2%'}}>
                        <Card.Img variant="top" src="images/Gift_In_Trend/img5.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                               Heart full of happiness Hamper
                            </Card.Text>
                            <Card.Text>
                            <b>₹1249</b> 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <br></br>
            <br></br>
        </Container>
    </div>
    </>
  )
}

export default Gift_In_Trend