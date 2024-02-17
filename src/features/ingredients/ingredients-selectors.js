import { createSelector } from "@reduxjs/toolkit";

const ingredientsAll = (state) => state.ingredients;
export const ingredientsData = (state) => ingredientsAll(state).data;
export const ingredientsStatus = (state) => ingredientsAll(state).status;

export const selectedIngredientsByType = createSelector(
  ingredientsData,
  (data) => data?.reduce(
    (acc, ingredient) =>
      ({ ...acc, [ingredient.type]: acc[ingredient.type] ? [...acc[ingredient.type], ingredient] : [ingredient] }),
    {}
  )
);