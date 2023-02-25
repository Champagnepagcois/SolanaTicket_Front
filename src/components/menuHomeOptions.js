import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { Box, Grid, Button } from "@mui/material";

export default function MenuHomeOptions() {
  return (
    <Grid>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 4,
        }}
        elevation={0}
        component="ul"
      >
        <Stack spacing={20} direction="row">
          <Button size="medium" variant="contained">
            Conciertos y festivales
          </Button>
          <Button size="medium" variant="contained">
            Deportes
          </Button>
          <Button size="medium" variant="contained">
            Teatro y comedia
          </Button>
          <Button size="medium" variant="contained">
            Viajes
          </Button>
        </Stack>
      </Paper>
    </Grid>
  );
}
