import { Box, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/banner.png";
import { StyledButton, StyledCard } from "../styles/global";
import AvatarCard from "../components/AvatarCard";
import JoinNowSection from "../components/JoinNowSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
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
          sx={{
            margin: {
              xs: "0 10px",
              sm: "0px 25px",
              md: "0px 47px",
              lg: "0px 47px",
              xl: "0px 47px",
            },
          }}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            position={"relative"}
            sx={{
              margin: {
                xs: "50px 0 100px 0",
                sm: "50px 0 100px 0",
                md: "80px 0 165px 0",
                lg: "80px 0 165px 0",
                xl: "80px 0 165px 0",
              },
            }}
            className="hero-image-gradient"
            height={"fit-content"}
            width={"fit-content"}
          >
            <img
              style={{
                maxWidth: "1242px",
              }}
              width="100%"
              height="100%"
              src={heroImage}
              alt="hero"
            />

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              position={"absolute"}
              top={0}
              left={0}
              height={"100%"}
              width={"100%"}
              zIndex={2}
            >
              <Typography
                fontSize={{ xs: 30, sm: 44, md: 44, lg: 64 }}
                lineHeight={"24px"}
                color="#FFFFFF"
                fontWeight={"800"}
                fontFamily={"Playfair Display"}
                letterSpacing={"0px"}
                sx={{
                  marginBottom: {
                    xs: "10px",
                    sm: "30px",
                    md: "40px",
                    lg: "76px",
                    xl: "76px",
                  },
                  marginTop: {
                    xs: "10px",
                    sm: "20px",
                    md: "25px",
                    lg: "34px",
                    xl: "34px",
                  },
                }}
              >
                Discover Your Vibe
              </Typography>
              <Typography
                fontSize={{ xs: 12, sm: 16, md: 19, lg: 24 }}
                lineHeight={{ xs: "15px", sm: "24px", md: "24px", lg: "24px" }}
                color="#FFFFFF"
                fontWeight={"600"}
                fontFamily={"Montserrat"}
                margin={"0 148px 127px 148px"}
                sx={{
                  margin: {
                    xs: "0 10px 10px 10px",
                    sm: "0 20px 30px 20px",
                    md: "0 100px 60px 100px",
                    lg: "0 148px 127px 148px",
                    xl: "0 148px 127px 148px",
                  },
                }}
                letterSpacing={"0px"}
                maxWidth={927}
                textAlign={"center"}
              >
                Take our personality quiz and unlock insights about your unique
                energy, style, and essence. Find your tribe and embrace your
                authentic self.
              </Typography>
              <StyledButton
                sx={{
                  maxWidth: { xs: 200, sm: 405, md: 405, lg: 405 },
                  width: "100%",
                  height: { xs: 30, sm: 55, md: 75, lg: 95 },
                  backgroundColor: "white",
                  color: "#121217",
                  fontSize: { xs: 14, sm: 20, md: 24, lg: 24 },
                  lineHeight: "24px",
                  borderRadius: "27px",
                  fontWeight: "500",
                  fontFamily: "Montserrat",
                }}
                onClick={() => navigate("/quiz")}
                className="primary-button"
              >
                Take The Quiz
              </StyledButton>
            </Box>
          </Box>
          <Box
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
          >
            <Typography
              fontSize={40}
              lineHeight={"24px"}
              color="#390060"
              fontWeight={"600"}
              fontFamily={"Playfair Display"}
              letterSpacing={"0px"}
              marginBottom={"77px"}
            >
              How it works
            </Typography>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"16px"}
              marginBottom={"140px"}
              flexWrap="wrap"
            >
              <StyledCard
                sx={{
                  borderWidth: "2px",
                  borderColor: "#00bfff",
                  borderRadius: "8px",
                  borderStyle: "solid",
                  maxWidth: 385,
                  width: "100%",
                  height: 340,
                }}
              >
                <Box margin={"48px 16px"}        onClick={() => navigate("/takeQuiz")}>
                  <Typography
                    fontSize={24}
                    lineHeight={"20px"}
                    color="#121217"
                    fontWeight={"700"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                    marginBottom={"50px"}
                  >
                    Take the quiz
                  </Typography>
                  <Typography
                    fontSize={16}
                    lineHeight={"21px"}
                    color="#390060"
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Answer a few simple questions to help us understand your
                    style preferences.
                  </Typography>
                </Box>
              </StyledCard>
              <StyledCard
                sx={{
                  borderWidth: "2px",
                  borderColor: "#00bfff",
                  borderRadius: "8px",
                  borderStyle: "solid",
                  maxWidth: 385,
                  width: "100%",
                  height: 340,
                }}
              >
                <Box margin={"48px 16px"}>
                  <Typography
                    fontSize={24}
                    lineHeight={"20px"}
                    color="#121217"
                    fontWeight={"700"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                    marginBottom={"50px"}
                  >
                    Discover Your Vibe
                  </Typography>
                  <Typography
                    fontSize={16}
                    lineHeight={"21px"}
                    color="#390060"
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Get insights into your unique style and what makes you tick.
                  </Typography>
                </Box>
              </StyledCard>
              <StyledCard
                sx={{
                  borderWidth: "2px",
                  borderColor: "#00bfff",
                  borderRadius: "8px",
                  borderStyle: "solid",
                  maxWidth: 385,
                  width: "100%",
                  height: 340,
                }}
              >
                <Box margin={"48px 16px"}>
                  <Typography
                    fontSize={24}
                    lineHeight={"20px"}
                    color="#121217"
                    fontWeight={"700"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                    marginBottom={"50px"}
                  >
                    Join the tribe
                  </Typography>
                  <Typography
                    fontSize={16}
                    lineHeight={"21px"}
                    color="#390060"
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Connect with like-minded individuals who share your
                    passions.
                  </Typography>
                </Box>
              </StyledCard>
            </Box>
          </Box>
        </Box>
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
        >
          <Typography
            fontSize={40}
            lineHeight={{ xs: "45px", sm: "24px", md: "24px", lg: "24px" }}
            color="#390060"
            fontWeight={"600"}
            fontFamily={"Playfair Display"}
            letterSpacing={"0px"}
            marginBottom={"103px"}
            textAlign={"center"}
          >
            What people are saying
          </Typography>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"98px"}
            marginBottom={"64px"}
            flexWrap="wrap"
          >
            {Array(3)
              .fill("*")
              .map((item, index) => (
                <AvatarCard
                  key={index}
                  title={"User 1"}
                  subheader={"Cosmic Alchemist"}
                  content={
                    "This quiz was spot on! I finally understand why I vibe with certain people and situations. The recommendations are super helpful too!"
                  }
                />
              ))}
          </Box>
        </Box>
      </Box>
      <JoinNowSection />
    </>
  );
};
export default Home;
