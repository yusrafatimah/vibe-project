import { Box, Button, Grid, Typography } from "@mui/material";
import { default as React } from "react";
import CheckIcon from '../assets/Icons/check.png';
import { StyledCard } from "../styles/global";
import { theme } from "../theme";
const DarkSideSection = () => {

  return (
    <>

      <Box sx={{ marginLeft: "5rem", marginRight: "5rem", marginTop: "3rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2rem" }}>
          <Typography
            fontSize={36}
            lineHeight={"45px"}
            color={theme.darkBlue}
            fontWeight={"700"}
            fontFamily={"Montserrat"}
            letterSpacing={"-1px"}
            marginBottom={"1rem"}

          >
            Your Dark Side </Typography>
          <Typography
            fontSize={16}
            lineHeight={"24px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}
            marginBottom={"2rem"}

          >
            The essence of your Cosmic Alchemist energy  </Typography></Box>
        <Typography
          fontSize={16}
          lineHeight={"24px"}
          color={theme.mixedBlack}
          fontWeight={"400"}
          fontFamily={"Montserrat"}
          letterSpacing={"0px"}
          marginBottom={"2rem"}

        >
          As a Cosmic Alchemist, you possess a unique ability to see connections where others don't. You're drawn to transformation and growth, constantly seeking to evolve yourself and elevate those around you. Your energy is both grounding and expansive – you can be the calm in the storm while also inspiring others to reach for the stars. This duality makes you a natural bridge-builder between different types of people. </Typography>
        <Box sx={{ borderTop: "1px solid #E5E8EB", borderBottom: "1px solid #E5E8EB", padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Core Traits</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Intuitive</Typography>
            </Grid>
          </Grid>


        </Box>
        <Box sx={{ borderBottom: "1px solid #E5E8EB", padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Creative</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Analytical</Typography>
            </Grid>
          </Grid>


        </Box>
        <Box sx={{ borderBottom: "1px solid #E5E8EB", padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Empathetic</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Natural Gifts</Typography>
            </Grid>
          </Grid>


        </Box>
        <Box sx={{ borderBottom: "1px solid #E5E8EB", padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Problem-solving</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Emotional intelligence</Typography>
            </Grid>
          </Grid>


        </Box>
        <Box sx={{ borderBottom: "1px solid #E5E8EB", padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Pattern recognition</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Emotional intelligence</Typography>
            </Grid>
          </Grid>


        </Box>
        <Box sx={{ padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Pattern recognition</Typography>
            </Grid>
            <Grid size={6} item>
              <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.colorPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}


              >
                • Adaptability</Typography>
            </Grid>
          </Grid>


        </Box>
      </Box>
      <Box sx={{ marginLeft: "5rem", marginRight: "5rem", marginTop: "3rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2rem" }}>
          <Typography
            fontSize={32}
            lineHeight={"45px"}
            color={theme.newBlack}
            fontWeight={"700"}
            fontFamily={"Montserrat"}
            letterSpacing={"-1px"}
            marginBottom={"1rem"}

          >
            Personal Recommendations </Typography>
          <Typography
            fontSize={16}
            lineHeight={"24px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}
            marginBottom={"2rem"}

          >
            Tailored suggestions based on your Cosmic Alchemist vibe</Typography></Box>
      </Box>
      <Box display="flex" flexWrap="wrap" gap={2} p={2}>
        <StyledCard sx={{ width: "387px", height: "261px" }}>
          <img
            src={CheckIcon}
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
              color={theme.newBlack}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Daily Practices
            </Typography>
            <ul style={{ paddingLeft: "1rem" }}>
              <li>  <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Morning journaling

              </Typography></li>
              <li> <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >

                Nature walks

              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >


                Creative visualization

              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >


                Mindful breathing
              </Typography></li>
            </ul>

          </Box>
        </StyledCard>
        <StyledCard sx={{ width: "387px", height: "261px" }}>
          <img
            src={CheckIcon}
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
              color={theme.newBlack}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Ideal Environments
            </Typography>
            <ul style={{ paddingLeft: "1rem" }}>
              <li>  <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Creative workspaces


              </Typography></li>
              <li> <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Collaborative teams


              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >


                Access to nature


              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >

                • Quiet reflection spaces
              </Typography></li>
            </ul>

          </Box>
        </StyledCard>
        <StyledCard sx={{ width: "387px", height: "261px" }}>
          <img
            src={CheckIcon}
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
              color={theme.newBlack}
              fontWeight={"700"}
              fontFamily={"Montserrat"}
              letterSpacing={"0px"}
            >
              Growth Opportunities
            </Typography>
            <ul style={{ paddingLeft: "1rem" }}>
              <li>  <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Public speaking


              </Typography></li>
              <li> <Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Creative writing


              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >


                Mentorship programs


              </Typography></li>
              <li><Typography
                fontSize={14}
                lineHeight={"21px"}
                color={theme.lightPurple}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >

                Community leadership
              </Typography></li>
            </ul>

          </Box>
        </StyledCard>
      </Box>
      <Box sx={{ marginLeft: "5rem", marginRight: "5rem", marginTop: "3rem" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "2rem" }}>
          <Typography
            fontSize={32}
            lineHeight={"45px"}
            color={theme.newBlack}
            fontWeight={"700"}
            fontFamily={"Montserrat"}
            letterSpacing={"-1px"}
            marginBottom={"1rem"}

          >
            Share Your Results</Typography>
          <Typography
            fontSize={16}
            lineHeight={"24px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}
            marginBottom={"2rem"}

          >
            Let your friends discover their vibe too</Typography></Box>

        <Box sx={{ display: "flex", gap: "5rem" }}>
          <Button
            sx={{
              maxWidth: { xs: 200, sm: 405, md: 405, lg: 405 },
              height: 54,
              width: "100%",
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
            Share
          </Button>
          <Button
            sx={{
              maxWidth: { xs: 200, sm: 405, md: 405, lg: 405 },
              width: "100%",
              height: 54,
              backgroundColor: "#EDF0F2",
              borderRadius: "24px",
              color: "white",
              marginTop: "30px",
              fontSize: 14,
              fontWeight: "bold",
              lineHeight: "21px",
              textTransform: "capitalize",
            }}
          >
            Take Another Quiz
          </Button>

        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4rem" }}>
          <Typography
            fontSize={32}
            lineHeight={"45px"}
            color={theme.newBlack}
            fontWeight={"700"}
            fontFamily={"Montserrat"}
            letterSpacing={"-1px"}
            marginBottom={"1rem"}

          >
            Explore Premium Insights</Typography>
          <Typography
            fontSize={16}
            lineHeight={"24px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}
            marginBottom={"2rem"}

          >
            Unlock deeper analysis and exclusive content.</Typography></Box>

      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: "192px", marginTop: "4rem", border: " 1px solid #DEDBE5", padding: "20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", }}> <Typography
          fontSize={32}
          lineHeight={"45px"}
          color={theme.newBlack}
          fontWeight={"700"}
          fontFamily={"Montserrat"}
          letterSpacing={"-1px"}


        >
          Unlock Deeper Insights</Typography>
          <Typography
            fontSize={16}
            lineHeight={"24px"}
            color={theme.lightGrey}
            fontWeight={"400"}
            fontFamily={"Montserrat"}
            letterSpacing={"0px"}


          >
            Upgrade your membership to gain a more detailed analysis of your vibe and personalized recommendations.</Typography></Box>

        <Button
          sx={{
            maxWidth: { xs: 60, sm: 131, md: 131, lg: 131 },
            width: "100%",
            height: 32,
            backgroundColor: "#4B0082",
            borderRadius: "24px",
            color: "white",

            fontSize: 14,
            fontWeight: "bold",
            lineHeight: "21px",
            textTransform: "capitalize",
          }}
        >
          Upgrade Now
        </Button>
      </Box>
    </>
  );
};

export default DarkSideSection;
