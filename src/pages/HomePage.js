import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import MenuHomeOptions from "../components/menuHomeOptions";
import Eventscarrusel from "../components/Eventscarrusel";
import EventNameCarrusel from "../components/EventNameCarrusel";
import SearchPage from "./SearchPage";
export default function HomePage() {
  return (
    <>
      <Box sx={{ height: "auto",marginTop:"10vh"}}>
        <MenuHomeOptions />
        <EventNameCarrusel />
        <Eventscarrusel />
      </Box>
    </>
  );
}
