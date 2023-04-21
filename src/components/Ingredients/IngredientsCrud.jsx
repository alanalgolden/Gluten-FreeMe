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
