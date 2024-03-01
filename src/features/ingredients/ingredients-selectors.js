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

export const ingredientsBun = (state) => ingredientsAll(state).bun;
export const ingredientsComponents = (state) => ingredientsAll(state).components;