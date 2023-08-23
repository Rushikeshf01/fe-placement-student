import { UserDetailType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialState: UserDetailType = {
  refresh: "",
  access: "",
  isAuthenticated: false,
  user: {
    id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    isStudent: false,
    isStaff: false,
    updatedAt: "2023-08-22T06:19:37.865244Z",
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    initialLoginState: (state, action: PayloadAction<UserDetailType>) => {
      state = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { initialLoginState } = loginSlice.actions;

export default loginSlice.reducer;
