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
import { signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";



const handleLogin = async () => {
  
signInWithPopup(auth, provider)

  .then((result) => {
    
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    console.log(errorMessage + "ERROR MESSAGE")
  });
}

export const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    !isAuthenticated && (
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

export const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    isAuthenticated && (
      <Button
        onClick={() => logout()}
        sx={{ mr: "10px", backgroundColor: colors.greenAccent[600] }}
      >
        Sign Out
      </Button>
    )
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
        Make Eating Easy
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
        <MenuItem component={Link} to="/aitest" onClick={handleClose}>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RestaurantIcon />
          </ListItemIcon>
          <ListItemText>Recipe Builder</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export const SignUpButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    !isAuthenticated && (
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
    )
  );
};
