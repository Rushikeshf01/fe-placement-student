"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExtraState {
  captchaValue: string;
}

const initialState: ExtraState = {
  captchaValue: "",
};

export const extraSlice = createSlice({
  name: "extra",
  initialState,
  reducers: {
    updateCaptchaValue: (state, action: PayloadAction<string>) => {
      state.captchaValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateCaptchaValue } = extraSlice.actions;

export default extraSlice.reducer;
