import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: undefined,
  status: 'idle',
  bun: undefined,
  components: [],
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
    updateBun(state, { payload }) {
      state.bun = { ...payload };
    },
    updateComponents(state, { payload }) {
      state.components = [...payload];
    }
  },
});

export const {
  setIngredients, setStatus, updateBun, updateComponents
} = ingredientsSlice.actions;
export default ingredientsSlice.reducer;