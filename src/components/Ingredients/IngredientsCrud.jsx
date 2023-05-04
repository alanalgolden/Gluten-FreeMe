import {
  doc,
  getDocFromCache,
  getDocFromServer,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

export const checkCacheIngredients = async (uid) => {
  const docRef = doc(db, "userRecipeIngredients", uid);

  try {
    const doc = await getDocFromCache(docRef);
    const userRecipeIngredients = doc.data();

    console.log(`Got ${userRecipeIngredients} from !CACHE!`);

    if (userRecipeIngredients === undefined) {
      console.log(`${uid} is undefined`);
    } else if (userRecipeIngredients !== undefined) {
      console.log(`Got ${uid} from !cache!`);
    }

    return userRecipeIngredients;
  } catch (e) {
    console.log(e);
  }
};

export const checkServerIngredients = async (uid) => {
  const docRef = doc(db, "userRecipeIngredients", uid);

  try {
    const doc = await getDocFromServer(docRef);
    const userRecipeIngredients = doc.data();

    console.log(`Got ${JSON.stringify(userRecipeIngredients)} from !SERVER!`);

    if (userRecipeIngredients === undefined) {
      console.log(`${uid} is undefined`);
    } else if (userRecipeIngredients !== undefined) {
      console.log(`Got ${uid} from !SERVER!`);
    }

    return userRecipeIngredients;
  } catch (e) {
    console.log(e);
  }
};

export const createRecipeIngredients = async (uid, apiCall) => {
  try {
    await setDoc(doc(db, "userRecipeIngredients", uid), apiCall);
    console.log(`Document created for UID ${uid}`);
  } catch (e) {
    console.error(`Error creating document for UID ${uid} ERROR: ${e}`);
  }
};

export const getRecipeIngredients = async (uid) => {
  const docRef = doc(db, "userRecipeIngredients", uid);

  try {
    const doc = await getDocFromCache(docRef);
    const recipes = doc.data();
    console.log("Got Meals from Cache!");

    return recipes;
  } catch (e) {
    console.log(e);

    const doc = await getDocFromServer(docRef);
    const recipes = doc.data();
    return recipes;
  }
};

export const findUserRecipeIngredients = async (uid, mealName) => {
  /*   function cycleIngredients(recipeName) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name === recipeName) {
        return { recipe: recipes[i], index: i };
      }
    }
    return null;
  } */
  /*   const targetRecipeName = `${mealName}`;
  const result = cycleIngredients(targetRecipeName);

  if (result) {
    console.log(
      `Found recipe "${targetRecipeName}" at position ${result.index}`
    );
    console.log(result.recipe);
  } else {
    console.log(`No recipe found with name "${targetRecipeName}"`);
  } */
};

export const checkForRecipe = async (uid, mealName) => {
  const docRef = doc(db, "userRecipeIngredients", uid);

  try {
    const doc = await getDocFromServer(docRef);
    const userRecipe = doc.data();

    if (userRecipe === undefined) {
      console.log(`returning undefined`);
      console.log(`${uid} doesn't exist!`);
      return false;
    } else if (userRecipe !== undefined) {
      console.log(userRecipe);
      return true;
    }
  } catch (e) {
    console.error(`console ERROR: ${e}`);
  }
};
