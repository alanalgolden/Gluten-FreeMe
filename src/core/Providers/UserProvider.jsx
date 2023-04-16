import React, { createContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { checkAndCreateUserDoc } from "../utils/crud";

export const UserContext = createContext(null);
export const user = UserContext.uid;

// * Creates global User Context.
export const UserProvider = ({ children }) => {
  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  };
  const [user, setUser] = useState(loadUserFromLocalStorage);

  // * Prompts user with GoogleAuth Popup, through Firebase.
  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        console.log(user);
        checkAndCreateUserDoc(
          user.uid,
          ["add spices here!"],
          ["add ingredients here!"]
        );
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        const email = e.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(e);
        console.log(errorMessage + " ERROR MESSAGE");
      });
  };

  // * Logs out currently signed in user.
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        setUser(null);
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};
