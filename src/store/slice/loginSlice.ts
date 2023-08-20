import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


const initialUserState: { value: number } = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {decrement: (state) => {
    state.value -= 1
  },},
});

// Action creators are generated for each case reducer function
export const {decrement} = userSlice.actions;

export default userSlice.reducer;
