import React, { useState } from "react";
import { Typography, Paper } from "@mui/material";
import Confetti from "react-confetti";
import "./SurprisePage.css";
import testImg from "../assets/r1.jpeg";
import { useNavigate } from "react-router-dom";

function SurprisePage() {
  const [showGrand, setShowGrand] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="surprise-bg">
      {showGrand && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <Paper elevation={12} className="surprise-card">
        {!showGrand ? (
          <Typography
            variant="h5"
            className="surprise-msg"
            onClick={() => setShowGrand(true)}
          >
            Hi Rahul Kumar 😍 <br />
            <small style={{ fontSize: "14px" }}>Tap me for your surprise!</small>
          </Typography>
        ) : (
          <>
            <img src={testImg} alt="test" className="grand-img" />

            <Typography variant="h6" className="grand-msg">
              Nee thaan ithu 😅 Comedy illa thaan adjust karo
            </Typography>

            <button className="next-btn" onClick={() => navigate("/message")}>
              Next 💌
            </button>
          </>
        )}
      </Paper>
    </div>
  );
}

export default SurprisePage;
