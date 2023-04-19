import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";

import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";

import Topbar from "./scenes/global/Topbar";
import Aitest from "./scenes/aitest";
import Dashboard from "./scenes/dashboard";
import Profile from "./scenes/profile";
import Subscriptions from "./scenes/subscriptions";
import Home from "./scenes/home";
import MealPlan from "./scenes/mealplan";
import CreateMealPlan from "./scenes/mealplan/createplan";
import LoginPage from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();

  const auth = getAuth();
  if (isSignInWithEmailLink(auth, window.location.href)) {
    // Additional state parameters can also be passed via URL.
    // This can be used to continue the user's intended action before triggering
    // the sign-in operation.
    // Get the email if available. This should be available if the user completes
    // the flow on the same device where they started it.
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      // User opened the link on a different device. To prevent session fixation
      // attacks, ask the user to provide the associated email again. For example:
      email = window.prompt("Please provide your email for confirmation");
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // Clear email from storage.
        window.localStorage.removeItem("emailForSignIn");
        // You can access the new user via result.user
        // Additional user info profile not available via:
        // result.additionalUserInfo.profile == null
        // You can check if the user is new or existing:
        // result.additionalUserInfo.isNewUser
      })
      .catch((error) => {
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/aitest" element={<Aitest />} />
              <Route path="/subscriptions" element={<Subscriptions />} />
              <Route path="/home" element={<Home />} />
              <Route path="/mealplan" element={<MealPlan />} />
              <Route path="/createplan" element={<CreateMealPlan />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
