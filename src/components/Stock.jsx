import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Typography,
  IconButton,
  Input,
  TextField,
  Divider,
} from "@mui/material";
import {
  getIngredients,
  listIngredientsServer,
  deleteArrayFromDoc,
  getIngredientsServer,
  updateIngredientArray,
} from "../core/utils/crud";
import { useState, useEffect, useContext } from "react";
import { getDocFromCache } from "firebase/firestore";
import AddIcon from "@mui/icons-material/Add";
import { UserContext } from "../core/Providers/UserProvider";

export const Stock = () => {
  const { user } = useContext(UserContext);
  const idd = user.uid;
  const ingredientType = "stock";
  const [input, setInput] = useState("");
  const [ingredientInput, setIngredientInput] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const [dataStatus, setDataStatus] = useState();

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

  return ingredients === undefined ? (
    console.log(ingredients)
  ) : (
    <Box>
      <Typography variant="h4" sx={{ mb: "10px" }}>
        Stock
      </Typography>
      <Divider sx={{ mb: "10px" }} />
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
