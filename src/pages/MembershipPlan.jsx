import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React, { useState } from "react";
import { tickSvg } from "../assets/Icons/tick";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MembershipPlan = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
        fontSize={{ xs: 50, sm: 68, md: 68, lg: 68 }}
        lineHeight={{ xs: "70px", sm: "90px", md: "70px", lg: "24px" }}
        color="#121217"
        fontWeight={"800"}
        fontFamily={"Playfair Display"}
        letterSpacing={"0px"}
        marginTop={"110px"}
        marginBottom={"47px"}
        textAlign={"center"}
      >
        Choose Your Membership Plan
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
        Unlock deeper insights and exclusive content with our membership plans
      </Typography>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"42px"}
        flexWrap="wrap"
        sx={{
          margin: {
            xs: "47px 10px 69px 10px",
            sm: "47px 25px 69px 25px",
            md: "47px 54px 69px 54px",
            lg: "47px 54px 69px 54px",
          },
        }}
      >
        <Card
          sx={{
            borderWidth: "2px",
            borderColor: "#00BFFF",
            borderRadius: "12px",
            borderStyle: "solid",
            maxWidth: 377,
            width: "100%",
            height: 393,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ padding: 0, width: "100%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#121217",
                mb: "4px",
              }}
            >
              Basic
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"4px"}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 36,
                  lineHeight: "45px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                  color: "#121217",
                  mb: "4px",
                  fontFamily: "Montserrat",
                }}
              >
                $0
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 16,
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#121217",
                  mt: "4px",
                }}
              >
                /month
              </Typography>
            </Box>
            <Button
              sx={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                margin: "16px 0",
              }}
            >
              Sign Up
            </Button>

            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Access to
              basic features
            </Typography>
            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Limited
              profiles per day
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            borderWidth: "2px",
            borderColor: "#00BFFF",
            borderRadius: "12px",
            borderStyle: "solid",
            maxWidth: 377,
            width: "100%",
            height: 393,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ padding: 0, width: "100%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#121217",
                mb: "4px",
              }}
            >
              Ultimate
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"4px"}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 36,
                  lineHeight: "45px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                  color: "#121217",
                  mb: "4px",
                  fontFamily: "Montserrat",
                }}
              >
                $19.99
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 16,
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#121217",
                  mt: "4px",
                }}
              >
                /month
              </Typography>
            </Box>
            <Button
              sx={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                margin: "16px 0",
              }}
            >
              Go Yearly
            </Button>

            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>All premium
              features
            </Typography>
            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Personalized
              recommendations
            </Typography>
            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Exclusive
              events
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            borderWidth: "2px",
            borderColor: "#00BFFF",
            borderRadius: "12px",
            borderStyle: "solid",
            maxWidth: 377,
            width: "100%",
            height: 393,
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            boxShadow: "none",
          }}
        >
          <CardContent sx={{ padding: 0, width: "100%" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                fontSize: 16,
                lineHeight: "20px",
                fontWeight: 700,
                color: "#121217",
                mb: "4px",
              }}
            >
              Basic
            </Typography>
            <Box display={"flex"} alignItems={"center"} gap={"4px"}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 36,
                  lineHeight: "45px",
                  letterSpacing: "-1px",
                  fontWeight: 800,
                  color: "#121217",
                  mb: "4px",
                  fontFamily: "Montserrat",
                }}
              >
                $0
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontSize: 16,
                  lineHeight: "20px",
                  fontWeight: 500,
                  color: "#121217",
                  mt: "4px",
                }}
              >
                /month
              </Typography>
            </Box>
            <Button
              sx={{
                width: "100%",
                height: 40,
                backgroundColor: "#00BFFF",
                borderRadius: "24px",
                color: "white",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: "21px",
                textTransform: "capitalize",
                margin: "16px 0",
              }}
            >
              Sign Up
            </Button>

            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Access to
              basic features
            </Typography>
            <Typography
              sx={{
                color: "#121217",
                fontSize: 14,
                lineHeight: "20px",
                fontWeight: 500,
                mb: "8px",
              }}
            >
              <span style={{ marginRight: "12px" }}>{tickSvg}</span>Limited
              profiles per day
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={"12px"}
        sx={{
          margin: {
            xs: "47px 10px 69px 10px",
            sm: "47px 25px 69px 25px",
            md: "47px 54px 69px 54px",
            lg: "47px 54px 69px 54px",
          },
        }}
      >
        <Typography
          fontSize={32}
          lineHeight={"28px"}
          color="#121217"
          fontWeight={"700"}
          fontFamily={"Montserrat"}
          letterSpacing={"0px"}
          mb={"16px"}
        >
          FAQ
        </Typography>

        <Box
          display="flex"
          flexDirection={"column"}
          width={"100%"}
          gap={"12px"}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              borderRadius: "12px !important",
              boxShadow: "none",
              padding: "7px 15px",
              border: "1px solid #4B0082",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                What is the purpose of the quiz?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{
              borderRadius: "12px !important",
              boxShadow: "none",
              padding: "7px 15px",
              border: "1px solid #4B0082",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                How long does the quiz take?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Donec placerat, lectus sed mattis semper, neque lectus feugiat
                lectus, varius pulvinar diam eros in elit. Pellentesque
                convallis laoreet laoreet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{
              borderRadius: "12px !important",
              boxShadow: "none",
              padding: "7px 15px",
              border: "1px solid #4B0082",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
              >
                What kind of questions are asked?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default MembershipPlan;
