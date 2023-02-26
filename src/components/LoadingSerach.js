import {
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { red } from "@mui/material/colors";

export default function LoadingSearch() {
  const primary = red[500]; // #f44336
  return (
    <>
      <Box sx={{ width: "calc(50vw-5px)", height:"50vh" }}>
        <Card sx={{ display: "flex" }}>
          <Grid item xs={8} md={12}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <CircularProgress />
              </CardContent>
            </Box>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
