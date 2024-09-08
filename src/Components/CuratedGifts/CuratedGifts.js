import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import './CuratedGifts.css';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

const CuratedGifts = () => {
    const navigate = useNavigate();
    const [curatedGiftsAssets, setCuratedGiftsAssets] = useState([]); // Declare state here

    const awsUrl = "https://fernnpatel.s3.ap-south-1.amazonaws.com";
    const assetUrl = awsUrl + "/assets/CuratedGifts_assets.json";

    // Fetch the curated gifts data when the component mounts
    useEffect(() => {
        fetch(assetUrl)
            .then(response => response.json())
            .then(jsonData => {
                const updatedData = jsonData.map((asset) => {
                    asset.img = awsUrl + '/' + asset.img;
                    return asset;
                });
                setCuratedGiftsAssets(updatedData); // Set the updated data
            });
    }, []); // Empty dependency array to run this only once

    const handleViewAllClick = () => {
        navigate('/products'); // Navigate to the products page on button click
    };

    return (
        <Container className='CuratedGifts_div'>
            <div className='CuratedGifts_Heading_div'>
                <p className='CuratedGifts_Heading'>
                    Thoughtfully Curated Gifts
                    <Button variant="success" className='CuratedGifts_btn' onClick={handleViewAllClick}>
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
