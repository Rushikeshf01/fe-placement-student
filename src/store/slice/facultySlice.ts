"use client";

import { FacultyProfileType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialFacultyState: FacultyProfileType = {
  id: "",
  firstName: "",
  lastName: "",
  facultyDetail: null,
  mobile: "",
  email: "",
  isStudent: false,
  isStaff: false,
};

export const facultySlice = createSlice({
  name: "faculty",
  initialState: initialFacultyState,
  reducers: {
    facultyProfile: (state, action: PayloadAction<FacultyProfileType>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.facultyDetail = action.payload.facultyDetail;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.isStudent = action.payload.isStudent;
      state.isStaff = action.payload.isStaff;
    },
  },
});

// Action creators are generated for each case reducer function
export const { facultyProfile } = facultySlice.actions;

export default facultySlice.reducer;
