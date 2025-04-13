import { Typography, Box } from "@mui/material";
import React from "react";
import { theme } from "../theme";
import { StyledCard } from "../styles/global";
import HeartIcon from "../assets/Icons/heartIcon.svg";
import CreativityIcon from "../assets/Icons/creativity.png";
import InclusiveIcon from "../assets/Icons/inclusive.png";
import CommunityIcon from "../assets/Icons/community.svg";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Box
        sx={{
          margin: "0 47px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={68}
            lineHeight={"60px"}
            color={theme.headingBlack}
            fontWeight={"700"}
            fontFamily={"Playfair Display"}
            letterSpacing={"1px"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
          >
            About What's My Vibe
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              fontSize={24}
              lineHeight={"28px"}
              color={theme.colorPurple}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Our Story
            </Typography>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color={theme.textBlack}
              fontWeight={"400"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Founded in 2020 by Amelia Chen, What's My Vibe grew from a passion
              for fashion, aiming to empower unique styles. We've evolved from a
              blog to a community, celebrating diverse voices and promoting
              inclusivity.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              fontSize={24}
              lineHeight={"28px"}
              color={theme.colorPurple}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Mission
            </Typography>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color={theme.textBlack}
              fontWeight={"400"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Our mission: inspire individuals to find and express their unique
              style. We provide a platform for creativity, community, and
              resources, showcasing diverse perspectives within fashion.{" "}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              fontSize={24}
              lineHeight={"28px"}
              color={theme.colorPurple}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Vision
            </Typography>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color={theme.textBlack}
              fontWeight={"400"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              We envision fashion as a tool for self-expression. What's My Vibe
              aspires to be the leading platform, connecting fashion and
              individuality, and ensuring everyone has access to resources for
              authentic self-expression.{" "}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Typography
              fontSize={24}
              lineHeight={"28px"}
              color={theme.colorPurple}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Values
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={2} p={2}>
              <StyledCard>
                <img src={HeartIcon} alt="" height={"24px"} width={"24px"} />
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontSize={16}
                    lineHeight={"20px"}
                    color={theme.colorPurple}
                    fontWeight={"700"}
                    fontFamily={"Be Vietnam Pro"}
                    letterSpacing={"0px"}
                  >
                    Authenticity
                  </Typography>

                  <Typography
                    fontSize={14}
                    lineHeight={"21px"}
                    color={theme.lightPurple}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Championing genuine self-expression.
                  </Typography>
                </Box>
              </StyledCard>
              <StyledCard>
                <img
                  src={CommunityIcon}
                  alt=""
                  height={"24px"}
                  width={"24px"}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontSize={16}
                    lineHeight={"20px"}
                    color={theme.colorPurple}
                    fontWeight={"700"}
                    fontFamily={"Be Vietnam Pro"}
                    letterSpacing={"0px"}
                  >
                    Community
                  </Typography>

                  <Typography
                    fontSize={14}
                    lineHeight={"21px"}
                    color={theme.lightPurple}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Fostering a supportive, respectful environment.
                  </Typography>
                </Box>
              </StyledCard>
              <StyledCard>
                <img
                  src={CreativityIcon}
                  alt=""
                  height={"24px"}
                  width={"24px"}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontSize={16}
                    lineHeight={"20px"}
                    color={theme.colorPurple}
                    fontWeight={"700"}
                    fontFamily={"Be Vietnam Pro"}
                    letterSpacing={"0px"}
                  >
                    Creativity
                  </Typography>

                  <Typography
                    fontSize={14}
                    lineHeight={"21px"}
                    color={theme.lightPurple}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Inspiring imagination and innovation in style.
                  </Typography>
                </Box>
              </StyledCard>
              <StyledCard>
                <img
                  src={InclusiveIcon}
                  alt=""
                  height={"24px"}
                  width={"24px"}
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: "0.5rem",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    fontSize={16}
                    lineHeight={"20px"}
                    color={theme.colorPurple}
                    fontWeight={"700"}
                    fontFamily={"Be Vietnam Pro"}
                    letterSpacing={"0px"}
                  >
                    Inclusivity
                  </Typography>

                  <Typography
                    fontSize={14}
                    lineHeight={"21px"}
                    color={theme.lightPurple}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    Celebrating diversity and accessibility for all.
                  </Typography>
                </Box>
              </StyledCard>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Typography
              fontSize={24}
              lineHeight={"28px"}
              color={theme.colorPurple}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Founder's Note Vision
            </Typography>
            <Typography
              fontSize={16}
              lineHeight={"24px"}
              color={theme.textBlack}
              fontWeight={"400"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              What's My Vibe is a reflection of a community's journey, mirrored
              by my own. My vision was a space exploring the deep connection
              between style and identity. Witnessing the diverse expressions
              within our community strengthens my commitment to empowering
              individuals. I'm excited for our continued evolution, enriching
              the landscape of personal style within What's My Vibe.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default About;
