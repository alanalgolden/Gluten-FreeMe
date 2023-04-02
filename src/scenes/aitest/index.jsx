import { Box, Divider, IconButton, Input, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Grid from "@mui/material/Unstable_Grid2";
import { useState, useEffect, useContext } from "react";
import { db } from "../../firebase";
import { getDoc, collection, getDocs, doc } from "firebase/firestore";
import RefreshIcon from "@mui/icons-material/Refresh";

import { getIngredients } from "../../core/utils/crud";
import FetchData from "../../core/utils/completions";
import Spices from "../../components/Spices";
import { UserContext } from "../../core/Providers/UserProvider";
import Stock from "../../components/Stock";

const Aitest = () => {
  const [recipe, setRecipe] = useState("");
  const [spiceItems, setSpice] = useState([]);
  const [stockItems, setStock] = useState([]);
  const { user } = useContext(UserContext);
  const idd = user.uid;
  const spices = "spices";
  const stock = "stock";

  const getIngredientsList = async () => {
    const spiceData = await getIngredients(idd, spices).then((ingredients) => {
      setSpice(ingredients);
    });
    const stockData = await getIngredients(idd, stock).then((ingredients) => {
      setStock(ingredients);
      console.log(stockItems);
    });
  };

  async function recipeGen() {
    try {
      await getIngredientsList().then(console.log(spiceItems));
      const recipe = await FetchData(
        "Generate Gluten Free Recipe with some or all of the ingredients I have: " +
          stockItems +
          "I already have these spices: " +
          spiceItems
      );
      setRecipe(recipe);
    } catch (error) {
      console.error(error);
    }
  }

  function clearRecipe() {
    setRecipe("");
  }

  return (
    <Box m="20px">
      <Grid container spacing={2}>
        <Grid sm={6}>
          <Box textAlign="center">
            <h1>Your Cabinet</h1>
            <Divider sx={{ mb: "20px" }} />
            <Box display="flex" justifyContent="space-evenly">
              <Spices />
              <Stock />
            </Box>
          </Box>
        </Grid>
        <Grid sm={4}>
          <h1>Recipe Generator</h1>
          <Box display="flex" alignItems="start">
            <IconButton onClick={recipeGen}>
              <PlayCircleOutlineIcon />
            </IconButton>
            <IconButton onClick={clearRecipe}>
              <RefreshIcon />
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
