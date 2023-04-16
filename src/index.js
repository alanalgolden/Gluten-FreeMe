import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { MealProvider } from "./core/Providers/MealProvider";
import { RecipeProvider } from "./core/Providers/RecipeProvider";
import { UserProvider } from "./core/Providers/UserProvider";

import App from "./App";
import "./index.css";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENTID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <MealProvider>
        <RecipeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecipeProvider>
      </MealProvider>
    </UserProvider>
  </React.StrictMode>
);
