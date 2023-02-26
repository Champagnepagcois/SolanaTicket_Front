import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { loadIncomingEventsbyPlace } from "../redux/actions/IEventsActions";
import MenuHomeOptions from "../components/menuHomeOptions";
import Eventscarrusel from "../components/Eventscarrusel";
import EventNameCarrusel from "../components/EventNameCarrusel";
import { Grid } from "@mui/material";

import SearchPage from "./SearchPage";

export default function HomePage() {
  const dispatch = useDispatch();
  const dat = new Date();
  var date = {
    year: dat.getFullYear(),
    month: dat.getMonth() + 1,
    day: dat.getDate(),
  };
  const dateNext = (date) => {
    date.day = date.day + 1;
    return dateToString(date);
  };
  const dateToString = (date) => {
    return `${date.year}-${date.month}-${date.day}`;
  };
  useEffect(() => {
    dispatch(loadIncomingEventsbyPlace(dateToString(date), dateNext(date)));
  }, []);
  return (
    <>
      <Box sx={{ height: "auto", marginTop: "10vh" }}>
        <Grid container>
          <Grid item>
            <MenuHomeOptions />
          </Grid>
          <Grid item>
            <EventNameCarrusel />
          </Grid>
          <Grid item justifyContent="center" width="100vw">
            <Eventscarrusel />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
