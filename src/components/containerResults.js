import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Button } from "@mui/material";
import { red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin, loadLogout } from "../redux/actions/loginAction";
import { render } from "react-dom";
import ResponsiveDialog from "./ResponsiveDialog";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ContainerResults({
  nameEvent,
  linkImage,
  date,
  place,
  hour,
  placeLink,
  country,
  direction,
  kindseat,
  numseats,
}) {
  const user = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const primary = red[500]; // #f44336
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlePagePlace = (linkplace) => {
    alert(`${linkplace}`);
  };
  const handleShopping = () => {
    if (!user.login) {
      dispatch(loadLogin());
    }
    if (user.login) {
      alert(
        `Compra realizada, toda la informacion de la compra se envio a tu correo ${user.data.user.email}`
      );
      setOpen(false);
    }
  };
  return (
    <>
      <Box sx={{ width: "calc(50vw-5px)", height: 250 }}>
        <Card sx={{ display: "flex" }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={3}>
              <CardMedia
                sx={{ height: 200, width: 200 }}
                image={linkImage}
                title={nameEvent}
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
                      {place + ", "}
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
                      {/*<Typography
                        variant="subtitle1"
                        color={primary}
                        component="div"
                      >
                        Total de lugares {numseats}
                      </Typography>*/}
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
                      {/*<Button size="small" variant="outline">
                        Ver mapa del lugar
                      </Button>*/}
                      <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                      >
                        <DialogTitle id="responsive-dialog-title">
                          {"Use Google's location service?"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText>
                            Let Google help apps determine location. This means
                            sending anonymous location data to Google, even when
                            no apps are running.
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button autoFocus onClick={handleClose}>
                            Disagree
                          </Button>
                          <Button onClick={handleShopping} autoFocus>
                            Agree
                          </Button>
                        </DialogActions>
                      </Dialog>
                      <Button
                        size="medium"
                        variant="contained"
                        onClick={() => handleShopping()}
                      >
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
