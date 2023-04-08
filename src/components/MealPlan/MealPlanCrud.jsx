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

const uid = user;

const dbName = "userMealPlans";

export const checkCache = async (uid, apiCall) => {
  const docRef = doc(db, dbName, uid);

  try {
    const doc = await getDocFromCache(docRef);
    const userMealPlan = doc.data().mealArray;
    console.log(`Got ${userMealPlan} from !CACHE!`);

    return userMealPlan;
  } catch (e) {
    console.log(
      `No mealPlan doc for UID ${uid} on !CACHE!. Checking server...`
    );
    checkServer(uid, apiCall);
  }
};

//TODO : Need apiCall input
export const checkServer = async (uid, apiCall) => {
  const docRef = doc(db, dbName, uid);

  try {
    const doc = await getDocFromServer(docRef);
    const userMealPlan = doc.data().mealArray;
    console.log(`Got ${userMealPlan} from !Server!.`);

    replaceDoc(uid, apiCall);

    return userMealPlan;
  } catch (e) {
    console.log(
      `No mealPlan doc for UID ${uid} on !SERVER!. Creating document...`
    );

    createMealPlanDoc(uid, apiCall);
  }
};

export const createMealPlanDoc = async (uid, apiCall) => {
  const docRef = doc(db, dbName, uid);

  try {
    await setDoc(docRef, {
      mealArray: apiCall,
      lastModified: serverTimestamp(),
    });
    console.log(`Document created for UID ${uid}!`);
  } catch (e) {
    console.error(`Error creating document for UID ${uid}`);
  }
};

export const replaceDoc = async (uid, apiCall) => {
  const docRef = doc(db, dbName, uid);

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
  const docRef = doc(db, dbName, uid);

  try {
    await updateDoc(docRef, {
      mealArray: apiCall,
    });
    console.log(`Replaced mealArray for UID ${uid}`);
  } catch (e) {
    console.error(`Error replacing Doc ${uid}`);
  }
};
