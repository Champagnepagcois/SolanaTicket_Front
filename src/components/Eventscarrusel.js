import React from "react";
import ElementCarruselEvent from "./ElementCarruselEvent";
import { useSelector, useDispatch } from "react-redux";

import { Card, Box, CardContent, Grid, Typography } from "@mui/material";

export default function Eventscarrusel() {
  const listPrincipalEvents = useSelector((state) => state.allEvents.top);
  const getParseDate = (olddate) => {
    const date = new Date(olddate);
    return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
  };
  const getParseHour = (oldHour) => {
    const date = new Date(oldHour);
    return `${date.getHours()}:${date.getMinutes()}`;
  };

  const cardEvent = listPrincipalEvents?.map((event) => (
    <Grid item xs={1} md={4} justifyContent="center">
      <ElementCarruselEvent
        nameEvent={event.description}
        linkImage={event.image}
        date={getParseDate(event.startDate)}
        hour={getParseHour(event.startDate)}
        place={event.location.name}
        placeLink={event.location.sameAs}
        country={
          event.location.address.addressLocality +
          ", " +
          event.location.address.addressCountry
        }
      />
    </Grid>
  ));
  return (
    <>
      <Typography
        variant="h4"
        color="primary"
        component="div"
        sx={{ marginBottom: "20px" }}
      >
        Eventos en tu ciudad
      </Typography>
      <Box>
        <Grid container justifyContent="center">
          {cardEvent}
        </Grid>
      </Box>
    </>
  );
}
