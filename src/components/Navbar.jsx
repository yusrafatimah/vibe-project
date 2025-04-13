import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/pie-logo.svg";
import { StyledButton } from "../styles/global";
const Navbar = () => {
  const handleRedirect=()=>{
    window.location.replace('/about')
  }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderBottom: "2px solid #390060",
      }}
    >
      <Box
        margin="59px 0px 30px"
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"} gap={2}>
          <img src={Logo} alt="logo" width={16} height={"auto"} />
          <Typography
            fontWeight={"bold"}
            fontSize={18}
            lineHeight={"23px"}
            color="#121217"
          >
            What's My Vibe
          </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={2}>
          <StyledButton
            sx={{
              width: 86,
              height: 48,
              backgroundColor: "transparent",
              color: "#121217",
            }}
            className="primary-button"
          >
            Explore
          </StyledButton>
          <StyledButton
            sx={{
              width: 86,
              height: 48,
              backgroundColor: "transparent",
              color: "#121217",
            }}
            onClick={handleRedirect}
            className="primary-button"
          >
            About
          </StyledButton>
          <StyledButton
            sx={{
              width: 86,
              height: 48,
              backgroundColor: "transparent",
              color: "#4b0082",
              fontWeight: "bold",
            }}
            className="primary-button"
          >
            Sign Up
          </StyledButton>
          <StyledButton
            sx={{
              borderRadius: "24px",
              width: 86,
              height: 48,
              backgroundColor: "#4b0082",
              color: "white",
              fontWeight: "bold",
            }}
            className="primary-button"
          >
            Login
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
