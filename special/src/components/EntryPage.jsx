import React from 'react';
import { Typography, Paper, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./EntryPage.css";
import { useNavigate } from "react-router-dom";

function EntryPage() {

  const navigate = useNavigate();

  return (
    <div className='entry-bg'> 
      <Paper elevation={12} className="entry-card">
        <FavoriteIcon className="heart-icon" />
        <Typography>
          Something Special 💌
        </Typography>

        <Typography className="entry-subtitle">
          Someone made this only for you....
          <br/>
          Ready for a surprise 👽
        </Typography>

        <Button variant="contained" className='entry-btn'
        onClick={()=> navigate("/surprise")}>
          Open Surprise
        </Button>
      </Paper>
    </div>
  )
}

export default EntryPage;
