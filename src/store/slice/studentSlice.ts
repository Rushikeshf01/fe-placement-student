"use client";

import { StudentProfileType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const initialStudentState: StudentProfileType = {
  id: "",
  firstName: "",
  lastName: "",
  studentDetail: null,
  mobile: "",
  email: "",
  isStudent: false,
  isStaff: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState: initialStudentState,
  reducers: {
    studentProfile: (state, action: PayloadAction<StudentProfileType>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.studentDetail = action.payload.studentDetail;
      state.mobile = action.payload.mobile;
      state.email = action.payload.email;
      state.isStudent = action.payload.isStudent;
      state.isStaff = action.payload.isStaff;
    },
  },
});

// Action creators are generated for each case reducer function
export const { studentProfile } = studentSlice.actions;

export default studentSlice.reducer;
