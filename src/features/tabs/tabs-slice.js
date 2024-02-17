import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  data: [
    {
      id: crypto.randomUUID(),
      name: "Булки",
      type: "bun"
    },
    {
      id: crypto.randomUUID(),
      name: "Соусы",
      type: "sauce"
    },
    {
      id: crypto.randomUUID(),
      name: "Начинки",
      type: "main"
    },
  ],
  active: undefined,
};

const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    setActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const { setActive } = tabsSlice.actions;
export default tabsSlice.reducer;