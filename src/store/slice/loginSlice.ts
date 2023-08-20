import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialUserState: { value: number } = {
  value: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
