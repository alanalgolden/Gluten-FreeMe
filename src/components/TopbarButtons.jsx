import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  useTheme,
  Box,
  Menu,
  MenuItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { tokens } from "../theme";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { Link } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { useState, createContext, useContext } from "react";
import { UserContext } from "../core/Providers/UserProvider";

export const LoginButton = () => {
  const { user, handleLogin } = useContext(UserContext);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  //const [user, setUser] = useState();
  /*   const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken; // The signed-in user info.
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorMessage + "ERROR MESSAGE");
      });
  }; */

  return (
    !user && (
      <Button
        onClick={() => handleLogin() + console.log("User Logged in!")}
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

export const LogoutButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user, handleLogout } = useContext(UserContext);

  return (
    user && (
      <Button
        onClick={() => handleLogout() + console.log("User Logged out!")}
        sx={{ mr: "10px", backgroundColor: colors.greenAccent[600] }}
      >
        Sign Out
      </Button>
    )
  );
};

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

export const MakeItEasyButton = () => {
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
