import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Box,
} from "@mui/material";
export default function ElementKindEvent({ nameEvent }) {
  const handleclicCard = () => {
    alert("ME hiciste click");
  };
  return (
    <Box sx={{ width: 250, height: 250, border: 0, marginRight: "20px" }}>
      <Card sx={{ maxWidth: 450, maxHeight: 350 }}>
        <CardActionArea onClick={(e) => handleclicCard()}>
          <CardMedia
            sx={{ width: "250px", height: "200px", maxHeight: "150px" }}
            image="https://bikubo.com/images/seating-circular.jpg"
            title="Concert's map"
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
