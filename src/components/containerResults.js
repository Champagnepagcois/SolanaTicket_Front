import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

export default function ContainerResults({
  nameEvent,
  date,
  place,
  hour,
  placeLink,
  country,
  direction,
  kindseat,
  numseats,
}) {
  const primary = red[500]; // #f44336
  const handlePagePlace = (linkplace)=>{
    alert(`${linkplace}`);
  }
  return (
    <>
      <Box sx={{ width: "50vw", height: 250 }}>
        <Card sx={{ display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={3}>
              <CardMedia
                sx={{ height: 200, width: 200 }}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhS88jdv21SnIWZrt0FKVVtjwdBsr9_5QXw&usqp=CAU"
                title="Drake concert"
              />
            </Grid>
            <Grid item xs={8} md={9}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {nameEvent}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {date} • {hour ? hour : "TBA"}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Button
                      size="small"
                      onClick={(e) => handlePagePlace(placeLink)}
                    >
                      {place+", "}
                    </Button>
                    {country}
                  </Typography>
                  <Grid container sx={{ display: "flex" }}>
                    <Grid sm={1}>
                      <Typography
                        variant="subtitle1"
                        color="black"
                        component="div"
                      >
                        Lugar:
                      </Typography>
                    </Grid>
                    <Grid sm={4} justifyContent="flex-start">
                      <Typography
                        sx={{
                          textAlign: "center",
                          float: "left",
                          marginLeft: 2,
                        }}
                        color="blue"
                        component="div"
                        variant="subtitle1"
                      >
                        {kindseat}
                      </Typography>
                    </Grid>
                    <Grid sm={4}>
                      <Typography
                        variant="subtitle1"
                        color={primary}
                        component="div"
                      >
                        Total de lugares {numseats}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid
                      item
                      xs={8}
                      md={12}
                      justifyContent="flex-end"
                      sx={{ display: "flex" }}
                    >
                      <Button size="small" variant="outline">
                        Ver mapa del lugar
                      </Button>
                      <Button size="medium" variant="contained">
                        Adquirir
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </>
  );
}
