import {
  Box,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
  Tooltip,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as React from "react";

import Settings from "@mui/icons-material/Settings";
import StarsIcon from "@mui/icons-material/Stars";
import Logout from "@mui/icons-material/Logout";

import { UserContext } from "../core/Providers/UserProvider";
import { tokens } from "../theme";

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user, handleLogout } = useContext(UserContext);
  const photoURL = user.photoURL;

  //These functions manage the menu's state.
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  //* CONTENT BELOW
  return (
    <Box>
      {/* Profile Menu, default state unopened. Should "Account settings tooltip be something else?" */}
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar src={photoURL} imgProps={{ referrerPolicy: "no-referrer" }} />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* TODO: Doesn't link anywhere. My Profile (top option), with profile picture. */}
        <MenuItem component={Link} to="/profile" onClick={handleClose}>
          <Box display="flex" alignItems="center" textAlign="right">
            <Avatar src={photoURL} sx={{ width: 30, height: 30 }} />
            <Box display="block">
              <Typography>My Profile </Typography>
              <Typography sx={{ color: colors.primary[200] }}>
                {user.displayName}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
        <Divider />

        {/* Subscribe Button, Linked to /subscriptions */}
        <MenuItem component={Link} to="/subscriptions" onClick={handleClose}>
          <ListItemIcon>
            <StarsIcon fontSize="small" />
          </ListItemIcon>
          Subscribe
        </MenuItem>

        {/* TODO: Doesn't link anywhere. Settings icon. */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>

        {/* Logout button, uses handleLogout() to set userContext to undefined. */}
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};
export default AccountMenu;
