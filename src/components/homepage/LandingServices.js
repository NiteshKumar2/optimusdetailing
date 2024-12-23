import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  CardActionArea,
  Link,
  Stack,
} from "@mui/material";

export default function LandingServices() {
  return (
    <Container sx={{ marginY: 10 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Our Services
      </Typography>

      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }} // Stack items in column on small screens, row on larger screens
        justifyContent="center"
        alignItems="center" // Center items horizontally
      >
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 360, md: 360 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="ceramic.jpg"
                alt="Order Online"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Ceramic Coating
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ceramic coating provides a durable, glossy layer that protects
                  vehicles from scratches, UV damage, and contaminants. It
                  enhances shine, repels water, and makes cleaning easier,
                  ensuring long-lasting beauty and protection.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="wash.jpg"
                alt="Shop Review"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Car Wash
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A car wash cleans and rejuvenates vehicles by removing dirt,
                  grime, and contaminants. It enhances the car's appearance,
                  protects the paint, and maintains its value, ensuring a fresh
                  and polished look.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="steam.jpg"
                alt="Night Shopping"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Steam Wash
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Steam wash is an eco-friendly cleaning method using
                  high-temperature steam to remove dirt, grease, and bacteria
                  from vehicles. It cleans thoroughly, disinfects, and protects
                  surfaces without harsh chemicals.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Stack>

      <Stack
        spacing={4}
        direction={{ xs: "column", sm: "row" }} // Stack items in column on small screens, row on larger screens
        mt={5}
        justifyContent="center"
        alignItems="center" // Center items horizontally
      >
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 360, md: 360 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="denting.jpg"
                alt="Order Online"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Car Denting Painting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Car denting and painting restore a vehicle's damaged body by
                  repairing dents and applying fresh paint. It ensures a smooth
                  surface, matches the original color, and enhances the car's
                  appearance and value.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="protection.jpg"
                alt="Shop Review"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Paint Protection Film
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Paint Protection Film (PPF) is a transparent, durable layer
                  applied to a vehicle's surface. It protects against scratches,
                  stone chips, UV damage, and contaminants, preserving the
                  paint's finish and appearance.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        <Link href="/" underline="none">
          <Card sx={{ width: { xs: 320, sm: 380, md: 380 }, margin: "0 auto" }}>
            {" "}
            {/* Set width directly */}
            <CardActionArea>
              <CardMedia
                component="img"
                height="220"
                image="ozone.jpg"
                alt="Night Shopping"
                style={{ borderRadius: "5px" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="primary"
                >
                  Ozone Treatment
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Car ozone treatment uses ozone gas to remove odors, kill
                  bacteria, and eliminate mold inside the vehicle. It provides
                  deep sanitization, leaving a fresh, clean, and healthier
                  interior environment.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Stack>
    </Container>
  );
}
