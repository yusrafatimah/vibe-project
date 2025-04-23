import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "../assets/pie-logo.svg";

import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const pages = [
    { path: "/", name: "explore" },
    { path: "/about", name: "about" },
    { path: "/signup", name: "signup" },
    { path: "/login", name: "login" },
  ];
  const [open, setOpen] = React.useState(false);
  const anchorEl = React.useRef();

  const navigateTo = (path) => {
    navigate(path);
  };

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
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          mt: pathname === "/login" || pathname === "/signup" ? "20px" : "25px",
          mb: pathname === "/login" || pathname === "/signup" ? "15px" : "20px",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingLeft: `0 !important`, paddingRight: `0 !important` }}
        >
          <Toolbar disableGutters>
            <Box
              className="navbar-logo"
              onClick={() => navigate("/")}
              display={"flex"}
              alignItems={"center"}
              gap={2}
              sx={{
                cursor: "pointer",
                display: { xs: "none", md: "flex" },
              }}
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

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="black"
                sx={{
                  fontSize: "34px",
                  padding: "0 0 0 0",
                  color: "#121217",
                }}
                ref={anchorEl}
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  display: {
                    xs: "block",
                    md: "block",
                  },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      width: "100%",
                      left: "35px !important",
                      top: "0px !important",
                      borderRadius: 0,
                      backgroundColor: "white",
                    },
                  },
                }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <Box
                  display={"flex"}
                  justifyContent={"flex-end"}
                  sx={{ pr: "5px" }}
                  onClick={() => setOpen(false)}
                >
                  <ClearIcon />
                </Box>
                <Box
                  className="navbar-logo-sm"
                  onClick={() => navigate("/")}
                  display={"flex"}
                  alignItems={"center"}
                  gap={2}
                  sx={{
                    cursor: "pointer",
                    display: { xs: "flex", md: "none" },
                    p: "30px 0px 20px 15px",
                  }}
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
                {pages.map((page) => (
                  <MenuItem
                    sx={{ p: "5px 20px" }}
                    key={page.name}
                    onClick={() => {
                      setOpen(false);
                      navigate(page.path);
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: 18,
                        lineHeight: "23px",
                        color: "#4b0082",
                        textTransform: "capitalize",
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              className="navbar-logo-sm"
              onClick={() => navigate("/")}
              display={"flex"}
              alignItems={"center"}
              gap={2}
              sx={{
                cursor: "pointer",
                display: { xs: "flex", md: "none" },
              }}
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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", gap: "10px" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => {
                if (!(pathname === "/login" || pathname === "/signup")) {
                  return (
                    <Button
                      key={page.name}
                      sx={{
                        borderRadius: "24px",
                        width: 86,
                        height: 48,
                        backgroundColor:
                          page.name === "login" ? "#4b0082" : "transparent",
                        color:
                          page.name === "login"
                            ? "white"
                            : page.name === "signup"
                            ? "#4b0082"
                            : "#121217",
                        fontWeight:
                          page.name === "login" || page.name === "signup"
                            ? "bold"
                            : "normal",
                        textTransform: "capitalize",
                        fontSize: "16px",
                        lineHeight: "23px",
                        padding: 0,
                      }}
                      onClick={() => navigateTo(page.path)}
                    >
                      {page.name}
                    </Button>
                  );
                }
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
