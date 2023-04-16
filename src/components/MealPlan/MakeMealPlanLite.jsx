import { FetchDataChat } from "../../core/utils/completions";
import { checkCache, checkServer, createMealPlanDoc } from "./MealPlanCrud";

let mealPlan = ``;

// The askForMeal function contain the raw text JSON String that is passed to GPT.
export const askForMeal = async (
  dietarychoices,
  allergens,
  restrictions,
  prepdays
) => {
  console.log(allergens);
  console.log(allergens.join(", "));

  try {
    let mealPlan = await FetchDataChat(`
  "You will copy the following JSON schema for 7 days and fill in blanks with a meal plan.
  Each day will include 3 meals: breafast, lunch, and dinner.
  Give names for each meal, use real recipe names.
  Estimate the nutrition based on the meal name.

  This plan is for a person with the following, it is IMPORTANT to consider and include these for ALL meals generated:
  - allergies: ${allergens.join(", ")}
  - dietary choices: ${dietarychoices}
  - restrictions: ${restrictions.join(", ")}
  
  Only cook and do meal preperation on: ${prepdays.join(", ")}
  Meals can be leftovers that were prepared on those days

  
  "
  {
    "Monday": {
      "breakfast": {
        "name": BLANK,
        "nutrition": {
          "calories": BLANK,
          "fat": BLANK,
          "carbohydrate": BLANK,
          "protein": BLANK
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      },
      "lunch": {
        "name": BLANK,
        "nutrition": {
          "calories": BLANK,
          "fat": BLANK,
          "carbohydrate": BLANK,
          "protein": BLANK
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      },
      "dinner": {
        "name": BLANK,
        "nutrition": {
          "calories": BLANK,
          "fat": BLANK,
          "carbohydrate": BLANK,
          "protein": BLANK
        },
        "preferences": {
          "dietarychoices": BLANK,
          "allergies": BLANK,
          "restrictions": BLANK,
          "prepday": BLANK
        }
      }
    }
  }`);
    return mealPlan;
  } catch (e) {
    console.log(e);
  }
};

// Called by button in Home, creates the MealPlan and handles the saving in Firestore.
export async function mealPlanInit(user) {
  let mealPlanHigh = undefined;

  const BLANK = "BLANK";

  // * As GPT costs tokens to run, we want to be able to save the data which requires the user to be logged in. This tries to make the meal plan ONLY if user is logged in.
  try {
    // ? Checks if user is undefined. Can this be repurposed to prompt user login?
    if (user === undefined || null) {
      console.log("No user!");
      return;
    }

    // Checks cache to see if there is a userMealPlan
    if ((await checkCache(user, mealPlanHigh)) === undefined) {
      console.log("No meal plan found in CACHE");

      // If there is NOT a userMealPlan in the cache, check the Server for it.
      if ((await checkServer(user, mealPlanHigh)) === undefined) {
        console.log("No meal plan found in SERVER");
        console.log("Creating Meal Plan...");

        //If there is NOT a userMealPlan in the server, then askForMeal().
        //! This should be modified to not directly send to GPT, depending on where final implementation is.
        askForMeal();

        while (mealPlanHigh === undefined) {
          try {
            // * Because GPT will sometimes return an ambigous response that cannot be parsed by JSON.parse, it TRIES to parse it. If it fails, then it prompts GPT again.
            console.log(`Trying to parse ${{ ...mealPlan }}`);
            mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);

            //TODO: This needs to be improved with better UI / passes, basic function for testing
            console.log(`Doc found for ${user} in CACHE!`);

            //TODO: This is a placeholder for user prompt, needs to be refined.
            let planAction = prompt("DISPLAY or REGEN?");
            if (planAction === "REGEN") {
              console.log(`${planAction} is not yet programmed.`);
            } else if (planAction === "DISPLAY") {
              console.log(`${planAction} Attempting to Link...`);
              return "DISPLAY";
            }
          } catch (e) {
            console.log(e);
            console.log("JSON Parse FAILED. Trying again GPT again...");

            // * Because GPT will sometimes return an ambigous response that cannot be parsed by JSON.parse, it TRIES to parse it. If it fails, then it prompts GPT again here.
            askForMeal();

            // * As this is still in the while loop, it will try the JSON.parse on new GPT response. It will keep trying until it is successful.
            mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);
            console.log(`JSON Parse Worked! ${mealPlanHigh}`);
          }
        }

        //If the try statement gets here, the mealPlan will be created using the UID.
        createMealPlanDoc(user, mealPlanHigh);
        console.log(mealPlanHigh);
      } else {
        //If there is already a user in the Server, then prompt user for action.
        console.log(`Document UID ${user} already exists!`);
        let regenDoc = prompt("DISPLAY or REGEN?");
        console.log(regenDoc);
      }
    } else {
      //* This runs if it does return a mealPlan from cache.
      //TODO: This needs to be improved with better UI / passes, basic function for testing.
      console.log(`Doc found for ${user} in CACHE!`);
      let planAction = prompt("DISPLAY or REGEN?");
      if (planAction === "REGEN") {
        console.log(`${planAction} is not yet programmed.`);
        return "REGEN";
      } else if (planAction === "DISPLAY") {
        console.log(`${planAction} Attempting to Link...`);
        return "DISPLAY";
      }
    }
  } catch (error) {
    console.error(error);
  }
}
