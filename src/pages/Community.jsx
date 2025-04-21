import { Box, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import data from "../Json/communityData";
import groupData from "../Json/groupsData";
import GroupIcon from "../assets/Icons/group.png";
import { StyledCard } from "../styles/global";
import { theme } from "../theme";
const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            fontSize={64}
            lineHeight={"60px"}
            color={theme.textBlack}
            fontWeight={"700"}
            fontFamily={"Playfair Display"}
            letterSpacing={"1px"}
            textAlign={"center"}
            marginTop={"5rem"}
            marginBottom={"3rem"}
          >
            Community Hub
          </Typography>
          <Typography
            fontSize={16}
            lineHeight={"21px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}
            textAlign={"center"}
            marginBottom={"5rem"}
          >
            Connect with individuals who share your style. Engage in live feeds,
            contribute to collaborative vibe boards, and interact through likes,
            comments, and shares.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            pl: {
              xs: "1rem", // padding 1 on extra-small screens (mobile)
              md: "4rem", // padding 12 on medium and up (desktop)
            },
            pr: {
              xs: "1rem", // padding 1 on extra-small screens (mobile)
              md: "4rem", // padding 12 on medium and up (desktop)
            },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              fontSize={32}
              lineHeight={"28px"}
              color={theme.textBlack}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"2rem"}
            >
              Active Communities
            </Typography>
            <Box
              display="flex"
              flexWrap="wrap"
              sx={{
                gap: {
                  xs: "16px",
                  md: "12px",
                },
              }}
              p={2}
            >
              {data.slice(0, 4).map((item) => (
                <Box
                  sx={{
                    minWidth: {
                      xs: "100%",
                      md: "250px",
                    },
                    width: {
                      xs: "100%",
                      md: "250px",
                    },
                  }}
                >
                  <img
                    style={{
                      maxWidth: {
                        xs: "100%",
                        md: "240px",
                      },
                      height: "240px",
                    }}
                    width="100%"
                    height="100%"
                    src={item.image}
                    alt="hero"
                  />
                  <Typography
                    fontSize={16}
                    lineHeight={"24px"}
                    color={theme.textBlack}
                    fontWeight={"600"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    fontSize={13}
                    lineHeight={"21px"}
                    color={theme.lightGrey}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                  >
                    {item.description}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography
              fontSize={32}
              lineHeight={"28px"}
              color={theme.textBlack}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
              marginBottom={"1rem"}
            >
              Join the Interaction
            </Typography>
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: {
                    xs: "100%",
                    md: "30%",
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-suffix-shrink"
                label="Search for Groups"
                variant="outlined"
              />
            </Box>
            <Box display="flex" flexWrap="wrap" gap={2} p={2}>
              {groupData.map((item) => (
                <StyledCard
                  sx={{
                    minHeight: {
                      xs: "100%",
                      md: "200px",
                    },
                    minWidth: {
                      xs: "100%",
                      md: "200px",
                    },
                    width: {
                      xs: "100%",
                      md: "200px",
                    },
                    height: {
                      xs: "100%",
                      md: "200px",
                    },
                  }}
                >
                  <img src={GroupIcon} alt="" height={"24px"} width={"24px"} />
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      fontSize={16}
                      lineHeight={"24px"}
                      color={theme.textBlack}
                      fontWeight={"600"}
                      fontFamily={"Montserrat"}
                      letterSpacing={"0px"}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      fontSize={13}
                      lineHeight={"21px"}
                      color={theme.lightPurple}
                      fontWeight={"400"}
                      fontFamily={"Montserrat"}
                      letterSpacing={"0px"}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </StyledCard>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Community;
