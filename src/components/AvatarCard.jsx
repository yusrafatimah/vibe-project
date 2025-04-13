import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Avatar, Box, Typography } from "@mui/material";

const AvatarCard = ({ src, title, subheader, content = "" }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        height: 264,
        boxShadow: 0,
        borderWidth: "1px",
        borderColor: "#878080",
        borderStyle: "solid",
        borderRadius: 0,
      }}
    >
      <Box padding={"48px 16px 20px 16px"} height={"100%"}>
        <CardHeader
          sx={{ padding: 0 }}
          slotProps={{
            subheader: {
              sx: {
                fontSize: "14px",
                fontWeight: "300",
                lineHeight: "21px",
                color: "#000000",
                fontFamily: "Montserrat",
                letterSpacing: "0px",
              },
            },
            title: {
              sx: {
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "21px",
                color: "#000000",
                fontFamily: "Montserrat",
                letterSpacing: "0px",
                marginBottom: "5px",
              },
            },
          }}
          avatar={
            <Avatar
              sx={{ height: 54, width: 54 }}
              src={src ? src : ""}
              aria-label="recipe"
            />
          }
          title={title ?? ""}
          subheader={subheader ?? ""}
        />

        <CardContent
          sx={{
            padding: 0,
            paddingBottom: "0px !important",
            marginTop: "30px",
          }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {content}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default AvatarCard;
