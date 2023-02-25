import React from "react";
import ElementCarruselEvent from "./ElementCarruselEvent";
import { Card, Box, CardContent, Grid, Typography } from "@mui/material";

export default function Eventscarrusel() {
  return (
    <Grid sx={{ marginLeft: "20px" }}>
      <Typography
        variant="h4"
        color="primary"
        component="div"
        sx={{ marginBottom: "20px" }}
      >
        Eventos principales
      </Typography>
      <Grid
        sx={{
          height: 350,
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
        }}
        spacing={2}
      >
        <ElementCarruselEvent
          nameEvent={
            "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
          }
          date={"17 mar 2023"}
          hour={"18:00"}
          place={"Parque O'Higgins"}
          placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
          country={"Santiago de Chile, Chile"}
        />
        <ElementCarruselEvent
          nameEvent={
            "Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023- 3 Días"
          }
          date={"17 mar 2023"}
          hour={"18:00"}
          place={"Parque O'Higgins"}
          placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
          country={"Santiago de Chile, Chile"}
        />
      </Grid>
    </Grid>
  );
}
