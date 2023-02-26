import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";

export default function AnyResultSearch() {
  const primary = red[500]; // #f44336
  const handlePagePlace = (linkplace) => {
    alert(`${linkplace}`);
  };
  return (
    <>
      <Box sx={{ width: "calc(50vw-5px)", height: 250 }}>
        <Card sx={{ display: "flex" }}>
          <Grid item xs={8} md={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  No se encontro ningun resultado
                </Typography>
              </CardContent>
            </Box>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
