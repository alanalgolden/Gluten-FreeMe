import { useState } from "react";
import { createContext } from "react";

export const DayContext = createContext();

export const DayProvider = ({ children }) => {
  const { selectedDay, setSelectedDay } = useState();

  return (
    <DayContext.Provider value={{ children }}>{children}</DayContext.Provider>
  );
};
