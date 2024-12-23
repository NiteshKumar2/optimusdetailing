"use client";

import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";

function LandingBanner() {
  const phoneNumber = "+918813911571"; // Replace with your phone number (include country code, e.g., '911234567890' for India)
  const message = "Hello, I would like to inquire about your services."; // Optional pre-filled message

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${"/banner.jpg"})`,
        margin: 0,
        padding: 0,
        borderRadius: 0,
        height: {
          xs: 480,
          sm: 570,
          md: 690,
          lg: 690,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          color="white"
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "2.5rem",
              md: "3rem",
              lg: "3.5rem",
            },
            margin: 0,
          }}
        >
          Optimus detailing
        </Typography>

        <Typography
          variant="h5"
          color="info"
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            margin: 2.5,
            color: "white",
          }}
        >
          Innovative techniques at Optimus guarantee a spotless,
          showroom-quality shine
        </Typography>

        <Button color="success" variant="contained" onClick={handleClick}>
          Let's connect
        </Button>
      </Box>
    </Paper>
  );
}

export default LandingBanner;
