import {
  useTheme,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  IconButton,
  Button,
} from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { tokens } from "../../theme";
import { UserContext } from "../../core/Providers/UserProvider";
import Grid from "@mui/material/Unstable_Grid2";
import Item from "@mui/material/Unstable_Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { MealContext } from "../../core/Providers/MealProvider";
import { SundayRef } from "../../core/utils/days/sunDay";
import { useRecipeContext } from "../../core/Providers/RecipeProvider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { MondayRef } from "../../core/utils/days/monDay";
import { TuesdayRef } from "../../core/utils/days/tuesDay";
import { WednesdayRef } from "../../core/utils/days/wednesDay";
import { ThursdayRef } from "../../core/utils/days/thursDay";
import { FridayRef } from "../../core/utils/days/friDay";
import { SaturdayRef } from "../../core/utils/days/saturDay";
import {
  askForIngredients,
  makeIngredients,
} from "../../components/Ingredients/MakeIngredients";
import {
  checkForRecipe,
  createRecipeIngredients,
} from "../../components/Ingredients/IngredientsCrud";

const MealPlan = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { user } = useContext(UserContext);
  const { meals } = useContext(MealContext);
  const { recipes } = useRecipeContext();
  const [expanded, setExpanded] = useState(false);
  const handleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [mealAllergies, setMealAllergies] = useState();

  useEffect(() => {
    const allergiesListener = () => {
      if (meals) {
        setMealAllergies(
          meals.mealArray.Sunday.breakfast.preferences.allergies
        );
      }
    };

    allergiesListener();
  }, [meals]);

  let recipeName;
  let nutrition;

  if (recipes && recipes.length > 0) {
    const firstRecipe = recipes[0];
    recipeName = firstRecipe.name;
    nutrition = firstRecipe.nutrition;
  }

  const handleIngredients = async () => {
    const recipeIngredients = await makeIngredients(
      user.uid,
      recipeName,
      mealAllergies
    );
    /*     const apiIngredients = await askForIngredients(
      recipeName,
      "",
      mealAllergies,
      "",
      "",
      4
    );
    const recipeIngredients = await createRecipeIngredients(
      user.uid,
      apiIngredients
    ); */
  };

  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert("Complete Cache Cleared");
  };

  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={2}>
          <Grid md={3}>
            <Box
              width="250px"
              sx={{
                backgroundColor: "transparent",
                mt: "50px",
              }}
            >
              <Box
                height="50px"
                display="flex"
                justifyContent="center"
                sx={{
                  backgroundColor: colors.primary[500],
                  borderRadius: "10px 10px 0 0",
                }}
              >
                <Item display="flex" alignItems="center" sx={{ mt: "10px" }}>
                  <Typography variant="h4">Weekly Navigator</Typography>
                  <Box sx={{ ml: "25px" }}>
                    <IconButton>
                      <CalendarMonthIcon />
                    </IconButton>
                    <button onClick={() => clearCacheData()}>
                      Clear Cache Data
                    </button>
                  </Box>
                </Item>
              </Box>
              <Box
                sx={{
                  backgroundColor: colors.primary[500],
                  pb: "20px",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Item>
                  {/* SUNDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel1"}
                    onChange={handleAccordion("panel1")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      onClick={""}
                      id="panel1bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Sunday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/9
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <SundayRef />}
                  </Accordion>

                  {/* MONDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel2"}
                    onChange={handleAccordion("panel2")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2bh-content"
                      onClick={""}
                      id="panel2bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Monday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/10
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <MondayRef />}
                  </Accordion>

                  {/* TUESDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel3"}
                    onChange={handleAccordion("panel3")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel3bh-content"
                      onClick={""}
                      id="panel3bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Tuesday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/11
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <TuesdayRef />}
                  </Accordion>

                  {/* WEDNESDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel4"}
                    onChange={handleAccordion("panel4")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel4bh-content"
                      onClick={""}
                      id="panel4bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Wednesday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/12
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <WednesdayRef />}
                  </Accordion>

                  {/* THURSDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel5"}
                    onChange={handleAccordion("panel5")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel5bh-content"
                      onClick={""}
                      id="panel5bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Thursday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/13
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <ThursdayRef />}
                  </Accordion>

                  {/* FRIDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel6"}
                    onChange={handleAccordion("panel6")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel6bh-content"
                      onClick={""}
                      id="panel6bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Friday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/14
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <FridayRef />}
                  </Accordion>

                  {/* SATURDAY */}
                  <Accordion
                    defaultExpanded={true}
                    expanded={expanded === "panel7"}
                    onChange={handleAccordion("panel7")}
                    sx={{ backgroundColor: "transparent" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel7bh-content"
                      onClick={""}
                      id="panel7bh-header"
                      sx={{
                        backgroundColor: colors.primary[600],
                      }}
                    >
                      <Typography sx={{ width: "66%", flexShrink: 0 }}>
                        Saturday
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.greenAccent[400],
                          ml: "20px",
                        }}
                      >
                        4/15
                      </Typography>
                    </AccordionSummary>
                    {!meals ? "Loading..." : <SaturdayRef />}
                  </Accordion>
                </Item>
              </Box>
              <Box
                width="250px"
                sx={{
                  backgroundColor: colors.primary[500],
                  mt: "25px",
                  borderRadius: "10px 10px 10px 10px",
                }}
              >
                <Item>
                  <Typography
                    display="flex"
                    justifyContent="center"
                    variant="h5"
                    sx={{ fontWeight: 600 }}
                  >
                    Allergens
                  </Typography>
                </Item>
                <Item
                  sx={{
                    backgroundColor: colors.primary[600],
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box sx={{ width: "75%", ml: "10px" }}>
                      <Typography>{`${mealAllergies}`}</Typography>
                    </Box>
                  </Box>
                </Item>
              </Box>
              <Box
                width="250px"
                sx={{
                  backgroundColor: colors.primary[500],
                  mt: "25px",
                  borderRadius: "10px 10px 10px 10px",
                }}
              >
                <Item>
                  <Typography
                    display="flex"
                    justifyContent="center"
                    variant="h5"
                    sx={{ fontWeight: 600 }}
                  >
                    Reminders
                  </Typography>
                </Item>
                <Item
                  sx={{
                    backgroundColor: colors.primary[600],
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box sx={{ width: "75%", ml: "10px" }}>
                      <Typography
                        variant="h6"
                        sx={{ color: colors.greenAccent[400], fontWeight: 600 }}
                      >
                        Wednesday, 4/12
                      </Typography>
                      <Typography>
                        • Take 2LBs of Ground Beef out of the Freezer in the
                        morning.
                      </Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <EventAvailableOutlinedIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </Item>
              </Box>
            </Box>
          </Grid>
          <Grid md={9}>
            <Box
              width="800px"
              height="100px"
              sx={{
                backgroundColor: colors.primary[500],
                mt: "50px",
                borderRadius: "10px 10px 0 0",
              }}
            >
              <Item>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ mt: "20px" }}
                >
                  <Box display="flex">
                    <Typography
                      sx={{
                        ml: "10px",
                        whiteSpace: "nowrap",
                        fontSize: "28px",
                      }}
                    >
                      {!recipeName ? "< Select a meal" : recipeName}
                    </Typography>
                  </Box>
                  <Box sx={{ mr: "10px" }}>
                    <IconButton>
                      <AddIcon sx={{ fontSize: "28px" }} />
                    </IconButton>
                    <IconButton>
                      <RefreshIcon sx={{ fontSize: "28px" }} />
                    </IconButton>

                    <IconButton>
                      <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
                    </IconButton>
                  </Box>
                </Box>
              </Item>
            </Box>
            <Box
              width="800px"
              height="auto"
              sx={{
                backgroundColor: colors.primary[600],
                borderRadius: "0 0 10px 10px",
              }}
            >
              <Item>
                <Grid container columns={{ md: 12 }} spacing={2}>
                  <Grid md={9}>
                    <Box display="flex" justifyContent="space-between">
                      <Typography variant="h3">Preparation</Typography>
                      <Box>
                        <IconButton
                          onClick={() => {
                            handleIngredients();
                          }}
                        >
                          <PlayArrowIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            checkForRecipe(user.uid);
                          }}
                        >
                          <SearchIcon />
                        </IconButton>
                      </Box>
                    </Box>

                    <Divider sx={{ mt: "10px" }} />
                    <Box sx={{ m: "20px 0 20px 0" }}>
                      <Typography fontSize="18px">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </Typography>
                    </Box>
                    <Typography variant="h3">Recipe Instructions</Typography>
                    <Divider sx={{ mt: "10px" }} />
                    <Box sx={{ m: "20px 0 20px 0" }}>
                      <Typography fontSize="18px">
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid md={3}>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                        borderRadius: "10px 10px 0 0",
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Est. Nutrition
                        </Typography>
                      </Item>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[800],
                        mb: "20px",
                        borderRadius: "0 0 20px 20px",
                      }}
                    >
                      <Item>
                        <Box display="flex" flexDirection="column">
                          <Typography sx={{ ml: "2px" }}>
                            Calories: {!nutrition ? "" : nutrition.calories}
                            <br />
                          </Typography>
                          <Typography sx={{ ml: "2px" }}>
                            Carbs: {!nutrition ? "" : nutrition.carbohydrate}
                            <br />
                          </Typography>
                          <Typography sx={{ ml: "2px" }}>
                            Fat: {!nutrition ? "" : nutrition.fat}
                            <br />
                          </Typography>
                          <Typography sx={{ ml: "2px" }}>
                            Protein: {!nutrition ? "" : nutrition.protein}
                            <br />
                          </Typography>
                        </Box>
                      </Item>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                        borderRadius: "10px 10px 0 0",
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Ingredients
                        </Typography>
                      </Item>
                    </Box>
                    <Box sx={{ backgroundColor: colors.primary[800] }}>
                      <Item>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Carrots
                            <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Potatoes <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Chicken <br />
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <IconButton>
                            <CheckBoxOutlineBlankOutlinedIcon
                              sx={{ fontSize: "12px !important" }}
                            />
                          </IconButton>
                          <Typography sx={{ ml: "2px" }}>
                            Celery <br />
                          </Typography>
                        </Box>
                      </Item>
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: colors.primary[700],
                        borderRadius: "0 0 20px 20px",
                      }}
                    >
                      <Item textAlign="center">
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          Spices
                        </Typography>
                      </Item>
                      <Box
                        sx={{
                          backgroundColor: colors.primary[800],
                          borderRadius: "0 0 20px 20px",
                        }}
                      >
                        <Item>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Salt <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Pepper <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Onion Powder <br />
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <IconButton>
                              <CheckBoxOutlineBlankOutlinedIcon
                                sx={{ fontSize: "12px !important" }}
                              />
                            </IconButton>
                            <Typography sx={{ ml: "2px" }}>
                              Garlic Powder <br />
                            </Typography>
                          </Box>
                        </Item>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      sx={{ mt: "25px" }}
                    >
                      <Item>
                        <Button
                          onClick={() =>
                            console.log(meals.Monday.breakfast.name)
                          }
                          sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: "white",
                            borderRadius: "20px",
                            p: "6px 25px 6px 25px",
                            textAlign: "center",

                            fontWeight: 600,
                          }}
                        >
                          Add Side Dish +
                        </Button>
                      </Item>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      sx={{ mt: "10px" }}
                    >
                      <Item>
                        <Button
                          onClick={() => console.log(meals)}
                          sx={{
                            backgroundColor: colors.greenAccent[700],
                            color: "white",
                            borderRadius: "20px",
                            p: "6px 25px 6px 25px",
                            textAlign: "center",

                            fontWeight: 600,
                          }}
                        >
                          Video Guide
                        </Button>
                      </Item>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Box>
            <Box
              sx={{
                backgroundColor: colors.primary[500],
                mt: "25px",
                borderRadius: "10px",
              }}
            >
              <Item>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: colors.primary[500],
                    ml: "10px",
                    mt: "10px",
                  }}
                >
                  <Typography variant="h3">Grocery List</Typography>
                  <Box display="flex" alignItems="center">
                    <Button
                      onClick={() => console.log(mealAllergies)}
                      sx={{
                        backgroundColor: colors.greenAccent[700],
                        color: "white",
                        borderRadius: "20px",
                        p: "6px 25px 6px 25px",
                        textAlign: "center",
                        mr: "10px",
                        fontWeight: 600,
                      }}
                    >
                      Order on Amazon Fresh
                    </Button>
                    <ShoppingBasketIcon sx={{ mr: "10px", fontSize: "28px" }} />
                  </Box>
                </Box>
                <Divider sx={{ mt: "10px", mb: "10px" }} />
                <Box
                  sx={{
                    backgroundColor: colors.primary[600],
                    mt: "20px",
                    mb: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container columns={{ md: 12 }} spacing={2}>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid md={4}>
                      <Box sx={{ ml: "10px" }}>
                        <Typography>
                          • Ingredient <br />
                          • Ingredient <br />
                          • Ingredient <br />
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MealPlan;
