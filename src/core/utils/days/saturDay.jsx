import React, { useContext, useState, useEffect, useCallback } from "react";
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
import Item from "@mui/material/Unstable_Grid2";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MealContext } from "../../../core/Providers/MealProvider";
import { tokens } from "../../../theme";
import { useRecipeContext } from "../../Providers/RecipeProvider";

export const SaturdayRef = (expanded) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { meals } = useContext(MealContext);
  const thisMeal = meals.mealArray.Saturday;
  const { recipes, addRecipe, removeRecipe, clearRecipes } = useRecipeContext();
  const [cleared, setCleared] = useState(false);
  const [newRecipe, setNewRecipe] = useState(null);

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);

  useEffect(() => {
    const addNewRecipe = async () => {
      if (cleared && newRecipe) {
        await new Promise((resolve) => setTimeout(resolve, 0));
        addRecipe(newRecipe);
        setCleared(false);
        setNewRecipe(null);
      }
    };

    addNewRecipe();
  }, [recipes, cleared, newRecipe]);

  const handleButtonClick = useCallback(
    (mealType) => {
      if (!meals) {
        console.warn("Meals context is not initialized");
        return;
      } else if (recipes.length > 0) {
        clearRecipes();
        setCleared(true);
        setNewRecipe(mealType);
      } else {
        addRecipe(mealType);
      }
    },
    [recipes, clearRecipes, addRecipe, meals]
  );

  return (
    <>
      <AccordionDetails sx={{ backgroundColor: colors.primary[700] }}>
        <Item>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography textAlign="left">{thisMeal.breakfast.name}</Typography>
            <IconButton onClick={() => handleButtonClick(thisMeal.breakfast)}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Item>
        <Divider />
        <Item display="flex" justifyContent="space-between" alignItems="center">
          <Typography textAlign="left">{thisMeal.lunch.name}</Typography>
          <IconButton onClick={() => handleButtonClick(thisMeal.lunch)}>
            <ChevronRightIcon />
          </IconButton>
        </Item>
        <Divider />
        <Item display="flex" justifyContent="space-between" alignItems="center">
          <Typography textAlign="left">{thisMeal.dinner.name}</Typography>
          <IconButton onClick={() => handleButtonClick(thisMeal.dinner)}>
            <ChevronRightIcon />
          </IconButton>
        </Item>
      </AccordionDetails>
    </>
  );
};
