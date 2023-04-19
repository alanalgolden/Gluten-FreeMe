import { Box, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import Item from "@mui/material/Unstable_Grid2";

import loginBg from "../../assets/loginBackground.png";
import logo from "../../assets/glutenfreemelogov1white.png";
import { Image } from "@mui/icons-material";
import PasswordlessSignIn from "../../components/PasswordlessSignOn";

const LoginPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  document.body.style.overflow = "hidden";
  return (
    <Box
      sx={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        color: "#f5f5f5",
        overflow: "hidden",
        zIndex: "-1",
      }}
    >
      <Box display="flex" justifyContent="center">
        <Grid container spacing={4}>
          <Grid md="6">
            <Box
              height="50vh"
              width="80vh"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "15vh",
                ml: "10vw",
                mr: "45vw",
                borderRadius: "10px",
                boxShadow: `5px 5px 5px ${colors.primary[800]}`,
              }}
            >
              <Item>
                <Box
                  component="img"
                  sx={{ width: "20vh" }}
                  alt="Gluten Free Me Logo."
                  src={`${logo}`}
                />
                <Box>
                  <PasswordlessSignIn />
                </Box>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
