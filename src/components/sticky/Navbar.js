"use client";

import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  CardMedia,
  Container,
  Toolbar,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const phoneNumber = "+918295164888"; // Replace with your phone number (include country code, e.g., '911234567890' for India)
  const message = "Hello, I would like to inquire about your services."; // Optional pre-filled message

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="default"
        elevation={showNavbar ? 4 : 0}
        sx={{
          transition: "transform 0.3s ease, border 0.3s ease",
          transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
          borderBottom: showNavbar ? "1px solid #ccc" : "none",
          backgroundColor: "rgba(255, 255, 255, 0.95)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              flexWrap: "wrap",
              py: 1,
            }}
          >
            {/* Left: Logo */}
            <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
              <Link href="/">
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: 30, sm: 40 },
                    cursor: "pointer",
                    height: "auto",
                  }}
                  src="/logo.jpg"
                  alt="Logo"
                />
              </Link>
            </Box>

            {/* Center: Location Search */}

            {/* Right: Login and Signup Buttons */}
            <Box
              sx={{
                display: { sm: "flex" },
                alignItems: "center",
              }}
            >
              <Button variant="text" onClick={handleClick}>
                <Image
                  src="/whatsapp.png"
                  alt="whatsapp"
                  width={32}
                  height={32}
                />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
