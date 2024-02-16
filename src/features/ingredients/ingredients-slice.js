import { createSlice } from "@reduxjs/toolkit";
import { getIngredients } from "./ingredients-thunk";

const initialState = {
  data: undefined,
  status: 'idle',
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setIngredients(state, { payload }) {
      state.data = payload;
    },
    setStatus(state) {
      state.status = 'idle';
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(getIngredients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getIngredients.fulfilled, (state) => {
        state.status = 'success';
      })
  },
});

export const { setIngredients, setStatus } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;