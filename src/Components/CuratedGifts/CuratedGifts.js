import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './CuratedGifts.css';
import Card from 'react-bootstrap/Card';

const CuratedGifts = () => {
    return (
        <Container className='CuratedGifts_div' >
            <div className='CuratedGifts_Heading_div' >
                <p className='CuratedGifts_Heading'>Thoughtfully Curated Gifts    <Button variant="success" className='CuratedGifts_btn'>VIEW ALL</Button>{' '}</p>

            </div>
            <br></br>
            <br></br>

            <div className="CuratedGifts_image_grid">
                <div className='CuratedGifts_img_div'>
                    <img src='images/CuratedGifts/img1.webp' className='CuratedGifts_img_item'></img>
                </div>

                <div className='CuratedGifts_img_div'>
                    <img src='images/CuratedGifts/img2.webp' className='CuratedGifts_img_item'></img>
                </div>
            </div>

            <br></br>

            <div className='CuratedGifts_grid_2'>
                <div className='CuratedGifts_grid_img_2'>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="images/CuratedGifts/img3.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                                Unleash their inner fashionista with Fashion 
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

                <div className='CuratedGifts_grid_img_2'>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="images/CuratedGifts/img4.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                               Double the surprise with paired Gift Combos
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="images/CuratedGifts/img5.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                                Create magical moments with Experiential Gifts
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="images/CuratedGifts/img6.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                                Never fall short of surprise with our big Gift Range
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>


                <div className='CuratedGifts_grid_img_2'>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src="images/CuratedGifts/img7.webp" />
                        <Card.Body>
                            
                            <Card.Text>
                                Let them relish each moment with a Cake from you
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>

            </div>
            <br></br>
            <br></br>
        </Container>

    )
}

export default CuratedGifts