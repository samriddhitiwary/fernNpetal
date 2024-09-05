import React, { useEffect } from 'react';
import './Joyfull_Stories.css';

const Joyfull_Stories = () => {
  useEffect(() => {
    let cards = document.querySelectorAll(".card1");

    cards.forEach(function (card) {
      let video = card.querySelector("video");
      video.muted = true;

      card.addEventListener("mouseover", function () {
        video.play().catch(error => {
          console.log("Video play failed:", error);
        });
      });

      card.addEventListener("mouseout", function () {
        video.pause();
      });
    });
  }, []);

  return (
    <>
    <br></br><br></br>
      <div className="video-row">
        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v.mp4" type="video/mp4" />
          </video>
          <br></br>
          <div className="video-title">SEND FLOWERS</div>
        </div>
       

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v1.mp4" type="video/mp4" />
          </video>
          <div className="video-title">SEND GIFTS</div>
        </div>

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v2.mp4" type="video/mp4" />
          </video>
          <div className="video-title">MANGO CAKES</div>
        </div>

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v4.mp4" type="video/mp4" />
          </video>
          <div className="video-title">GIFT JEWELLERY</div>
        </div>

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v5.mp4" type="video/mp4" />
          </video>
          <div className="video-title">SEND CAKES</div>
        </div>

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v6.mp4" type="video/mp4" />
          </video>
          <div className="video-title" >GIFT MUGS</div>
        </div>

        <div className="card1 video-container">
          <video width="100%" height="100%" controls loop muted>
            <source src="images/Joyfull_Stories/v7.mp4" type="video/mp4" />
          </video>
          <div className="video-title">SURPRISE THEM</div>
        </div>
      </div>
    </>
  );
}

export default Joyfull_Stories;
