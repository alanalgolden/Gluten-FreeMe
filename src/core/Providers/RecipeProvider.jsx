import React, { createContext, useContext, useState } from "react";

// Create the context
const RecipeContext = createContext();

// Custom hook to use the RecipeContext
export const useRecipeContext = () => {
  return useContext(RecipeContext);
};

// Provider component
export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const removeRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const clearRecipes = () => {
    setRecipes([]);
  };

  const value = {
    recipes,
    addRecipe,
    removeRecipe,
    updateRecipe,
    clearRecipes,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};
