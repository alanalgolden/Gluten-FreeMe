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

// ! THIS NEEDS TO BE AUDITED FOR FUNCTIONALITY + CLARITY (4/16/23)

const cacheData = collection(db, "Users");
const dbName = "Users";
const spices = "spices";
const stock = "stock";

//Currently unused in favorte of updateIngredint array
export const addIngredient = async (props) => {
  await addDoc(cacheData, { name: `${props}` });
};

export const updateIngredient = async (id, props) => {
  const ingredientDoc = doc(db, dbName, id);
  await updateDoc(ingredientDoc, `${props}`);
};

//Updated for spice/stock
export const updateIngredientArray = async (id, props, ingredientType) => {
  const docRef = doc(db, dbName, id);
  if (ingredientType === spices) {
    await updateDoc(docRef, {
      spices: arrayUnion(props),
    });
  } else if (ingredientType === stock) {
    await updateDoc(docRef, {
      stock: arrayUnion(props),
    });
  }
};

export const deleteIngredient = async (id) => {
  const ingredientDoc = doc(db, dbName, id);
  await deleteDoc(ingredientDoc);
};

export const getIngredients = async (id, ingredientType) => {
  const docRef = doc(db, dbName, id);

  if (ingredientType === spices) {
    try {
      const doc = await getDocFromCache(docRef);
      const spices = doc.data().spices;
      console.log("Got ingredients from cache");

      return spices;
    } catch (e) {
      console.log("Error getting cached document", e);

      const doc = await getDocFromServer(docRef);
      const spices = doc.data().spices;
      console.log("Got data from server");

      return spices;
    }
  } else if (ingredientType === stock) {
    try {
      const doc = await getDocFromCache(docRef);
      const stock = doc.data().stock;
      console.log("Got ingredients from cache");

      return stock;
    } catch (e) {
      console.log("Error getting cached document", e);

      const doc = await getDocFromServer(docRef);
      const stock = doc.data().stock;
      console.log("Got data from server");

      return stock;
    }
  }
};

export const listIngredientsCache = async (id) => {
  const docRef = doc(db, dbName, id);

  try {
    const doc = await getDocFromCache(docRef);
    console.log("Cached document data: ", doc.data());
  } catch (e) {
    console.log("Error getting cached document", e);
  }
};

export const listIngredientsServer = async (id) => {
  const docRef = doc(db, dbName, id);

  try {
    const doc = await getDocFromServer(docRef);
    console.log("Server document data: ", doc.data());
  } catch (e) {
    console.log("Error getting cached document", e);
  }
};

export const deleteArrayFromDoc = async (id, ingredient, ingredientType) => {
  const docRef = doc(db, dbName, id);

  if (ingredientType === spices) {
    await updateDoc(docRef, {
      spices: arrayRemove(ingredient),
      lastModified: Timestamp.now(),
    });
  } else if (ingredientType === stock) {
    await updateDoc(docRef, {
      stock: arrayRemove(ingredient),
      lastModified: Timestamp.now(),
    });
  }
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
