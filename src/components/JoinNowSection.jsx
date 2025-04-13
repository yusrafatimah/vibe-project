import { Box, Button, Typography } from "@mui/material";
import React from "react";

const JoinNowSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: "98px 0 68px",
        backgroundColor: "#390060",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: 880,
          width: "100%",
          color: "white",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            lineHeight: "45px",
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          Ready to find your vibe?
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: 24,
            lineHeight: "24px",
            marginTop: 6,
          }}
        >
          Join our vibrant community today and start connecting!
        </Typography>
        <Button
          sx={{
            width: 138,
            height: 48,
            backgroundColor: "#00BFFF",
            borderRadius: "24px",
            color: "white",
            marginTop: "68px",
          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default JoinNowSection;
