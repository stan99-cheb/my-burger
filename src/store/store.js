import { configureStore } from "@reduxjs/toolkit";
import tabsReducer from "../features/tabs/tabs-slice"

export const store = configureStore({
  reducer: {
    tabs: tabsReducer,
  },
});