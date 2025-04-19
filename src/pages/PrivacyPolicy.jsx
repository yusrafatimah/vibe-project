import React, { useEffect } from "react";
import { theme } from "../theme";
import { Box, Typography } from "@mui/material";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
            fontSize={64}
            lineHeight={"60px"}
            color={theme.textBlack}
            fontWeight={"700"}
            fontFamily={"Playfair Display"}
            letterSpacing={"1px"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
          >
            Privacy Policy
          </Typography>
        </Box>

        <Box   sx={{
        pl: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
        pr: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
      }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Introduction
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Welcome to What's My Vibe's Privacy Policy. This policy
                describes how we collect, use, and protect your personal
                information. We value your privacy and are committed to
                maintaining the security and confidentiality of your data.{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Information We Collect
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                We collect various types of information, including account
                information (such as your name and email address), profile
                information (including your interests and preferences), and
                usage data (such as how you interact with our platform).{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                How We Use Your Information
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Your information is used to provide and improve our services,
                personalize your experience, communicate with you, and ensure
                the security of our platform. We may also use your information
                for marketing and promotional purposes, with your consent where
                required.{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Data Sharing and Disclosure
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                We do not sell your personal information. We may share your
                information with service providers who assist us in operating
                our platform, conducting business activities, or providing
                services to you, always under strict confidentiality agreements.{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Data Security
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                We employ robust security measures to protect your personal
                information from unauthorized access, use, or disclosure.
                However, please note that no method of transmission over the
                internet or electronic storage is completely secure.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={64}
            lineHeight={"60px"}
            color={theme.textBlack}
            fontWeight={"700"}
            fontFamily={"Playfair Display"}
            letterSpacing={"1px"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
          >
            Terms & Conditions
          </Typography>
        </Box>
        <Box  sx={{
        pl: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
        pr: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
      }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Acceptance of Terms
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                By accessing or using the What's My Vibe platform, you agree to
                be bound by these Terms & Conditions. If you do not agree with
                any part of these terms, you should not access or use our
                services.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Use of Services
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                You may use our services only for lawful purposes and in
                accordance with these terms. You agree not to engage in any
                activity that interferes with or disrupts the platform, or its
                users' experiences.{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                User Content
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                You are responsible for any content you post or share on our
                platform. You agree not to post content that is harmful,
                offensive, or violates the rights of others. We reserve the
                right to remove content that violates these terms.{" "}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Disclaimers
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Our platform is provided "as is" without any warranties, express
                or implied. We do not guarantee the accuracy, completeness, or
                reliability of any content on our platform.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontSize={64}
            lineHeight={"60px"}
            color={theme.textBlack}
            justifyContent={"center"}
            fontWeight={"700"}
            fontFamily={"Playfair Display"}
            letterSpacing={"1px"}
            marginTop={"5rem"}
            marginBottom={"5rem"}
          >
            Refund Policy
          </Typography>
        </Box>
        <Box  sx={{
        pl: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
        pr: {
          xs: 1,  // padding 1 on extra-small screens (mobile)
          md: 12, // padding 12 on medium and up (desktop)
        },
      }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Refund Eligibility
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                justifyContent={"center"}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Refunds are considered on a case-by-case basis. To be eligible
                for a refund, you must demonstrate that our service was not
                delivered as described.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Requesting a Refund
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                To request a refund, please contact our support team within 14
                days of your purchase. Provide detailed information about the
                issue, including screenshots if applicable.{" "}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                fontSize={18}
                lineHeight={"23px"}
                color={theme.textBlack}
                fontWeight={"700"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Refund Processing
              </Typography>
              <Typography
                fontSize={16}
                lineHeight={"24px"}
                color={theme.textBlack}
                fontWeight={"400"}
                fontFamily={"Montserrat"}
                letterSpacing={"0px"}
              >
                Once your request is received, we will review it and notify you
                of the outcome. Approved refunds will be processed to your
                original payment method within 7-10 business days.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PrivacyPolicy;
