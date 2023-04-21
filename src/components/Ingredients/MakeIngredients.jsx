import { FetchDataChat } from "../../core/utils/completions";
import {
  checkCacheIngredients,
  checkServerIngredients,
  createRecipeIngredients,
} from "./IngredientsCrud";

let ingredients = ``;

export const askForIngredients = async (
  recipeName,
  dietaryChoices,
  allergens,
  restrictions,
  prepdays,
  servingSize
) => {
  try {
    ingredients = await FetchDataChat(`
      "Create a ${dietaryChoices} recipe for the meal ${recipeName}.
      There are people with severe allergies to: ${allergens}, do not include related ingredients.
      They follow a strict restriction of: ${restrictions}
      Only give the ingredients and measurements. There should be enough for ${servingSize} people to eat.
      Fill in the blanks and copy the following JSON format as needed. Do NOT tell me sure.


  "
  {
    "Recipe": {
      "name": BLANK,
      "ingredients": [
          {
            "ingredientname": BLANK,
            "quantity": BLANK,
            "unit": BLANK
          }
        ]
      }
    }`);
    const ingredPlease = JSON.parse(ingredients.data.choices[0]);
    console.log(`INGRED PLEASE SHOW UP + ${ingredPlease}`);
    return ingredients;
  } catch (e) {
    console.error(e);
  }
};

export async function makeIngredients(user, recipeName, mealAllergies) {
  let recipeData = undefined;

  try {
    if (user === undefined || null) {
      console.log("No user!");
      return;
    }

    if ((await checkCacheIngredients(user)) === undefined) {
      console.log("No recipe found in CACHE");

      if ((await checkServerIngredients(user)) === undefined) {
        console.log("No ingredients found in SERVER");
        console.log("Creating Ingredients...");

        await askForIngredients(recipeName, "", mealAllergies, "", "", 4);
        console.log(`INGREDIENTS DATA 1 ${{ ...ingredients.data }}`);
        console.log(`INGREDIENTS DATA 2 ${ingredients}`);
        console.log(
          `INGREDIENTS DATA 2 ${JSON.parse(
            { ...ingredients }.data.choices[0].message.content
          )}`
        );
        //WHY DOESN'T THIS WORK????
        while (recipeData === undefined) {
          try {
            console.log(`Trying to parse TWO ${{ ...{ ...ingredients } }}`);
            console.log(`Trying to parse TWO ${ingredients}`);
            console.log(`Trying to parse TWO ${ingredients.data}`);
            recipeData = JSON.parse(
              ingredients.data.choices[0].message.content
            );

            console.log(`recipeData PARSED!`);
          } catch (e) {
            console.log(e);
            console.log(`recipeData PARSE FAILED! Trying GPT again...`);
            try {
              console.log(`Trying to parse THREE ${{ ...ingredients }}`);
              console.log(`Trying to parse THREE ${ingredients}`);
              console.log(`Trying to parse THREE ${ingredients.data}`);
              askForIngredients(recipeName, "", mealAllergies, "", "", 4);
            } catch (e) {
              console.log(e);
            }

            /*             recipeData = JSON.parse(
              ingredients.data.choices[0].message.contents
            );
            console.log(`recipeData PARSED!`); */
          }
        }

        await createRecipeIngredients(user, recipeData);
        console.log(recipeData);
      }
    }
  } catch (e) {
    console.log(e);
    console.log("JSON Parse FAILED. Trying again GPT again...");

    // * Because GPT will sometimes return an ambigous response that cannot be parsed by JSON.parse, it TRIES to parse it. If it fails, then it prompts GPT again here.
    try {
      askForIngredients(recipeName, "", mealAllergies, "", "", 4);
    } catch (e) {
      console.log(e);
    }

    // * As this is still in the while loop, it will try the JSON.parse on new GPT response. It will keep trying until it is successful.
    recipeData = JSON.parse(ingredients.data.choices[0].message.content);
    console.log(`JSON Parse Worked! ${recipeData}`);
  }
}
