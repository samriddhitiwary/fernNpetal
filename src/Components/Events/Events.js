import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";

const Events = () => {
  const [eventAssets, setEventAssets] = useState([]);
  const awsUrl = "https://fernnpatel.s3.ap-south-1.amazonaws.com";
  const assetUrl = awsUrl + "/assets/eventsAssets.json";


  useEffect(() => {

    fetch(assetUrl)
    .then(response => response.json())
    .then(jsonData => { 
        jsonData.map((asset) => {
            asset.img = awsUrl + '/' + asset.img;
        });
        setEventAssets(jsonData)
    });
  },[]);

  return (
    <div className="Event">
      {eventAssets.map((event) => (
        <div className="Event_div">
          <Link to="/birthday">
            <img src={event.img} className="Event_img" alt={event.desc} />
          </Link>
          <p style={{ marginLeft: "20%" }}>
            <b>{event.desc}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Events;