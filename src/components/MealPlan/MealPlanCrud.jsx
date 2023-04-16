import {
  doc,
  getDocFromCache,
  getDocFromServer,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../../firebase";

// * Checks the Cache for a mealPlan using User UID.
export const checkCache = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    const doc = await getDocFromCache(docRef);
    const userMealPlan = doc.data();

    console.log(`Got ${userMealPlan} from !CACHE!`);

    if (userMealPlan === undefined) {
      console.log(`${uid} is undefined!`);
    } else if (userMealPlan !== undefined) {
      //replaceDoc(uid, apiCall);
      console.log(`Got ${uid} from !cache!`);
    }

    return userMealPlan;
  } catch (e) {
    console.log(e);
  }
};

// * Checks the Server for a mealPlan using User UID.
export const checkServer = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    const doc = await getDocFromServer(docRef);
    const userMealPlan = doc.data();
    //this is running even when its undefined, and because it's successful it just replaces a doc and doesn't move into the catch

    if (userMealPlan === undefined) {
      console.log(`${uid} is undefined!`);
    } else if (userMealPlan !== undefined) {
      //replaceDoc(uid, apiCall);
      console.log(`Got ${uid} from !server!`);
    }

    //replaceDoc(uid, apiCall);

    return userMealPlan;
  } catch (e) {
    console.error(e);
  }
};

// * Creates a mealPlanDoc with User UID as document name, if document doesn't already exist.
export const createMealPlanDoc = async (uid, apiCall) => {
  try {
    await setDoc(doc(db, "userMealPlans", uid), apiCall);
    console.log(`Document created for UID ${uid}!`);
  } catch (e) {
    console.error(`Error creating document for UID ${uid} ERROR: ${e}`);
  }
};

// * Updates a mealPlanDoc that already exists with new information. Currently only updating mealArray.
export const replaceDoc = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    await updateDoc(docRef, {
      mealArray: apiCall,
    });
    console.log(`Replaced mealArray for UID ${uid}`);
  } catch (e) {
    console.error(`Error replacing Doc.. trying to create new ${uid}: ${e}`);
    await createMealPlanDoc(uid, apiCall);
  }
};

// ? Is this used anywhere instead of replaceDoc? They do the same thing, with the exception of this just passing in apiCall directly rather than assigning it to the mealArray.
// TODO : Replace Single day in the Doc Array (reconstruct the Doc in another function, add the new recipe?)
export const replaceDocDay = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    await updateDoc(docRef, {
      apiCall,
    });
    console.log(`Replaced mealArray for UID ${uid}`);
  } catch (e) {
    console.error(`Error replacing Doc ${uid}`);
  }
};

// * Attempts to get the Meals from the cache, if it is unable to then it attempts to get it from the Server.
// ? Should I have it check localStorage as well?
export const getMeals = async (uid) => {
  const docRef = doc(db, "userMealPlans", uid);
  // NOTE : Should I add a localStorage check here first?
  try {
    const doc = await getDocFromCache(docRef);
    const meals = doc.data();
    console.log("Got Meals from Cache!");
    //console.log(meals);

    return meals;
  } catch (e) {
    console.log(e);

    const doc = await getDocFromServer(docRef);
    const meals = doc.data();
    return meals;
  }
};
