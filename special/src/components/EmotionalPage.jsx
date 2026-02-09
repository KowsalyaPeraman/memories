import React, { useState } from "react";
import { Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import "./EmotionalPage.css";

function EmotionalPage() {
  const navigate = useNavigate();
  const images = [m1, m2, m3];

  const messages = [
    "I got broken 😢 that day… I guess you know why",
    "I gave you a brownie 🍰 for your birthday for the very first time… I’m pretty sure you remember!",
    "First time you selected this dress 👗, but sadly no full pic exists 😅",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    alert(messages[index]);
  };

  const handleNext = () => {
    navigate("/more");
  };

  return (
    <div className="emotional-bg">
      {/* 🔝 Top Text */}
      <Typography className="top-text">
        Feel the emotions...
        <br />
        Tap on the pictures
      </Typography>

      {/* 🖼️ Images */}
      <div className="emotional-grid">
        {images.map((img, i) => (
          <Paper
            key={i}
            className="emotional-card"
            onClick={() => handleImageClick(i)}
            elevation={12}
          >
            <img src={img} alt={`emotional-${i}`} />
          </Paper>
        ))}
      </div>

      {/* ⬇️ Bottom Button */}
      <Button className="next-btn" onClick={handleNext}>
          Feel More 👽
      </Button>
    </div>
  );
}

export default EmotionalPage;
