import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setIngredients, setStatus } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;