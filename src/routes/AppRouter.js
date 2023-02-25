import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header";

export default function AppRouter() {
  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
}
