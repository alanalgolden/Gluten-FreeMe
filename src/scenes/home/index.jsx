import {
  Box,
  Typography,
  Button,
  useTheme,
  IconButton,
  ButtonGroup,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useContext } from "react";
import { UserContext } from "../../core/Providers/UserProvider";
import { tokens } from "../../theme";
import Item from "@mui/material/Unstable_Grid2";
import InfoIcon from "@mui/icons-material/Info";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import MosqueIcon from "@mui/icons-material/Mosque";
import SynagogueIcon from "@mui/icons-material/Synagogue";
import NoDrinksIcon from "@mui/icons-material/NoDrinks";
import {
  GlutenIcon,
  MilkIcon,
  FishIcon,
  PeanutIcon,
  MolluscIcon,
  NutsIcon,
  SoyaIcon,
} from "react-allergens";
import { useState } from "react";

const Home = () => {
  const theme = useTheme(); //grabs the theme from MUI
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);
  const [allergies, setAllergies] = useState({
    gluten: false,
    dairy: false,
    soy: false,
    fish: false,
    shellfish: false,
    peanuts: false,
    treenuts: false,
  });

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={4}>
          <Grid md={5}>
            <Box
              width="300px"
              sx={{
                backgroundColor: "transparent",
                mt: "50px",
                borderRadius: "10px",
              }}
            >
              <Item>
                <Typography variant="h2">Plan Your Meals</Typography>
                <Typography variant="h4">
                  With the Click of a Button.
                </Typography>
              </Item>
              <Item>
                <Typography variant="body">
                  Life gets busy, and dedicating time to stay on top of meal
                  planning is not an easy feat. Figuring out what to cook at the
                  end of each exhausting day is a pain. Since we need to eat,
                  many will order out which leads to a heavy food budget each
                  month.
                </Typography>
              </Item>
              <Item>
                <Typography
                  variant="body"
                  sx={{ fontWeight: 600, color: colors.greenAccent[500] }}
                >
                  It's never been more important to start saving.
                </Typography>
              </Item>
              <Item>
                <Typography>
                  Thanks to the incredible power of GPT-4, you'll never have to
                  brainstorm meals to cook again.
                </Typography>
              </Item>
              <Item display="flex" justifyContent="center">
                <Button
                  sx={{
                    backgroundColor: colors.greenAccent[700],
                    color: "white",
                    borderRadius: "20px",
                    p: "6px 25px 6px 25px",
                    textAlign: "center",
                  }}
                >
                  Learn More
                </Button>
              </Item>
            </Box>
          </Grid>
          <Grid md={7}>
            <Box
              width="450px"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "50px",
                borderRadius: "10px",
                boxShadow: `5px 5px 5px ${colors.primary[800]}`,
              }}
            >
              <Item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ m: "0px 0px 0px 10px" }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: colors.greenAccent[400], fontWeight: "600" }}
                  >
                    Try it out!
                  </Typography>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Box>

                <Box sx={{ m: "0px 10px 0px 10px" }}>
                  <Typography variant="h2" marginBottom="5px">
                    Your Diet
                  </Typography>
                  <Typography variant="body">
                    Everyone needs to eat, and we all eat differently. The
                    information you provide below will be used directly in the
                    creation of your unique plan.
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box
              width="450px"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "25px",
                borderRadius: "10px",
                boxShadow: `5px 5px 5px ${colors.primary[800]}`,
              }}
            >
              {/* DIETARY CHOICES BLOCK */}
              <Item textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ m: "0 0 10px 0", fontWeight: 600 }}
                >
                  Dietary Choices
                </Typography>

                <ButtonGroup variant="contained">
                  <Button>Any</Button>
                  <Button>Gluten Free</Button>
                  <Button>Keto</Button>
                  <Button>Vegetarian</Button>
                  <Button>Vegan</Button>
                </ButtonGroup>
              </Item>
              <Divider sx={{ mb: "10px" }} />
              {/* ALLERGIES ITEM BLOCK */}
              <Item textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ m: "0 0 10px 0", fontWeight: 600 }}
                >
                  Allergies
                </Typography>
                <ButtonGroup variant="string">
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <GlutenIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Gluten</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <MilkIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Dairy</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <SoyaIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Soy</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <FishIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Fish</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <MolluscIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Shellfish</Box>
                  </Box>

                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <PeanutIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Peanuts</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <NutsIcon height="24px" width="24px" />
                    </IconButton>
                    <Box display="block">Tree Nuts</Box>
                  </Box>
                </ButtonGroup>
              </Item>
              <Divider sx={{ mb: "10px" }} />

              {/* RELIGIOUS CHOICES BLOCK */}
              <Item textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ m: "0 0 10px 0", fontWeight: 600 }}
                >
                  Religious Restrictions
                </Typography>
                <ButtonGroup variant="string">
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <MosqueIcon />
                    </IconButton>
                    <Box display="block">Halal</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <SynagogueIcon />
                    </IconButton>
                    <Box display="block">Kosher</Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton>
                      <NoDrinksIcon />
                    </IconButton>
                    <Box display="block">No Alcohol</Box>
                  </Box>
                </ButtonGroup>
              </Item>
              <Divider sx={{ mb: "10px" }} />

              {/* MEAL PREP BLOCK */}
              <Item textAlign="center">
                <Typography
                  variant="h4"
                  sx={{ m: "0 0 10px 0", fontWeight: 600 }}
                >
                  Meal Prep Days
                </Typography>
                <ButtonGroup variant="contained">
                  <Button>Sun</Button>
                  <Button>Mon</Button>
                  <Button>Tue</Button>
                  <Button>Wed</Button>
                  <Button>Thu</Button>
                  <Button>Fri</Button>
                  <Button>Sat</Button>
                </ButtonGroup>
              </Item>
              <Divider sx={{ mb: "10px" }} />

              {/* PLAN MY MEALS BLOCK */}
              <Item textAlign="center">
                <Typography
                  variant="h6"
                  sx={{
                    mb: "10px",
                    color: colors.greenAccent[500],
                    fontWeight: 600,
                  }}
                >
                  Ready to get cooking?
                </Typography>
                <Button
                  sx={{
                    backgroundColor: colors.greenAccent[700],
                    color: "white",
                    fontSize: "18px",
                    borderRadius: "20px",
                    p: "6px 25px 6px 25px",
                    textAlign: "center",
                  }}
                >
                  PLAN MY MEALS
                </Button>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
