import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "../features/tabs/tabs-slice";
import ingredientsReducer from "../features/ingredients/ingredients-slice";
import loggerMiddleware from "./middleware/logger-midleware";

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
    ingredients: ingredientsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(loggerMiddleware)
});