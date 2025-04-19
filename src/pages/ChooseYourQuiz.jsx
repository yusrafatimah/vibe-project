import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import lifestyleQuiz from "../assets/lifestyleQuiz.png";
import moodQuiz from "../assets/moodQuiz.png";
import vibeQuiz from "../assets/vibeQuiz.png";
import { useNavigate } from "react-router-dom";

const ChooseYourQuiz = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        margin: {
          xs: "0 10px 132px 10px",
          sm: "0 25px 132px 25px",
          md: "0 47px 132px 47px",
          lg: "0 47px 132px 47px",
          xl: "0 47px 132px 47px",
        },
      }}
    >
      <Typography
        fontSize={68}
        lineHeight={{ xs: "70px", sm: "50px", md: "24px", lg: "24px" }}
        color="#121217"
        fontWeight={"800"}
        fontFamily={"Playfair Display"}
        letterSpacing={"0px"}
        marginTop={"110px"}
        marginBottom={"47px"}
        textAlign={"center"}
      >
        Choose Your Quiz
      </Typography>
      <Typography
        fontSize={24}
        lineHeight={"24px"}
        color="#878080"
        fontWeight={"400"}
        fontFamily={"Montserrat"}
        letterSpacing={"0px"}
        // marginBottom={{ xs: "35px", sm: "47px", md: "47px", lg: "47px" }}
        textAlign={"center"}
      >
        Select the quiz that resonates with what you want to discover about
        yourself
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"93px"}
        flexWrap="wrap"
        mt="47px"
      >
        <Card
          sx={{
            borderWidth: "1px",
            borderColor: "#00BFFF",
            borderRadius: "11px",
            borderStyle: "solid",
            maxWidth: 351,
            width: "100%",
            height: 500,
            padding: "16px 18px 0 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <img
            style={{
              maxWidth: "320px",
              height: "171px",
            }}
            width="100%"
            height="100%"
            src={lifestyleQuiz}
            alt="hero"
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#1C170D",
                mb: "4px",
              }}
            >
              Lifestyle Quiz
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#878080",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
                mb: "23px",
              }}
            >
              12 questions · 5 min
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#000000",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
              }}
            >
              Discover how your daily habits and preferences shape your unique
              vibe
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                maxWidth: 196,
                width: "100%",
                height: 32,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                mb: "36px",
              }}
              onClick={() => navigate("/plans")}
            >
              Start Quiz
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            borderWidth: "1px",
            borderColor: "#00BFFF",
            borderRadius: "11px",
            borderStyle: "solid",
            maxWidth: 351,
            width: "100%",
            height: 500,
            padding: "16px 18px 0 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <img
            style={{
              maxWidth: "320px",
              height: "171px",
            }}
            width="100%"
            height="100%"
            src={moodQuiz}
            alt="hero"
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#1C170D",
                mb: "4px",
              }}
            >
              Mood Quiz
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#878080",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
                mb: "23px",
              }}
            >
              10 questions · 4 min
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#000000",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
              }}
            >
              Uncover your emotional patterns and how they influence your energy
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                maxWidth: 196,
                width: "100%",
                height: 32,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                mb: "36px",
              }}
              onClick={() => navigate("/plans")}
            >
              Start Quiz
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            borderWidth: "1px",
            borderColor: "#00BFFF",
            borderRadius: "11px",
            borderStyle: "solid",
            maxWidth: 351,
            width: "100%",
            height: 500,
            padding: "16px 18px 0 18px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            boxShadow: "none",
          }}
        >
          <img
            style={{
              maxWidth: "320px",
              height: "171px",
            }}
            width="100%"
            height="100%"
            src={vibeQuiz}
            alt="hero"
          />
          <CardContent sx={{ padding: 0 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#1C170D",
                mb: "4px",
              }}
            >
              Vibe Personality Quiz
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#878080",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
                mb: "23px",
              }}
            >
              20 questions · 8 min
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#000000",
                fontSize: 14,
                lineHeight: "21px",
                fontWeight: 500,
              }}
            >
              The complete assessment to reveal your core vibe identity
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              padding: 0,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{
                maxWidth: 196,
                width: "100%",
                height: 32,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                mb: "36px",
              }}
              onClick={() => navigate("/plans")}
            >
              Start Quiz
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};
export default ChooseYourQuiz;
