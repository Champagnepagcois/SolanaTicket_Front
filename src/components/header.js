import React, { useState } from "react";
import { Box, height, textAlign } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Person } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadEventsSearch } from "../redux/actions/PEventsActions";
import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js";
import { loadLogin, loadLogout } from "../redux/actions/loginAction";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Header(props) {
  const user = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  let [searchInput, setSearchInput] = useState("");
  const trigger = useScrollTrigger();
  const login = async (e) => {
    alert("Para cerrar sesion da clic en donde dice tu usuario");
    dispatch(loadLogin());
  };
  const logout = () => {
    alert("Sesion cerrada");
    dispatch(loadLogout());
  };
  const handleHomeRedirect = (e) => {
    e.preventDefault();
    navigate("../home", { replace: true });
  };
  const handleViewerSearch = (e) => {
    setSearchInput(e.target.value);
    if (searchInput.length == 1) {
      navigate("../home", { replace: true });
    }
  };
  const handleSubmitSearch = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchInput.length != 0) {
      dispatch(loadEventsSearch(searchInput));
      navigate(`../search?${searchInput}`, { replace: true });
    }
  };
  return (
    <AppBar className={trigger}>
      <Toolbar sx={{ backgroundColor: "white", padding: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            height: 60,
            maxHeight: 60,
            display: "flex",
            paddingTop: 0.5,
            paddingBottom: 0.5,
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={1}>
            <Grid
              item
              xs={4}
              md={2}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                variant="text"
                justifyContent="center"
                alignItems="center"
                onClick={handleHomeRedirect}
              >
                SolanaTicket
              </Button>
            </Grid>
            <Grid item xs={6} md={5}>
              <Grid sx={{ display: "flex", boxShadow: 0 }}>
                <TextField
                  label="Buscar artista"
                  id="outlined-size-small"
                  defaultValue=""
                  fullWidth
                  margin="none"
                  value={searchInput}
                  onKeyPress={handleSearch}
                  onChange={(event) => handleViewerSearch(event)}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                  onClick={handleSearch}
                >
                  <SearchIcon onClick={handleSearch} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item xs={6} md={5} sx={{ padding: 0 }}>
              <Grid container justifyContent="flex-end" sx={{ padding: 0 }}>
                <Grid item xs={12} md={7} sx={{ padding: 0 }}>
                  <Item
                    sx={{
                      display: "flex",
                      height: "100%",
                      border: 0,
                      boxShadow: 0,
                      padding: 0,
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={4}
                      justifyContent="center"
                      alignItems="center"
                      sx={{ boxShadow: 0, padding: 0 }}
                    >
                      <Breadcrumbs aria-label="breadcrumb" sx={{ padding: 0 }}>
                        {/*<Link underline="hover" color="inherit" href="/">
                          Mis evetos
                        </Link>
                        <Link
                          underline="hover"
                          color="inherit"
                          href="/material-ui/getting-started/installation/"
                        >
                          Core
                  </Link>*/}
                        <Button
                          onClick={
                            user.login ? () => logout() : (e) => login(e)
                          }
                        >
                          {user.login ? user.data.user.username : "Iniciar sesion"}
                        </Button>
                        {/*<Link
                          underline="hover"
                          color="text.primary"
                          aria-current="page"
                          onClick={(e) => login(e)}
                        >
                          {user.login ? user.data.username : "Iniciar sesion"}
                </Link>*/}
                      </Breadcrumbs>
                      <Avatar
                        alt="Remy Sharp"
                        sx={{
                          bgcolor: deepPurple[500],
                          width: 56,
                          height: 56,
                        }}
                      >
                        <Person />
                      </Avatar>
                    </Stack>
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
