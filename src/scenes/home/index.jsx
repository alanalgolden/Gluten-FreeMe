import { Box, Typography, useTheme, IconButton, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import { ColorModeContext, tokens } from "../../theme";
import { Link, useNavigate } from "react-router-dom";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useContext } from "react";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <html>
      <head>
        <title>Gluten Free Me!</title>
      </head>
      <body>
        <Box sx={{ color: colors.white[600] }}>
          {/* Content */}
          <Grid container spacing={2} sx={{ justifyContent: "center" }}>
            <Grid md={5}>
              <Box display="block" width="360px" sx={{ mt: "40px" }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Roboto Slab !important",
                    color: colors.white[100],
                  }}
                >
                  Meals will never be the same again.
                </Typography>
              </Box>
              <Box display="block" width="360px">
                <Typography
                  sx={{
                    fontFamily: "Mulish !important",
                    color: colors.white[100],
                    fontSize: "22px",
                  }}
                >
                  Meal planning with AI makes it possible to accomodate any and
                  all food preferences.
                </Typography>
              </Box>
              <Box Box display="block" width="360px">
                <Button
                  onClick={() => navigate("/Preferences")}
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
          </Grid>
        </Box>
      </body>
    </html>
  );
};

export default Home;
