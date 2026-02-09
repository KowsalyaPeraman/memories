import React, { useState } from "react";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./MemoryPage.css";
import { useNavigate } from "react-router-dom";

import m1 from "../assets/we1.jpeg";
import m2 from "../assets/we8.jpeg";
import m3 from "../assets/we3.jpeg";
import m4 from "../assets/we4.jpeg";
import m5 from "../assets/we5.jpeg";
import m6 from "../assets/we6.jpeg";
import m7 from "../assets/we15.jpeg";
import m8 from "../assets/we2.jpeg";

function MemoryPage() {
  const [open, setOpen] = useState(Array(8).fill(false));
  const navigate = useNavigate();

  const reveal = (i) => {
    const copy = [...open];
    copy[i] = true;
    setOpen(copy);
  };

  const images = [m1, m6, m3, m4, m5, m8, m7, m2];

  return (
    <div className="memory-bg">
      <Typography className="memory-title">Tap the hidden memories 💕</Typography>

      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          onClick={() => reveal(i)}
          className={`memory-img pos${i + 1} ${open[i] ? "reveal" : ""}`}
        />
      ))}

      {[...Array(12)].map((_, i) => (
        <FavoriteIcon key={i} className={`tiny-heart h${i + 1}`} />
      ))}

      {open.some(Boolean) && (
        <Typography
          className="touch-text"
          onClick={() => navigate("/comedy")}
        >
          Ellam pics um paaru aprm <br/>
          Touch me 💌 
        </Typography>
      )}
    </div>
  );
}

export default MemoryPage;
