import React, { createContext, useState, useContext } from "react";
import { useEffect } from "react";
import { getMeals } from "../../components/MealPlan/MealPlanCrud";
import { UserContext } from "../../core/Providers/UserProvider";

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  //should I store in local storage first?

  const [meals, setMeals] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const mealLoader = () => {
      // TODO 10:13PM 4/10/23 - Need to figure out how to get mealContext
      getMeals(user.uid)
        .then((response) => response.json())
        .then((result) => setMeals(result.results[0]))
        .catch((error) => console.log("An error occured"));

      console.log(meals);
      //setMeals(result.results[0]);
    };

    mealLoader();
  }, []);

  return (
    <MealContext.Provider value={{ meals }}>{children}</MealContext.Provider>
  );
};

//why does this crash my react web :()
