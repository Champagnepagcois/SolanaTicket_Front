import React from "react";
import { Box, height, textAlign } from "@mui/system";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Person } from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={6} md={6}>
          <Item sx={{ display: "flex" }}>
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <TextField
              label="Busca por artista, evento,equipo o destino"
              id="outlined-size-small"
              defaultValue=""
              fullWidth
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={6}>
          <Grid container justifyContent="flex-end">
            <Grid item xs={4} md={6}></Grid>
            <Grid item xs={4} md={6}>
              <Item sx={{ display: "flex", height: "100%",border:0 }}>
                <Stack direction="row" spacing={4}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                      Mis evetos
                    </Link>
                    <Link
                      underline="hover"
                      color="inherit"
                      href="/material-ui/getting-started/installation/"
                    >
                      Core
                    </Link>
                    <Link
                      underline="hover"
                      color="text.primary"
                      href="/material-ui/react-breadcrumbs/"
                      aria-current="page"
                    >
                      Breadcrumbs
                    </Link>
                  </Breadcrumbs>
                  <Avatar
                    alt="Remy Sharp"
                    sx={{ bgcolor: deepPurple[500], width: 56, height: 56 }}
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
  );
}
