import { Box } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { loadEventsSearch } from "../redux/actions/PEventsActions";

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
  linkImage,
  nameArtist,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleclicCard = (searchInput) => {
    dispatch(loadEventsSearch(searchInput));
    navigate(`../search`, { replace: true });
  };
  const handlePagePlace = (linkplace) => {
    if (linkplace) {
      window.open(linkplace);
    } else {
      alert("Este lugar no tiene pagina web");
    }
  };
  return (
    <>
      <Box sx={{ width: 400, height: 450, border: 0 }}>
        <Card sx={{ width: 400, height: 350 }}>
          <CardActionArea onClick={(e) => handleclicCard(nameArtist)}>
            <CardMedia
              sx={{ width: 400, height: 200, maxHeight: 200 }}
              image={linkImage}
              title={nameEvent}
              alt={nameEvent}
              component="img"
            />
            <Box sx={{ overflow: "auto", height: 250 }}>
              <CardContent>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {nameEvent}
                </Typography>
                <Typography
                  variant="subtitle2"
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
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
}
