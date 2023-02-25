import { Box } from "@mui/system";
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
} from "@mui/material";

export default function ElementCarruselEvent({
  nameEvent,
  date,
  hour,
  placeLink,
  place,
  country,
}) {
  const handlePagePlace = (linkplace) => {
    alert(`${linkplace}`);
  };
  const handleclicCard = () => {
    alert("ME hiciste click");
  };
  return (
    <>
      <Box sx={{ width: 450, height: 300, border: 0, marginRight: "20px" }}>
        <Card sx={{ maxWidth: 450, maxHeight: 350 }}>
          <CardActionArea onClick={(e) => handleclicCard()}>
            <CardMedia
              sx={{ width: "450px", height: "200px", maxHeight: "150px" }}
              image="https://bikubo.com/images/seating-circular.jpg"
              title="Concert's map"
              alt="Artist"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {nameEvent}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {date} • {hour ? hour : "TBA"}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                <Button
                  size="small"
                  onClick={(e) => handlePagePlace(placeLink)}
                >
                  {place + ", "}
                </Button>
                {country}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
