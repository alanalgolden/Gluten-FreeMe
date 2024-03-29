import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./core/Providers/UserProvider";
import { MealProvider } from "./core/Providers/MealProvider";
import { RecipeProvider } from "./core/Providers/RecipeProvider";

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
