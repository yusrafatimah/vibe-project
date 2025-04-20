import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import cosmicBanner from '../assets/cosmic.png';
import OverViewSection from "../components/OverViewSection";
import { theme } from "../theme";
import GoodSideSection from "../components/GoodSide";
import DarkSideSection from "../components/DarkSide";
const SuccessPage = () => {
    const [sideSelected, setSideSelected] = useState("overview")
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
                        fontSize={68}
                        lineHeight={"60px"}
                        color={theme.headingBlack}
                        fontWeight={"700"}
                        fontFamily={"Playfair Display"}
                        letterSpacing={"1px"}
                        marginTop={"5rem"}
                        marginBottom={"3rem"}
                    >
                        You Are the Cosmic Alchemist!
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                    <Typography
                        fontSize={16}
                        lineHeight={"24px"}
                        color={theme.lightGrey}
                        fontWeight={"400"}
                        fontFamily={"Montserrat"}
                        letterSpacing={"0px"}


                    >
                        A rare blend of creativity, intuition, and analytical thinking. You transform ordinary moments into extraordinary experiences.
                    </Typography>
                    <img src={cosmicBanner} alt=""  width={"100%"}/>
                    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                        <Typography
                            fontSize={18}
                            lineHeight={"23px"}
                            color={theme.darkBlue}
                            fontWeight={"700"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"}
                            marginBottom={"1rem"}

                        >
                            Cosmic Alchemist      </Typography>
                        <Typography
                            fontSize={16}
                            lineHeight={"24px"}
                            color={theme.lightGrey}
                            fontWeight={"400"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"}
                            marginBottom={"2rem"}

                        >
                            Your Results    </Typography></Box>

                    <Box sx={{
                        display: "flex", justifyContent: "space-around", width: "90%",
                        borderBottom: "3px solid #E5E8EB"
                    }}>
                        <Typography
                            fontSize={16}
                            lineHeight={"21px"}
                            color={sideSelected === "overview"?theme.mixedBlack:theme.lightGrey}
                            fontWeight={"700"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"}
                            marginBottom={"1rem"}
                            onClick={() => setSideSelected("overview")}

                        >
                            Overview    </Typography>
                        <Typography
                            fontSize={16}
                            lineHeight={"21px"}
                            color={sideSelected === "goodSide"?theme.mixedBlack:theme.lightGrey}
                            fontWeight={"700"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"} marginBottom={"1rem"}
                            onClick={() => setSideSelected("goodSide")}

                        >
                            Good Side    </Typography>
                        <Typography
                            fontSize={16}
                            lineHeight={"21px"}
                            color={sideSelected === "darkSide"?theme.mixedBlack:theme.lightGrey}
                            fontWeight={"700"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"}
                            marginBottom={"1rem"}
                            onClick={() => setSideSelected("darkSide")}
                        >
                            Dark Side  </Typography>
                    </Box>
                </Box>
                {sideSelected === "overview" ?
                    <OverViewSection /> :
                    sideSelected === "goodSide" ?
                        <GoodSideSection /> :
                        <DarkSideSection />}
            </Box>

        </>
    )
}

export default SuccessPage