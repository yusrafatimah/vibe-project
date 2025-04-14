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

const Login = () => {
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
        fontSize={64}
        lineHeight={{ xs: "65px", sm: "28px", md: "28px", lg: "28px" }}
        color="#121217"
        fontWeight={"800"}
        fontFamily={"Playfair Display"}
        letterSpacing={"0px"}
        marginTop={"64px"}
        marginBottom={"38px"}
        textAlign={"center"}
      >
        Welcome Back!
      </Typography>
      <Typography
        fontSize={16}
        lineHeight={"24px"}
        color="#878080"
        fontWeight={"400"}
        fontFamily={"Montserrat"}
        letterSpacing={"0px"}
        marginBottom={{ xs: "75px", sm: "110px", md: "110px", lg: "110px" }}
        textAlign={"center"}
      >
        Sign in to continue exploring What's My Vibe and connect with friends.
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
              Email
            </Typography>
          </InputLabel>
          <TextField
            id="email"
            fullWidth
            margin="normal"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="your@email.com"
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
            placeholder="Your password"
            sx={{
              height: "56px",
              width: "100%",
              borderRadius: "12px",
              margin: 0,
            }}
          />
        </Grid>
        <FormControlLabel
          sx={{
            margin: "24px 0",
          }}
          control={
            <Checkbox
              sx={{
                [` &.Mui-checked > svg `]: {
                  fill: "#1976d2 !important",
                },
                [` & svg`]: {
                  fill: "#DEDBE5",
                },
              }}
              iconStyle={{ fill: "white" }}
            />
          }
          label="Remember Me"
        />
        <Button
          sx={{
            width: "100%",
            height: 48,
            backgroundColor: "#00BFFF",
            borderRadius: "24px",
            color: "white",
            marginTop: "12px",
            fontSize: 14,
            fontWeight: "bold",
            lineHeight: "21px",
            textTransform: "capitalize",
          }}
        >
          Log In
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
          Forgot password?
        </Typography>

        <Typography
          fontSize={"16px"}
          lineHeight={"21px"}
          color="#6B5E8C"
          fontWeight={"400"}
          fontFamily={"Montserrat"}
          letterSpacing={"0px"}
          onClick={() => navigate("/signup")}
          sx={{ cursor: "pointer" }}
        >
          New to VibeCheck? Sign up
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
