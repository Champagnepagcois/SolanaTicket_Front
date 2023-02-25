import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import MenuHomeOptions from "../components/menuHomeOptions";
import Eventscarrusel from "../components/Eventscarrusel";
import EventNameCarrusel from "../components/EventNameCarrusel";
export default function HomePage() {
  return (
    <>
      <Box sx={{ height: "auto" }}>
        <MenuHomeOptions />
        <EventNameCarrusel />
        <Eventscarrusel />
      </Box>
    </>
  );
}
