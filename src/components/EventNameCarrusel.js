import React from "react";
import ElementKindEvent from "./ElementKindEvent";
import { Grid, Typography } from "@mui/material";
export default function EventNameCarrusel() {
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
          height: 250,
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
        }}
        spacing={2}
      >
        <ElementKindEvent
          nameEvent={
            "Drake"
          }
          date={"17 mar 2023"}
          hour={"18:00"}
          place={"Parque O'Higgins"}
          placeLink={"https://es.wikipedia.org/wiki/Parque_O%27Higgins"}
          country={"Santiago de Chile, Chile"}
        />
        <ElementKindEvent
          nameEvent={
            "Billie Eilish"
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
