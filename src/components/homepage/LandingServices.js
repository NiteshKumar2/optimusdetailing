"use client";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CardActionArea,
  Stack,
  Box,
} from "@mui/material";

const services = [
  {
    title: "Ceramic Coating",
    description:
      "Ceramic coating provides a durable, glossy layer that protects vehicles from scratches, UV damage, and contaminants. It enhances shine, repels water, and makes cleaning easier, ensuring long-lasting beauty and protection.",
    image: "/ceramic.jpg",
  },
  {
    title: "Car Wash",
    description:
      "A car wash cleans and rejuvenates vehicles by removing dirt, grime, and contaminants. It enhances the car's appearance, protects the paint, and maintains its value.",
    image: "/wash.jpg",
  },
  {
    title: "Steam Wash",
    description:
      "Steam wash is an eco-friendly method using high-temperature steam to remove dirt, grease, and bacteria from vehicles. It disinfects and protects without harsh chemicals.",
    image: "/steam.jpg",
  },
  {
    title: "Car Denting Painting",
    description:
      "Car denting and painting restore a vehicle's body by repairing dents and applying paint. It smooths surfaces, matches the original color, and enhances the vehicle's look.",
    image: "/denting.jpg",
  },
  {
    title: "Paint Protection Film",
    description:
      "Paint Protection Film (PPF) is a transparent, durable layer applied to a vehicle's surface. It protects against scratches, chips, and UV damage.",
    image: "/protection.jpg",
  },
  {
    title: "Ozone Treatment",
    description:
      "Ozone treatment removes odors, kills bacteria, and eliminates mold using ozone gas. It leaves a fresh, clean, and sanitized interior.",
    image: "/ozone.jpg",
  },
];

export default function LandingServices() {
  const phoneNumber = "+918295164888";

  const handleWhatsAppClick = (serviceName) => {
    const message = `Hello, I would like to inquire about your services: ${serviceName}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container sx={{ py: { xs: 5, sm: 10 } }}>
      <Typography
        variant="h3"
        color="success.main"
        textAlign="center"
        mb={6}
        fontWeight={400}
      >
        Our Services
      </Typography>

      <Stack spacing={5}>
        {[0, 1].map((rowIndex) => (
          <Stack
            key={rowIndex}
            direction={{ xs: "column", sm: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {services.slice(rowIndex * 3, rowIndex * 3 + 3).map((service, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    width: { xs: 320, sm: 360, md: 360 },
                    mx: "auto",
                    cursor: "pointer",
                    borderRadius: 2,
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                  onClick={() => handleWhatsAppClick(service.title)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="220"
                      image={service.image}
                      alt={service.title}
                      sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
                    />
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            ))}
          </Stack>
        ))}
      </Stack>
    </Container>
  );
}
