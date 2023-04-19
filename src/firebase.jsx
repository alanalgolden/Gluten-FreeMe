import { initializeApp } from "firebase/app";
import { enableIndexedDbPersistence, getFirestore } from "@firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth();

provider.setCustomParameters({
  prompt: "select_account",
});

export const db = getFirestore(app);
enableIndexedDbPersistence(db);

export { sendSignInLinkToEmail, signInWithEmailLink };
