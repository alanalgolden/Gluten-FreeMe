import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";

import { getMeals } from "../../components/MealPlan/MealPlanCrud";
import { UserContext } from "../../core/Providers/UserProvider";

export const MealContext = createContext();

// * This sets the currently selected Meal.
export const MealProvider = ({ children }) => {
  //should I store in local storage first?

  const [meals, setMeals] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const mealLoader = () => {
      if (user) {
        getMeals(user.uid)
          .then((result) => setMeals(result))
          .catch((error) => console.log(`An error occured + ${error}`));

        console.log(meals);
      }
    };

    mealLoader();
  }, []);

  return (
    <MealContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealContext.Provider>
  );
};
