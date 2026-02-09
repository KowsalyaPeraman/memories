import React, { useState } from "react";
import { Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MorePage.css";

import p1 from "../assets/l1.jpeg";
import p2 from "../assets/l2.jpeg";
import p3 from "../assets/l3.jpeg";
import p4 from "../assets/l4.jpeg";
import p5 from "../assets/l5.jpeg";
import p6 from "../assets/l6.jpeg";
import p7 from "../assets/l7.jpeg";
import p8 from "../assets/l8.jpeg";
import p9 from "../assets/l9.jpeg";
import p10 from "../assets/l10.jpeg";
import p11 from "../assets/we30.jpeg";
import p12 from "../assets/we31.jpeg";
import p13 from "../assets/we32.jpeg";
import p14 from "../assets/we33.jpeg";
import p15 from "../assets/r1.jpeg";

function MorePage() {
  const navigate = useNavigate();

  const images = [
    p1, p2, p3, p4, p5, p6, p7, p8,
    p9, p10, p11, p12, p13, p14, p15
  ];

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [sideImages, setSideImages] = useState([]);

  const handleCenterClick = () => {
    if (index >= images.length - 1) {
      navigate("/last");
      return;
    }

    setSideImages((prev) => [...prev, images[index]]);
    setIndex((prev) => prev + 1);
  };

  const maxSide = 4;
  const visible = sideImages.slice(-8);
  const leftSide = visible.slice(0, 4);
  const rightSide = visible.slice(4, 8);

  return (
    <div className="more-bg">
      {!started ? (
        <div className="start-wrapper" onClick={() => setStarted(true)}>
          <Typography className="start-text">Innum iruku 😌💛</Typography>
          <Typography className="tap-text">Tap me 👽</Typography>
        </div>
      ) : (
        <div className="more-main-area">
          
          <div className="side-column">
            {leftSide.map((img, i) => (
              <Paper key={i} className="side-card">
                <img src={img} alt="side" />
              </Paper>
            ))}
          </div>

      
          <Paper className="center-card" onClick={handleCenterClick}>
            <img src={images[index]} alt="center" />
          </Paper>

          
          <div className="side-column">
            {rightSide.map((img, i) => (
              <Paper key={i} className="side-card">
                <img src={img} alt="side" />
              </Paper>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MorePage;
