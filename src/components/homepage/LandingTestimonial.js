"use client";

import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function LandingTestimonial() {
  const theme = useTheme();

  const testimonials = [
    {
      name: "Ankit Singh",
      feedback:
        "Optimus Detailing transformed my car into a brand-new vehicle. Their attention to detail is unmatched. Highly recommended!",
      image: "owner.png",
    },
    {
      name: "Monu Sharma",
      feedback:
        "The team at Optimus Detailing exceeded my expectations. My car looks amazing, and I couldn't be happier with the results.",
      image: "/user2.jpg",
    },
    {
      name: "Aman Kumar",
      feedback:
        "Fantastic service! The team was professional, and the results speak for themselves. Will definitely return.",
      image: "/user3.jpg",
    },
  ];

  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 40 },
        backgroundColor:"rgb(255 250 245)",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        textAlign="center"
        gutterBottom
        color="primary"
      >
        What Our Customers Say
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 345,
              mx: "auto",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Typography variant="h6" component="h3" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontStyle="italic"
              >
                "{testimonial.feedback}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
