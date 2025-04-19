import { Box, Button, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ProgressBarComponent from "../components/ProgressBar"
import Options from "../components/RadioButton"
import quizData from "../Json/questions"
import { theme } from "../theme"

const TakeQuiz = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [currentIndex, setCurrentIndex] = useState(1)
    const [items, setItems] = useState(quizData.questions)
    const handleChange = (id, newValue) => {
   
        // Create a new array with updated object
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, selectedOption: newValue } : item
        );
        // Set the new array in state
        setItems(updatedItems);
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    fontSize={48}
                    lineHeight={"60px"}
                    color={theme.textBlack}
                    textAlign={"center"}
                    fontWeight={"700"}
                    fontFamily={"Playfair Display"}
                    letterSpacing={"0px"}
                    marginTop={"3rem"}
                    marginBottom={"3rem"}
                >
                    Discover your unique Vibe
                </Typography>
            </Box>
            <Box sx={{
                pl: {
                    xs: "1rem",  // padding 1 on extra-small screens (mobile)
                    md: "23rem", // padding 12 on medium and up (desktop)
                },
                pr: {
                    xs: "1rem",  // padding 1 on extra-small screens (mobile)
                    md: "23rem", // padding 12 on medium and up (desktop)
                },



            }}>
                <Typography
                    fontSize={16}
                    lineHeight={"24px"}
                    color={theme.textBlack}
                    fontWeight={"500"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}

                    marginBottom={"1rem"}
                >
                    Progress
                </Typography>
                <ProgressBarComponent currentIndex={currentIndex} />


                {items.filter((ele) => ele.id === currentIndex).map((item) => (
                    <Box key={item.id}>
                        <Typography
                            fontSize={24}

                            lineHeight={"28px"}
                            color={theme.textBlack}
                            fontWeight={"700"}
                            fontFamily={"Montserrat"}
                            letterSpacing={"0px"}
                            marginTop={"3rem"}
                            marginBottom={"2rem"}
                        >
                            Question {item.id}:      {item.question}
                        </Typography>

                        <Options options={item.options} selectedOption={item.selectedOption} id={item.id} handleChange={handleChange} />

                    </Box>
                ))}


            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    fontSize={16}
                    lineHeight={"24px"}
                    color={theme.textBlack}
                    fontWeight={"400"}
                    fontFamily={"Montserrat"}
                    letterSpacing={"0px"}
                    marginTop={"3rem"}
                    marginBottom={"3rem"}
                >
                    Fantastic progress! Keep it going.
                </Typography>
            </Box>

            <Box
                sx={{

                    pl: {
                        xs: "1rem",  // padding 1 on extra-small screens (mobile)
                        md: "23rem", // padding 12 on medium and up (desktop)
                    },
                    pr: {
                        xs: "1rem",  // padding 1 on extra-small screens (mobile)
                        md: "23rem", // padding 12 on medium and up (desktop)
                    },
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "end",
                }}
            >
                {currentIndex != 1 &&
                    <Button
                        sx={{

                            width: "84px",
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
                        onClick={() => setCurrentIndex(currentIndex - 1)}
                    >
                        Back
                    </Button>
                }
                <Button
                    sx={{
                        width: "84px",
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
                    onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                    {currentIndex === 5 ? "Finish" : "Next"}
                </Button>
            </Box>
        </>
    )
}
export default TakeQuiz