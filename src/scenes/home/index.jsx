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
import { mealPlanInit } from "../../components/MealPlan/MakeMealPlanLite";

const Home = () => {
  const theme = useTheme(); //grabs the theme from MUI
  const colors = tokens(theme.palette.mode);
  const { user, handleLogin } = useContext(UserContext);

  const [allergens, setAllergens] = useState([]);
  const [mealPrepDays, setMealPrepDays] = useState([]);
  const [selectedDietChoices, setDietChoices] = useState([]);
  const [selectedReligiousRes, setReligiousRes] = useState([]);

  const handleAllergens = (allergen) => {
    const index = allergens.indexOf(allergen);

    if (!allergen === allergens.includes(allergen)) {
      setAllergens([...allergens, allergen]);
    } else if (allergens.includes(allergen)) {
      setAllergens([
        ...allergens.slice(0, index),
        ...allergens.slice(index + 1, allergens.length),
      ]);
    } else {
      console.log("Allergens broke");
    }
  };

  const handleMealPrepDays = (day) => {
    const index = mealPrepDays.indexOf(day);

    if (!day === mealPrepDays.includes(day)) {
      setMealPrepDays([...mealPrepDays, day]);
    } else if (mealPrepDays.includes(day)) {
      setMealPrepDays([
        ...mealPrepDays.slice(0, index),
        ...mealPrepDays.slice(index + 1, mealPrepDays.length),
      ]);
    } else {
      console.log("Prep days broke");
    }
  };

  const handleReligion = (religion) => {
    const index = selectedReligiousRes.indexOf(religion);

    if (!religion === selectedReligiousRes.includes(religion)) {
      setReligiousRes([...selectedReligiousRes, religion]);
    } else if (selectedReligiousRes.includes(religion)) {
      setReligiousRes([
        ...selectedReligiousRes.slice(0, index),
        ...selectedReligiousRes.slice(index + 1, selectedReligiousRes.length),
      ]);
    } else {
      console.log("Religion broke");
    }
  };

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
                  <Button
                    onClick={() => setDietChoices("Any")}
                    sx={{
                      backgroundColor:
                        selectedDietChoices === "Any"
                          ? colors.greenAccent[700]
                          : selectedDietChoices.length === 0
                          ? colors.greenAccent[600]
                          : colors.primary[600],
                      fontWeight:
                        selectedDietChoices === "Any" ? "bold" : "normal",
                    }}
                  >
                    Any
                  </Button>
                  <Button
                    onClick={() => setDietChoices("Gluten Free")}
                    sx={{
                      backgroundColor:
                        selectedDietChoices === "Gluten Free"
                          ? colors.greenAccent[700]
                          : selectedDietChoices.length === 0
                          ? colors.greenAccent[600]
                          : colors.primary[600],
                      fontWeight:
                        selectedDietChoices === "Gluten Free"
                          ? "bold"
                          : "normal",
                    }}
                  >
                    Gluten Free
                  </Button>
                  <Button
                    onClick={() => setDietChoices("Keto")}
                    sx={{
                      backgroundColor:
                        selectedDietChoices === "Keto"
                          ? colors.greenAccent[700]
                          : selectedDietChoices.length === 0
                          ? colors.greenAccent[600]
                          : colors.primary[600],
                      fontWeight:
                        selectedDietChoices === "Keto" ? "bold" : "normal",
                    }}
                  >
                    Keto
                  </Button>
                  <Button
                    onClick={() => setDietChoices("Vegetarian")}
                    sx={{
                      backgroundColor:
                        selectedDietChoices === "Vegetarian"
                          ? colors.greenAccent[700]
                          : selectedDietChoices.length === 0
                          ? colors.greenAccent[600]
                          : colors.primary[600],
                      fontWeight:
                        selectedDietChoices === "Vegan" ? "bold" : "normal",
                    }}
                  >
                    Vegetarian
                  </Button>
                  <Button
                    onClick={() => setDietChoices("Vegan")}
                    sx={{
                      backgroundColor:
                        selectedDietChoices === "Vegan"
                          ? colors.greenAccent[700]
                          : selectedDietChoices.length === 0
                          ? colors.greenAccent[600]
                          : colors.primary[600],
                      fontWeight:
                        selectedDietChoices === "Vegan" ? "bold" : "normal",
                    }}
                  >
                    Vegan
                  </Button>
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
                    <IconButton
                      onClick={() => {
                        handleAllergens("Gluten");
                      }}
                      sx={{
                        border: allergens.includes("Gluten") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Gluten") ? (
                        <GlutenIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[100]}
                        />
                      ) : (
                        <GlutenIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Gluten")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Gluten
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Dairy");
                      }}
                      sx={{
                        border: allergens.includes("Dairy") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Dairy") ? (
                        <MilkIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[200]}
                        />
                      ) : (
                        <MilkIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Dairy")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Dairy
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Soy");
                      }}
                      sx={{
                        border: allergens.includes("Soy") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Soy") ? (
                        <SoyaIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[300]}
                        />
                      ) : (
                        <SoyaIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Soy")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Soy
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Fish");
                      }}
                      sx={{
                        border: allergens.includes("Fish") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Fish") ? (
                        <FishIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[400]}
                        />
                      ) : (
                        <FishIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Fish")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Fish
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Shellfish");
                      }}
                      sx={{
                        border: allergens.includes("Shellfish") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Shellfish") ? (
                        <MolluscIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[500]}
                        />
                      ) : (
                        <MolluscIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Shellfish")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Shellfish
                    </Box>
                  </Box>

                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Peanuts");
                      }}
                      sx={{
                        border: allergens.includes("Peanuts") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      {allergens.includes("Peanuts") ? (
                        <PeanutIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[600]}
                        />
                      ) : (
                        <PeanutIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Peanuts")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Peanuts
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleAllergens("Tree Nuts");
                      }}
                      sx={{
                        border: allergens.includes("Tree Nuts") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                        borderStyle: "solid",
                      }}
                    >
                      {allergens.includes("Tree Nuts") ? (
                        <NutsIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.allergenColors[700]}
                        />
                      ) : (
                        <NutsIcon
                          height="24px"
                          width="24px"
                          outerColor={colors.grey[800]}
                        />
                      )}
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        allergens.includes("Tree Nuts")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Tree Nuts
                    </Box>
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
                    <IconButton
                      onClick={() => {
                        handleReligion("Halal");
                      }}
                      sx={{
                        border: selectedReligiousRes.includes("Halal") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      <MosqueIcon />
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        selectedReligiousRes.includes("Halal")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Halal
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleReligion("Kosher");
                      }}
                      sx={{
                        border: selectedReligiousRes.includes("Kosher") ? 2 : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      <SynagogueIcon />
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        selectedReligiousRes.includes("Kosher")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      Kosher
                    </Box>
                  </Box>
                  <Box sx={{ m: "0 5px" }}>
                    <IconButton
                      onClick={() => {
                        handleReligion("No Alcohol");
                      }}
                      sx={{
                        border: selectedReligiousRes.includes("No Alcohol")
                          ? 2
                          : 0,
                        borderColor: colors.redAccent[500],
                      }}
                    >
                      <NoDrinksIcon />
                    </IconButton>
                    <Box
                      display="block"
                      color={
                        selectedReligiousRes.includes("No Alcohol")
                          ? colors.redAccent[400]
                          : "white"
                      }
                    >
                      No Alcohol
                    </Box>
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
                  <Button
                    onClick={() => handleMealPrepDays("Sunday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Sunday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Sunday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Sun
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Monday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Monday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Monday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Mon
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Tuesday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Tuesday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Tuesday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Tue
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Wednesday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Wednesday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Wednesday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Wed
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Thursday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Thursday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Thursday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Thu
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Friday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Friday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Friday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Fri
                  </Button>
                  <Button
                    onClick={() => handleMealPrepDays("Saturday")}
                    sx={{
                      backgroundColor: mealPrepDays.includes("Saturday")
                        ? colors.greenAccent[700]
                        : mealPrepDays.length === 0
                        ? colors.greenAccent[600]
                        : colors.primary[600],
                      fontWeight: mealPrepDays.includes("Saturday")
                        ? "bold"
                        : "normal",
                    }}
                  >
                    Sat
                  </Button>
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
                  onClick={() => {
                    !user ? handleLogin() : mealPlanInit(user.uid);
                  }}
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
