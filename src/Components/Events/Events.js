import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import listOfEvents from "../data/events.json";

const Events = () => {
  const [events, setEvents] = useState([]);
  const awsUrl = "https://fernnpatel.s3.ap-south-1.amazonaws.com";

  useEffect(() => {
    listOfEvents.map((event) => {
      if(!event.img.includes('aws')) {
        event.img = awsUrl + "/" + event.img;
      }
    });
    setEvents(listOfEvents);
  }, []);

  return (
    <div className="Event">
      {events.map((event) => (
        <div className="Event_div">
          <Link to={event.productLink}>
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