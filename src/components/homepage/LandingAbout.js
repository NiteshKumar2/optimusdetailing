import * as React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography } from "@mui/material";

export default function LandingAbout() {
  return (
    <Box
      sx={{
        py: 6,
        px: { xs: 2, sm: 4, md: 40 },
        backgroundColor: "rgb(255 250 245)",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          gap: 6,
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            mb: { xs: 1, md: 0 },
          }}
        >
          <Image
            src="/owner.png"
            alt="Our Founder"
            width={480}
            height={480}
            style={{
              width: "100%",
              maxWidth: 500,
              height: "auto",
            }}
          />
        </Box>

        {/* Text Section */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "left", md: "left" },
          }}
        >
          <Typography gutterBottom variant="h4" component="div" color="primary">
            Our Founder
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Sachin Boora, the founder of Optimus Detailing, is a trailblazer in
            the automotive care industry. Driven by a passion for cars and a
            commitment to excellence, he established Optimus Detailing as a
            premier destination for premium car detailing services. Under his
            leadership, the company has gained a reputation for meticulous
            attention to detail, cutting-edge techniques, and customer-centric
            solutions. Sachin's innovative approach combines modern technology
            with traditional craftsmanship, ensuring vehicles receive the best
            possible care. His vision has transformed Optimus Detailing into a
            trusted brand, catering to car enthusiasts and everyday vehicle
            owners who value quality, precision, and outstanding service.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
