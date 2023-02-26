import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
export default function ElementKindEvent({ nameEvent, imageLink }) {
  const navigate = useNavigate();

  const handleclicCard = (searchInput) => {
    navigate(`../search?${searchInput}`, { replace: true });
  };
  return (
    <Box
      sx={{
        width: 280,
        height: 250,
        border: 0,
        marginRight: "40px",
        maxHeight: 250,
      }}
      onClick={(e) => handleclicCard(nameEvent)}
    >
      <Card sx={{ maxWidth: 450, maxHeight: 350, cursor: "default" }}>
        <CardActionArea>
          <CardMedia
            sx={{ width: "280px", height: "200px", maxHeight: "150px" }}
            image={imageLink}
            title={"Image " + nameEvent}
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
