import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Topbar from "./scenes/global/Topbar";
import Aitest from "./scenes/aitest";
import Dashboard from "./scenes/dashboard";
import Profile from "./components/Profile";
import Subscriptions from "./scenes/subscriptions";
import Home from "./scenes/home";
import MealPlan from "./scenes/mealplan";
import CreateMealPlan from "./scenes/mealplan/createplan";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Profile" element={<Profile />} />
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
