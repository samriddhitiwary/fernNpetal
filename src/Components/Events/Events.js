import React from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
    return (
        <>
            <div className='Event'>
                {/* Each div now has a Link to its corresponding page */}
                
                <div className='Event_div'>
                    <Link to="/birthday">
                        <img src='images/Events/img1.jpg' className='Event_img' alt="Birthday" />
                    </Link>
                    <p style={{ marginLeft: '20%' }}><b>Birthday</b></p>
                </div>

                <div className='Event_div'>
                    <Link to="/rakhi-gifts">
                        <img src='images/Events/img2.webp' className='Event_img' alt="Rakhi Gifts" />
                    </Link>
                    <p><b>Rakhi Gifts</b></p>
                </div>

                <div className='Event_div'>
                    <Link to="/teachers-day">
                        <img src='images/Events/img3.webp' className='Event_img' alt="Teacher's Day" />
                    </Link>
                    <p><b>Teacher's Day</b></p>
                </div>

                <div className='Event_div'>
                    <Link to="/home-living">
                        <img src='images/Events/img4.jpg' className='Event_img' alt="Home & Living" />
                    </Link>
                    <p><b>Home & Living</b></p>
                </div>

                {/* Add more divs with Link components for other events */}
                
                <div className='Event_div'>
                    <Link to="/2-hour-delivery">
                        <img src='images/Events/img5.jpg' className='Event_img' alt="2-Hr Del" />
                    </Link>
                    <p><b>2-Hour Delivery</b></p>
                </div>

                <div className='Event_div'>
                    <Link to="/home-living">
                        <img src='images/Events/img6.jpg' className='Event_img' alt="Ganesh Chaturthi" />
                    </Link>
                    <p><b>Home N Living</b></p>
                </div>

                <div className='Event_div'>
                    <Link to="/flowers">
                        <img src='images/Events/img7.webp' className='Event_img' alt="Flowers" />
                    </Link>
                    <p><b>Flowers</b></p>
                </div>
            </div>
        </>
    );
}

export default Events;
