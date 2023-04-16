import { Box, Typography, IconButton, TextField, Divider } from "@mui/material";
import { useState, useEffect, useContext } from "react";

import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import {
  getIngredients,
  listIngredientsServer,
  deleteArrayFromDoc,
  updateIngredientArray,
} from "../core/utils/crud";
import { UserContext } from "../core/Providers/UserProvider";

// * Stock is currently only used within the Recipe Builder, and tracks / adds to "Stock".
export const Stock = () => {
  const { user } = useContext(UserContext);
  const idd = user.uid;
  const ingredientType = "stock";
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
      {/* Stock Text */}
      <Typography variant="h4" sx={{ mb: "10px" }}>
        Stock
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
            console.log("okay so it's not going down");
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
              console.log("If you see this then wtf");
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
              <IconButton onClick={() => listIngredientsServer(idd)}>
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

export default Stock;
