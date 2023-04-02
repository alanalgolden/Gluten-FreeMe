import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  arrayUnion,
  getDocFromCache,
  getDocFromServer,
  FieldValue,
  arrayRemove,
  Timestamp,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const cacheData = collection(db, "Ingredients");
const serverData = collection(db, "Ingredients");

//Currently unused in favorte of updateIngredint array
export const addIngredient = async (props) => {
  await addDoc(cacheData, { name: `${props}` });
};

export const updateIngredient = async (id, props) => {
  const ingredientDoc = doc(db, "Ingredients", id);
  await updateDoc(ingredientDoc, `${props}`);
};

export const updateIngredientArray = async (id, props) => {
  const docRef = doc(db, "Ingredients", id);
  await updateDoc(docRef, {
    //TODO : remove alanaIngredients Placeholder
    alanaIngredients: arrayUnion(props),
  });
};

export const deleteIngredient = async (id) => {
  const ingredientDoc = doc(db, "Ingredients", id);
  await deleteDoc(ingredientDoc);
};

export const getIngredients = async (id) => {
  const docRef = doc(db, "Ingredients", id);

  try {
    const doc = await getDocFromCache(docRef);
    const alanaIngredients = doc.data().alanaIngredients;
    console.log("Got ingredients from cache");

    return alanaIngredients;
  } catch (e) {
    console.log("Error getting cached document", e);

    const doc = await getDocFromServer(docRef);
    const alanaIngredients = doc.data().alanaIngredients;
    console.log("Got data from server");

    return alanaIngredients;
  }
};

export const listIngredientsCache = async (id) => {
  const docRef = doc(db, "Ingredients", id);

  try {
    const doc = await getDocFromCache(docRef);
    console.log("Cached document data: ", doc.data());
  } catch (e) {
    console.log("Error getting cached document", e);
  }
};

export const listIngredientsServer = async (id) => {
  const docRef = doc(db, "Ingredients", id);

  try {
    const doc = await getDocFromServer(docRef);
    console.log("Server document data: ", doc.data());
  } catch (e) {
    console.log("Error getting cached document", e);
  }
};

export const deleteArrayFromDoc = async (id, ingredient) => {
  const docRef = doc(db, "Ingredients", id);

  await updateDoc(docRef, {
    alanaIngredients: arrayRemove(ingredient),
    lastModified: Timestamp.now(),
  });
};

export const checkAndCreateUserDoc = async (uid, spices, stock) => {
  const docRef = doc(db, "Users", uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    try {
      await setDoc(docRef, {
        spices: spices,
        stock: stock,
        lastModified: serverTimestamp(),
      });
      console.log(`Document created with ID: ${uid}`);
    } catch (e) {
      console.error(`Error creating document: ${e}`);
    }
  } else {
    console.log(`Document already exists with ID: ${uid}`);
  }
};
