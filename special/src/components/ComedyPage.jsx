import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";
import c5 from "../assets/c5.jpeg";
import c6 from "../assets/c6.jpeg";
import "./ComedyPage.css";

function ComedyPage() {
  const navigate = useNavigate();
  const [showCards, setShowCards] = useState(false);
  const [flipped, setFlipped] = useState(Array(6).fill(false));

  const images = [c1, c2, c3, c4, c5, c6];
  const quotes = [
    "Cutie 😍",
    "Alagu pulla 😁",
    "Alien mode 👽",
    "Kutty paiya 😜",
    "Gundu paiya 🐻",
    "Thoongu mooji 🥱",
  ];

  const flipCard = (i) => {
    const copy = [...flipped];
    copy[i] = !copy[i];
    setFlipped(copy);
  };

  return (
    <div className="comedy-bg">
      {!showCards ? (
        <Typography className="tap-texts" onClick={() => setShowCards(true)}>
          Do you want to see how cute you are?
          <br /><br />
          😈 Tap Me 😈
        </Typography>
      ) : (
        <>
          <Typography className="top-text">
            This is your cute images 😏💛
          </Typography>

          <div className="card-grid">
            {images.map((img, i) => (
              <div
                key={i}
                className={`flip-card ${flipped[i] ? "flipped" : ""}`}
                onClick={() => flipCard(i)}
              >
                <div className="flip-inner">
                  <div className="flip-front">
                    😈
                    <span>Tap Me</span>
                  </div>
                  <div className="flip-back">
                    <img src={img} alt="" />
                    <p>{quotes[i]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="next-btn" onClick={() => navigate("/emotional")}>
            Go to Emotional Page 👽
          </button>
        </>
      )}
    </div>
  );
}

export default ComedyPage;
