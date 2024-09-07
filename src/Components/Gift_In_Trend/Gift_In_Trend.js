import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Gift_In_Trend.css'
// https://fernnpatel.s3.ap-south-1.amazonaws.com/assets/Gift_In_TrendAssets.json

const Gift_In_Trend = () => {

    const [Gift_In_Trend_Assets, Gift_In_Trend_setEventAssets] = useState([]);
    const awsUrl = "https://fernnpatel.s3.ap-south-1.amazonaws.com";
    const assetUrl = awsUrl + "/assets/Gift_In_TrendAssets.json";

    useEffect(() => {

        fetch(assetUrl)
            .then(response => response.json())
            .then(jsonData => {
                jsonData.map((asset) => {
                    asset.img = awsUrl + '/' + asset.img;
                    return asset; // Add return here to avoid issues with .map
                });
                Gift_In_Trend_setEventAssets(jsonData)
            });
    }, []);

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
                        {Gift_In_Trend_Assets.map((e, index) => (
                            <div className='CuratedGifts_grid_img_2' key={index}>
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src={e.img} />
                                    <Card.Body>
                                        <Card.Text>
                                            {e.desc}
                                        </Card.Text>
                                        <Card.Text>
                                            <b>{e.price}</b>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <br></br><br></br>
                </Container>
            </div>
        </>
    );
}

export default Gift_In_Trend;
