import { db } from "../../firebase";
import { user } from "../../core/Providers/UserProvider";
import {
  doc,
  getDocFromCache,
  getDocFromServer,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const checkCache = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    const doc = await getDocFromCache(docRef);
    const userMealPlan = doc.data();
    console.log(`Got ${userMealPlan} from !CACHE!`);

    if (userMealPlan === undefined) {
      console.log(`${uid} is undefined!`);
      checkServer(uid, apiCall);
    } else if (userMealPlan !== undefined) {
      //replaceDoc(uid, apiCall);
      console.log(`Got ${uid} from !cache!`);
    }

    return userMealPlan;
  } catch (e) {
    console.log(e);
    console.log(
      `No mealPlan doc for UID ${uid} on !CACHE!. Checking server...`
    );
    checkServer(uid, apiCall);
  }
};

export const checkServer = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    const doc = await getDocFromServer(docRef);
    const userMealPlan = doc.data();
    //this is running even when its undefined, and because it's successful it just replaces a doc and doesn't move into the catch

    if (userMealPlan === undefined) {
      console.log(`${uid} is undefined!`);
      createMealPlanDoc(uid, apiCall);
    } else if (userMealPlan !== undefined) {
      //replaceDoc(uid, apiCall);
      console.log(`Got ${uid} from !server!`);
    }

    //replaceDoc(uid, apiCall);

    return userMealPlan;
  } catch (e) {
    console.error(e);
    console.log(
      `No mealPlan doc for UID ${uid} on !SERVER!. Creating document...`
    );

    createMealPlanDoc(uid, apiCall);
  }
};

export const createMealPlanDoc = async (uid, apiCall) => {
  try {
    await setDoc(doc(db, "userMealPlans", uid), apiCall);
    console.log(`Document created for UID ${uid}!`);
  } catch (e) {
    console.error(`Error creating document for UID ${uid} ERROR: ${e}`);
  }
};

export const replaceDoc = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    await updateDoc(docRef, {
      mealArray: apiCall,
    });
    console.log(`Replaced mealArray for UID ${uid}`);
  } catch (e) {
    console.error(`Error replacing Doc ${uid}`);
  }
};

// TODO : Replace Single day in the Doc Array (reconstruct the Doc in another function, add the new recipe?)
export const replaceDocDay = async (uid, apiCall) => {
  const docRef = doc(db, "userMealPlans", uid);

  try {
    await updateDoc(docRef, {
      mealArray: apiCall,
    });
    console.log(`Replaced mealArray for UID ${uid}`);
  } catch (e) {
    console.error(`Error replacing Doc ${uid}`);
  }
};
