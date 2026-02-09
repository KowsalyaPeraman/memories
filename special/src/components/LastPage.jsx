import React, { useState, useRef } from "react";
import { Typography, Paper, Button } from "@mui/material";
import "./LastPage.css";

function LastPage() {
  const [step, setStep] = useState(1);
  const [noPos, setNoPos] = useState({ top: 60, left: 140 });
  const boxRef = useRef(null);

  const moveNoButton = () => {
    const box = boxRef.current;
    if (!box) return;

    const maxX = box.clientWidth - 120;
    const maxY = box.clientHeight - 45;

    const left = Math.random() * maxX;
    const top = Math.random() * maxY;

    setNoPos({ top, left });
  };

  return (
    <div className="last-bg">
      <Paper className="last-card" elevation={12}>
        {step === 1 && (
          <>
            <Typography className="last-title">
              Smile incoming… open this 😌🤣
            </Typography>
            <Button className="main-btn" onClick={() => setStep(2)}>
              Reveal 💛
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <Typography className="last-title">
              Did you like this surprise? 😅😍
            </Typography>

            <div className="btn-box" ref={boxRef}>
              <Button className="yes-btn" onClick={() => setStep(3)}>
                YES 👽
              </Button>

              <Button
                className="no-btn"
                style={{
                  position: "absolute",
                  top: noPos.top,
                  left: noPos.left,
                }}
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
              >
                NO 👽
              </Button>
            </div>
          </>
        )}

        {step === 3 && (
          <Typography className="final-love">
            LUV U NGA 💛 <br />
            RAHUL KUMAR 👽😅😍
          </Typography>
        )}
      </Paper>
    </div>
  );
}

export default LastPage;
