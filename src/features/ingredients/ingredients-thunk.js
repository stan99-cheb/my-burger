import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/api";
import { setIngredients, setStatus } from "./ingredients-slice";

export const getIngredients = createAsyncThunk(
  'ingredients/fetch',
  (_, { dispatch }) => {
    request('/ingredients')
      .then(data => dispatch(setIngredients(data)))
      .finally(() => dispatch(setStatus()))
  },
);