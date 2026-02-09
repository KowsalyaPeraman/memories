import React from "react";
import { Typography, Paper } from "@mui/material";
import "./MessagePage.css";
import { useNavigate } from "react-router-dom";

function MessagePage() {
  const navigate = useNavigate();

  return (
    <div className="message-bg">
      <Paper elevation={12} className="message-card">
        <Typography
          className="message-text"
          onClick={() => navigate("/memory")}
        >
          One small memory's for you 📝
          <br /><br/>
          <span className="tap-text">Touch me 👽</span>
        </Typography>
      </Paper>
    </div>
  );
}

export default MessagePage;
