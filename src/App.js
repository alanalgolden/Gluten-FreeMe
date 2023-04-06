import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Profile from "./components/Profile";
import SideBar from "./scenes/global/Sidebar";
import Aitest from "./scenes/aitest";
import Subscriptions from "./scenes/subscriptions";
import Home from "./scenes/home";
import MealPLan from "./scenes/mealplan";

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
              <Route path="/mealplan" element={<MealPLan />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
