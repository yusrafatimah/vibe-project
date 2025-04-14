import {
  Box,
  FormControlLabel,
  Grid,
  InputLabel,
  TextField,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems="center"
      flexDirection={"column"}
      sx={{
        margin: {
          xs: "0 25px",
          sm: "0px 25px",
          md: "0px 47px",
          lg: "0px 47px",
          xl: "0px 47px",
        },
      }}
    >
      <Typography
        fontSize={{ xs: 55, sm: 64, md: 64, lg: 64 }}
        lineHeight={{ xs: "65px", sm: "65px", md: "28px", lg: "28px" }}
        color="#121217"
        fontWeight={"800"}
        fontFamily={"Playfair Display"}
        letterSpacing={"0px"}
        marginTop={"64px"}
        marginBottom={"64px"}
        textAlign={"center"}
      >
        Create Your account
      </Typography>

      <Grid
        container
        display={"flex"}
        justifyContent="center"
        alignItems="flex-start"
        flexDirection={"column"}
        maxWidth={480}
        width="100%"
      >
        <Grid width="100%" item sm={12} marginBottom={"24px"}>
          <InputLabel shrink={false} htmlFor={"firstname"}>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color="#121217"
              fontWeight={"500"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"8px"}
              textAlign={"left"}
            >
              First Name
            </Typography>
          </InputLabel>
          <TextField
            id="firstname"
            fullWidth
            margin="normal"
            name="firstname"
            autoComplete="firstname"
            autoFocus
            placeholder="Enter your first name"
            sx={{
              height: "56px",
              width: "100%",
              borderRadius: "12px",
              margin: 0,
            }}
          />
        </Grid>
        <Grid width="100%" item sm={12} marginBottom={"24px"}>
          <InputLabel shrink={false} htmlFor={"lastname"}>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color="#121217"
              fontWeight={"500"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"8px"}
              textAlign={"left"}
            >
              Last Name
            </Typography>
          </InputLabel>
          <TextField
            id="lastname"
            fullWidth
            margin="normal"
            name="lastname"
            autoComplete="lastname"
            autoFocus
            placeholder="Enter your last name"
            sx={{
              height: "56px",
              width: "100%",
              borderRadius: "12px",
              margin: 0,
            }}
          />
        </Grid>
        <Grid width="100%" item sm={12} marginBottom={"24px"}>
          <InputLabel shrink={false} htmlFor={"email"}>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color="#121217"
              fontWeight={"500"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"8px"}
              textAlign={"left"}
            >
              Email Address
            </Typography>
          </InputLabel>
          <TextField
            id="email"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Enter your email address"
            sx={{
              height: "56px",
              width: "100%",
              borderRadius: "12px",
              margin: 0,
            }}
          />
        </Grid>
        <Grid width="100%" item sm={12}>
          <InputLabel shrink={false} htmlFor={"password"}>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color="#121217"
              fontWeight={"500"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"8px"}
              textAlign={"left"}
            >
              Password
            </Typography>
          </InputLabel>
          <TextField
            id="password"
            fullWidth
            margin="normal"
            name="password"
            autoComplete="password"
            autoFocus
            placeholder="Create a strong password"
            sx={{
              height: "56px",
              width: "100%",
              borderRadius: "12px",
              margin: 0,
            }}
          />
        </Grid>

        <Button
          sx={{
            width: "100%",
            height: 48,
            backgroundColor: "#00BFFF",
            borderRadius: "24px",
            color: "white",
            marginTop: "30px",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: "21px",
            textTransform: "capitalize",
          }}
        >
          Sign Up
        </Button>
      </Grid>
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        margin={" 72px 0 "}
        flexDirection={"column"}
      >
        <Typography
          fontSize={"16px"}
          lineHeight={"21px"}
          color="#6B5E8C"
          fontWeight={"400"}
          fontFamily={"Montserrat"}
          letterSpacing={"0px"}
          marginBottom={"16px"}
        >
          Already have an account?
        </Typography>

        <Typography
          fontSize={"16px"}
          lineHeight={"21px"}
          color="#6B5E8C"
          fontWeight={"400"}
          fontFamily={"Montserrat"}
          letterSpacing={"0px"}
          onClick={() => navigate("/login")}
          sx={{ cursor: "pointer" }}
        >
          Sign in
        </Typography>
      </Box>
    </Box>
  );
};

export default Signup;
