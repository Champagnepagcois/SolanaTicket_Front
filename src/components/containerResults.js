import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";

export default function ContainerResults({ name, date }) {
  const primary = red[500]; // #f44336
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
                    Drake & Billie Eilish & Blink 182 - Lollapalooza Chile 2023
                    - 3 Días
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    17 mar 2023 • TBA
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <Button size="small">Parque O'Higgins</Button>, Santiago de
                    Chile,
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
                        sx={{ textAlign: "start", alignContent:"center"}}
                        color="blue"
                        component="div"
                        variant="h6"
                      >
                        A23{"  "}
                      </Typography>
                    </Grid>
                    <Grid sm={4}>
                      <Typography
                        variant="subtitle1"
                        color={primary}
                        component="div"
                      >
                        Total de lugares 50
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={8} md={6} justifyContent="flex-end">
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
