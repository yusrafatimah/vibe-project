import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/pie-logo.svg";
import { StyledButton } from "../styles/global";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Box
      className="navbar"
      sx={{
        backgroundColor: "white",
        borderBottom: "2px solid #390060",
        margin: {
          xs: "0 10px",
          sm: "0px 25px",
          md: "0px 47px",
          lg: "0px 47px",
          xl: "0px 47px",
        },
      }}
    >
      <Box
        margin={
          pathname === "/"
            ? "59px 0px 30px"
            : pathname === "/login" || pathname === "/signup"
            ? "27px 0px 30px"
            : "44px 0px 30px"
        }
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          onClick={() => navigate("/")}
          display={"flex"}
          alignItems={"center"}
          gap={2}
        >
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
          {pathname === "/quiz-form" && (
            <span>
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
                onClick={() => navigate("/login")}
                className="primary-button"
              >
                About
              </StyledButton>
            </span>
          )}
          {pathname === "/login" || pathname === "/signup" ? (
            ""
          ) : (
            <span>
              <StyledButton
                sx={{
                  width: 86,
                  height: 48,
                  backgroundColor: "transparent",
                  color: "#4b0082",
                  fontWeight: "bold",
                }}
                className="primary-button"
                onClick={() => navigate("/signup")}
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
                onClick={() => navigate("/login")}
              >
                Login
              </StyledButton>
            </span>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
