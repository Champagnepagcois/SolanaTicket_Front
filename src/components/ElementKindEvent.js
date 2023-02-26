import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
export default function ElementKindEvent({ nameEvent,imageLink }) {
  const handleclicCard = () => {
    alert("ME hiciste click");
  };
  return (
    <Box sx={{ width: 280, height: 250, border: 0, marginRight: "40px", maxHeight:250 }}>
      <Card sx={{ maxWidth: 450, maxHeight: 350 }}>
        <CardActionArea onClick={(e) => handleclicCard()}>
          <CardMedia
            sx={{ width: "280px", height: "200px", maxHeight: "150px" }}
            image={imageLink}
            title={"Image "+nameEvent}
            alt="Artist"
          />
          <CardContent>
            <Typography
              textAlign="center"
              gutterBottom
              variant="h5"
              component="div"
            >
              {nameEvent}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}
