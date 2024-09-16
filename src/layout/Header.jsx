import {
  DataArray,
  Home as HomeIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
  MultipleStop as MultipleStopIcon,
  ScreenSearchDesktop as ScreenSearchDesktopIcon,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { orange } from "../constants/color";
import { handleLogout } from "../redux/reducers/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(handleLogout());
    window.location.reload();
  };
  return (
    <>
      <Box sx={{ flexFlow: "1" }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: orange,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Inter-task
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>
            <Box sx={{ flexGrow: "1" }} />
            <Box>
              <IconsBtn title="Home" icon={<HomeIcon />} link={"/"} />
              <IconsBtn
                title="coustom Hook"
                icon={<ScreenSearchDesktopIcon />}
                link={"/hook"}
              />
              <IconsBtn
                title="MultiStepFrom"
                icon={<MultipleStopIcon />}
                link={"/multistapfrom"}
              />
              <IconsBtn
                title="cached  Data"
                icon={<DataArray />}
                link={"/cacheddata"}
              />
              <IconsBtn title="Logout" icon={<LogoutIcon />} onClick={logout} />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

const IconsBtn = ({ title, icon, onClick, link }) => {
  return (
    <Link to={link}>
      <Tooltip title={title}>
        <IconButton color="inherit" size="large" onClick={onClick}>
          {icon}
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default Header;
