import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import { Instagram, YouTube } from "@mui/icons-material";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Optimus Detailing © "}
      <Link href="/" color="inherit">
        Copyright&nbsp;
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        pt: { xs: 8, sm: 12 },
        pb: { xs: 2, sm: 3 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          width: "100%",
          gap: { xs: 4, sm: 2 },
        }}
      >
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Box sx={{ ml: { xs: 1, sm: 0 } }}>
            <Image src="/logo.jpg" alt=" Logo" width={50} height={50} />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            mt={1}
            sx={{ maxWidth: { sm: 230 } }}
          >
            Innovative techniques at Optimus guarantee a spotless,
            showroom-quality shine
          </Typography>
          {/* <Stack direction="row" spacing={1} useFlexGap>
            <TextField
              id="newsletter-email"
              size="small"
              variant="outlined"
              fullWidth
              placeholder="Your email address"
              inputProps={{
                autoComplete: "off",
                "aria-label": "Enter your email address",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ flexShrink: 0 }}
            >
              Subscribe
            </Button>
          </Stack> */}
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "contents", md: "contents" } }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} mb={1}>
              Optimus Detailing
            </Typography>
            <Stack spacing={0.5}>
              <Link color="text.secondary" href="#">
                Services
              </Link>
              <Link color="text.secondary" href="#">
                About Us
              </Link>
              <Link color="text.secondary" href="#">
                Highlights
              </Link>
              <Link color="text.secondary" href="#">
                FAQs
              </Link>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} mb={1}>
              Contact
            </Typography>
            <Stack spacing={0.5}>
              <Link color="text.secondary" href="#">
              +91 8295164888
              </Link>
              <Link color="text.secondary" href="#">
                Mail
              </Link>
              <Link
                color="text.secondary"
                href="https://www.instagram.com/optimusdetailing_jind/"
              >
                Instagram
              </Link>
            </Stack>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="body2" fontWeight={600} mb={1}>
              Address
            </Typography>
            <Stack spacing={0.5}>
              <Link color="text.secondary" href="#">
                opposite Deep Palace, Shiv Colony, Urban Estate, Jind, Haryana
                126102
              </Link>
              <Link color="text.secondary">Mon- Sun: 9am- 7pm</Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 1, sm: 2 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.instagram.com/optimusdetailing_jind/"
            aria-label="Instagram"
            sx={{ alignSelf: "center" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.instagram.com/optimusdetailing_jind/"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.youtube.com/@OptimusDetailingJind"
            aria-label="Youtube"
            sx={{ alignSelf: "center" }}
          >
            <YouTube />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
