import { Box, IconButton, Input, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
import { getDoc, collection, getDocs, doc } from "firebase/firestore";

import { getIngredients } from "../../core/utils/crud";
import FetchData from "../../core/utils/completions";
import Ingredients from "../../components/Ingredients";

const Aitest = () => {
  const idd = "mjf9t1WfXlfOfM3d6kAb";
  const [input, setInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [recipe, setRecipe] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const ingredientRef = collection(db, "Ingredients");

  const getIngredientsList = async () => {
    const data = await getIngredients(idd).then((ingredients) => {
      setIngredient(ingredients);
    });
  };

  async function recipeGen() {
    try {
      await getIngredientsList().then(console.log(ingredient));
      const recipe = await FetchData(
        "Generate Gluten Free Recipe with some of these ingredients: " +
          ingredient +
          "Then, tell me which of my ingredients you used, and what I need to"
      );
      setRecipe(recipe);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Box m="20px">
      <Grid container spacing={2}>
        <Grid sm={3}>
          <Box>
            <h1>Firebase Ingredients</h1>
            <Box>
              <Ingredients />
            </Box>
          </Box>
        </Grid>
        <Grid sm={4}>
          <h1>Recipe Generator</h1>
          <Box display="flex" alignItems="start">
            <IconButton onClick={
              recipeGen
              }>
              <PlayCircleOutlineIcon />
            </IconButton>
            <Box>
              <Typography sx={{ m: "5px" }}>{recipe}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Aitest;
