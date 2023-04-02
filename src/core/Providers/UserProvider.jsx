import React, { createContext, useState, useContext } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, provider } from "../../firebase";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const loadUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return null;
  };
  const [user, setUser] = useState(loadUserFromLocalStorage);

  const handleLogin = async () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        console.log(user);
        setUser(user);
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        const email = e.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(e);
        console.log(errorMessage + " ERROR MESSAGE");
      });
  };

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
