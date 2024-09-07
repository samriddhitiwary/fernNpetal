import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './CuratedGifts.css';
import Card from 'react-bootstrap/Card';
// https://fernnpatel.s3.ap-south-1.amazonaws.com/assets/CuratedGifts_assets.json

const CuratedGifts = () => {

    const [curatedGiftsAssets, setCuratedGiftsAssets] = useState([]);
    const awsUrl = "https://fernnpatel.s3.ap-south-1.amazonaws.com";
    const assetUrl = awsUrl + "/assets/CuratedGifts_assets.json";

    useEffect(() => {
        fetch(assetUrl)
            .then(response => response.json())
            .then(jsonData => {
                jsonData.map((asset) => {
                    asset.img = awsUrl + '/' + asset.img;
                    return asset; 
                });
                setCuratedGiftsAssets(jsonData);
            });
    }, []);

    return (
        <Container className='CuratedGifts_div'>
            <div className='CuratedGifts_Heading_div'>
                <p className='CuratedGifts_Heading'>
                    Thoughtfully Curated Gifts 
                    <Button variant="success" className='CuratedGifts_btn'>
                        VIEW ALL
                    </Button>
                </p>
            </div>
            <br /><br />

            <div className="CuratedGifts_image_grid">
                <div className='CuratedGifts_img_div'>
                    <img src='images/CuratedGifts/img1.webp' className='CuratedGifts_img_item' alt="Gift 1" />
                </div>

                <div className='CuratedGifts_img_div'>
                    <img src='images/CuratedGifts/img2.webp' className='CuratedGifts_img_item' alt="Gift 2" />
                </div>
            </div>

            <br />

            <div className='CuratedGifts_grid_2'>
                {curatedGiftsAssets.map((e, index) => (
                    <div className='CuratedGifts_grid_img_2' key={index}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={e.img} alt={e.desc} />
                            <Card.Body>
                                <Card.Text>{e.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <br /><br />
        </Container>
    );
}

export default CuratedGifts;
