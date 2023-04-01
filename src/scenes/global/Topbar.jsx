import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";
import {
  LoginButton,
  LogoutButton,
  MakeItEasyButton,
  SignUpButton,
} from "../../components/TopbarButtons";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import GoogleLoginButton from "../../components/GoogleLogin";
import userDef from "../../core/utils/user";



const Topbar = () => {
  const theme = useTheme(); //grabs the theme from MUI
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { isLoading, error } = useAuth0();
  const user = userDef();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={2}
      sx={{
        backgroundColor: colors.primary[500],
      }}
    >
      <Box>
        <Link to="/Dashboard">
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
      <Box>
        <MakeItEasyButton />
      </Box>

      <Box>
        {/* Search Bar - NO FUNCTIONALITY 3/31/23 */}
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
      <Box>
        {/* ICONS */}
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
        <IconButton onClick={() => userDef()}>
          <PersonOutlinedIcon/>
        </IconButton>

        {/* USER AUTH */}
        {error && <p>Authenitcation Error</p>}
        {!error && isLoading && <p>Loading...</p>}
        {!user && (
            <>
              <LoginButton/>
            </>
        ) }

        {!error && !isLoading && (
          <>
            <LoginButton />
            <LogoutButton />  
            <SignUpButton />
          </>
        )}

        {/*         <IconButton component={Link} to="/Profile">
          <PersonOutlinedIcon />
        </IconButton> */}
      </Box>
    </Box>
  );
};

export default Topbar;
