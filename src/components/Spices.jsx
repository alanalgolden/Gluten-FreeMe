import { Box, Typography, IconButton, TextField, Divider } from "@mui/material";
import { useState, useEffect, useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import { UserContext } from "../core/Providers/UserProvider";
import {
  getIngredients,
  listIngredientsServer,
  deleteArrayFromDoc,
  updateIngredientArray,
} from "../core/utils/crud";

// * Spices is currently only used within the Recipe Builder, and tracks / adds to "Spices".
export const Spices = () => {
  const { user } = useContext(UserContext);
  const idd = user.uid;
  const ingredientType = "spices";
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const [dataStatus, setDataStatus] = useState();

  // This useEffect is called twice, once when the page loads and then any time DataStatus is updated.
  // It uses getIngredientsList() from core crud to check and return if there are any user ingredients.
  useEffect(() => {
    const getIngredientsList = async () => {
      const data = await getIngredients(idd, ingredientType).then(
        (ingredient) => {
          setIngredient(ingredient);
          console.log(ingredient);
        }
      );
    };

    getIngredientsList();
  }, [, dataStatus]);

  //* CONTENT BELOW
  return ingredients === undefined ? (
    /* If ingredients is undefined, then log it. */
    console.log(ingredients)
  ) : (
    <Box>
      {/* Spices Text */}
      <Typography variant="h4" sx={{ mb: "10px" }}>
        Spices
      </Typography>
      <Divider sx={{ mb: "10px" }} />

      {/* Enter Ingredients Box, includes + button and textbox */}
      <Box display="flex" alignContent="center">
        <IconButton
          type="submit"
          onClick={() => {
            updateIngredientArray(idd, ingredientInput, ingredientType);
            setDataStatus(`Added Doc ${ingredientInput}`);
            setIngredientInput("");
          }}
        >
          <AddIcon />
        </IconButton>
        <TextField
          id="standard-basic"
          value={ingredientInput}
          label="Enter Ingredients"
          placeholder="Enter ingredient name.."
          onChange={(event) => setIngredientInput(event.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              updateIngredientArray(idd, ingredientInput, ingredientType);
              setDataStatus(`Added Doc ${ingredientInput}`);
              setIngredientInput("");
              ev.preventDefault();
            }
          }}
        />
      </Box>

      {/* TODO: Edit button doesn't do anything. Maps the ingredients list, each with a delete button and edit button. */}
      <Box m="10px 0 0 25px">
        {ingredients.map((ingredients) => {
          return (
            <Box display="flex" alignContent="center" alignItems="center">
              <IconButton
                onClick={() =>
                  deleteArrayFromDoc(idd, ingredients, ingredientType) +
                  setDataStatus(`Deleted Doc ${ingredients}`) +
                  console.log("Deleted Doc")
                }
              >
                <ClearIcon />
              </IconButton>
              <IconButton
                onClick={() => listIngredientsServer("mjf9t1WfXlfOfM3d6kAb")}
              >
                <EditIcon />
              </IconButton>
              <Typography></Typography>
              <Typography sx={{ ml: "10px" }}>{ingredients}</Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Spices;
