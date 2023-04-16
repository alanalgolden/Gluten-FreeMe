import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import BugReportIcon from "@mui/icons-material/BugReport";

import {
  LoginButton,
  TopbarDropdown,
  SignUpButton,
} from "../../components/TopbarButtons";
import { ColorModeContext, tokens } from "../../theme";
import { UserContext } from "../../core/Providers/UserProvider";
import AccountMenu from "../../components/AccountMenu";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { user } = useContext(UserContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: colors.primary[500],
      }}
    >
      {/* LOGO */}
      <Box>
        <Link to="/Home">
          <img
            src={
              theme.palette.mode === "dark"
                ? require(`../../assets/glutenfreemelogov1white.png`)
                : require(`../../assets/glutenfreemelogov1black.png`)
            }
            alt="Gluten Free Me Logo"
            height="38px"
          />
        </Link>
      </Box>

      {/* Topbar Dropdown */}
      <Box>
        <TopbarDropdown />
      </Box>

      {/* Search Bar - NO FUNCTIONALITY 3/31/23 */}
      <Box>
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="18px"
          width="400px"
        >
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="What ingredients are in your fridge?"
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      <Box display="flex">
        {/* ICON BUTTONS */}
        {/* Theme Change Button (sun/moon). Toggles colorMode from dark/light */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon sx={{ height: "22px", width: "22px" }} />
          ) : (
            <LightModeOutlinedIcon
              sx={{
                height: "22px",
                width: "22px",
                color: colors.primary[800],
              }}
            />
          )}
        </IconButton>

        {/* TODO: This does not do anything  */}
        <IconButton onClick={() => ""}>
          <PersonOutlinedIcon />
        </IconButton>

        {/* TODO: This currently just prints the user, can be used for testing. */}
        <IconButton onClick={() => console.log(user)}>
          <BugReportIcon />
        </IconButton>

        {/* USER AUTH */}
        {/* If there isn't a user, display Login + SignUp Button. If there is a user, display AccountMenu */}
        {!user && (
          <>
            <LoginButton />
            <SignUpButton />
          </>
        )}
        {user && <AccountMenu />}
      </Box>
    </Box>
  );
};

export default Topbar;
