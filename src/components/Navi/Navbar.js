import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import logo from "../../images/logo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LoopIcon from "@mui/icons-material/Loop";
import { SetCounty } from "./../../context/actions";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "25ch",
}));

const refreshPage = () => {
  window.location.reload();
};

export default function SearchAppBar() {
  const { counties } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src={logo} sx={{ height: "75%" }} alt="Ispark Logo" />
          </Typography>
          <Search>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={counties}
              getOptionLabel={(option) => option.countyName}
              onChange={(e) => dispatch(SetCounty(e.target.textContent))}
              renderInput={(params) => (
                <TextField {...params} label="İlçe Ara" />
              )}
            />
          </Search>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 2 }}
          >
            <LoopIcon onClick={refreshPage} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
