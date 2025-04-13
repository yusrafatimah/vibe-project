import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        paddingTop: "67px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          paddingTop: "67px",
          maxWidth: 1280,
          width: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: 960,
            width: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "40px 20px",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <Button variant="text" sx={{ color: "#6B5E8C" }}>
              About Us
            </Button>
            <Button variant="text" sx={{ color: "#6B5E8C" }}>
              Contact
            </Button>
            <Button variant="text" sx={{ color: "#6B5E8C" }}>
              Terms of Service
            </Button>
            <Button
              variant="text"
              sx={{ color: "#6B5E8C" }}
              onClick={() => navigate("/privacy-policy")}
            >
              Privacy Policy
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <IconButton>
              <img src="/src/assets/twitter.png" alt="twitter" />
            </IconButton>
            <IconButton>
              <img src="/src/assets/fb.png" alt="facebook" />
            </IconButton>
            <IconButton>
              <img src="/src/assets/insta.png" alt="insta" />
            </IconButton>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 16,
              lineHeight: "24px",
              letterSpacing: 0,
              color: "#6B5E8C",
            }}
          >
            @2024 What's My Vibe, All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
