import {
  Button,
  useTheme,
  Box,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import { tokens } from "../theme";
import { UserContext } from "../core/Providers/UserProvider";

//If no user exists, then show the "Login" Button. Use the handleLogin() function to set the UserContext.
export const LoginButton = () => {
  const { user, handleLogin } = useContext(UserContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    !user && (
      <Button
        onClick={() => handleLogin()}
        sx={{
          mr: "10px",
          backgroundColor: "none",
          color: colors.grey[100],
          height: "35px",
        }}
      >
        Sign In
      </Button>
    )
  );
};

//If user exists & is logged in, show the Logout button. Use the handleLogout function to set the UserContext to undefined.
export const LogoutButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user, handleLogout } = useContext(UserContext);

  return (
    user && (
      <Button
        onClick={() => handleLogout()}
        sx={{ mr: "10px", backgroundColor: colors.greenAccent[600] }}
      >
        Sign Out
      </Button>
    )
  );
};

//TODO : This is currently uncompleted. The SignUp button should work slightly differently than the login, and take user through tutorial.
export const SignUpButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Button
      onClick={""}
      sx={{
        mr: "10px",
        backgroundColor: colors.greenAccent[600],
        color: colors.grey[100],
        fontWeight: 600,
        height: "35px",
      }}
    >
      Get Started
    </Button>
  );
};

//The Topbar Dropdown work as access the different menus. Currently placeholder links/pages, needs refinement.
export const TopbarDropdown = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          mr: "10px",
          color: colors.grey[100],
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        Let's get cooking!
        <KeyboardArrowDownIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={Link} to="/mealplan" onClick={handleClose}>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText>Meal Planner</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LocalGroceryStoreIcon />
          </ListItemIcon>
          <ListItemText>Grocery List</ListItemText>
        </MenuItem>
        <MenuItem component={Link} to="/aitest" onClick={handleClose}>
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText>Recipe Builder</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};
