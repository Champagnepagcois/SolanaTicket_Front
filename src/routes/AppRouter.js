import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/header";

export default function AppRouter() {
  useEffect(() => {
    if (navigator.geolocation) {
      alert(navigator.geolocation.getCurrentPosition());
    } else {
      alert("No se puedo obtener");
    }
  }, []);
  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <Header />
        </Grid>
        <Grid item>
          <Outlet />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
