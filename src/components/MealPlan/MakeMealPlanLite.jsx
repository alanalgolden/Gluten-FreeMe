import { FetchDataChat } from "../../core/utils/completions";
import { checkCache, checkServer, createMealPlanDoc } from "./MealPlanCrud";
import { db } from "../../firebase";

export async function mealPlanInit(user) {
  let mealPlanHigh = "";
  const BLANK = "BLANK";

  try {
    if (user === undefined || null) {
      console.log("No user!");
      return;
    }

    checkServer(user);

    const mealPlan = await FetchDataChat(`
      "Fill in the blanks for a 2 day meal plan with breakfast lunch and dinner. Average calorie count per meal should be 500. 
      Only give the names of the recipes and their est nutrition facts. 
      All recipes should be Gluten Free and Tree Nut Free. Json Format. 
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
              }
            },
          "lunch": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          },
          "dinner": {
            "name": BLANK,
            "nutrition": {
              "calories": BLANK,
              "fat": BLANK,
              "carbohydrate": BLANK,
              "protein": BLANK
            }
          }
        },
        "
    `);

    let mealPlanHigh = JSON.parse(mealPlan.data.choices[0].message.content);
    const splitVar = mealPlan.data.choices[0].message.content;
    console.log(mealPlanHigh.Monday.breakfast.name);
    console.log(mealPlanHigh);
    console.log(splitVar);

    //need to add data to put into each of the array locations

    checkCache(user, mealPlanHigh.Monday);
    //WORKING createMealPlanDoc(user, mealPlanHigh.Monday);
    //createMealPlanDoc(user, splitVar);
  } catch (error) {
    console.error(error);
  }

  //NOTE: These are both returning blank which means that user is not properly being passed and mealPlanHigh let is not working
  console.log(mealPlanHigh);
  console.log(user);
}
