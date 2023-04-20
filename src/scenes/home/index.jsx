import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import { ColorModeContext, tokens } from "../../theme";
import { Link } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext } from "react";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <html>
      <head>
        <title>Gluten Free Me!</title>
      </head>
      <body>
        <Box sx={{ backgroundColor: colors.white[600] }}>
          {/* Content */}
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid md={5}>
              <Box
                p={2}
                sx={{
                  backgroundColor: colors.white[600],
                  margin: "0 40px",
                }}
              >
                {/* Topbar */}
                <Box display="flex" justifyContent="space-between">
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

                  <Box display="flex">
                    {/* ICON BUTTONS */}
                    {/* Theme Change Button (sun/moon). Toggles colorMode from dark/light */}
                    <IconButton onClick={colorMode.toggleColorMode}>
                      {theme.palette.mode === "dark" ? (
                        <DarkModeOutlinedIcon
                          sx={{ height: "22px", width: "22px" }}
                        />
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
                  </Box>
                </Box>
              </Box>

              <Box display="block" width="360px" sx={{ mt: "40px" }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Roboto Slab !important",
                    color: colors.blacks[100],
                  }}
                >
                  Meals will never be the same again.
                </Typography>
              </Box>
              <Box display="block" width="360px">
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    color: colors.blacks[100],
                    fontSize: "22px",
                  }}
                >
                  Meal planning with AI makes it possible to accomodate any and
                  all food preferences.
                </Typography>
              </Box>
              <Box Box display="block" width="360px">
                <Button
                  sx={{
                    backgroundColor: "#e36147",
                    p: "10px 20px",
                    borderRadius: "10px",
                    boxShadow: `2px 2px 2px ${colors.blacks[500]}`,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "Roboto Slab !important",
                      fontWeight: 600,
                      color: colors.white[100],
                      textTransform: "none",
                    }}
                  >
                    Try it for free
                  </Typography>
                </Button>
              </Box>
            </Grid>
            <Grid md={4}>
              <Box
                display="flex"
                justifyContent="center"
                sx={{
                  backgroundColor: colors.primary[600],
                  height: "100vh",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: "Roboto Slab !important",
                    fontWeight: 400,
                    color: colors.white[100],
                  }}
                >
                  Great Lake Pure
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </body>
    </html>
  );
};

export default Home;
