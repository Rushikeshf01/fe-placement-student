"use client";

import React from "react";
import { AlertForStudent } from "@/commonComponents/alert/Alerts";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  const student = useSelector((state: RootState) => state.student);

  return (
    <div>
      {!student.studentDetail?.isCompleted && <AlertForStudent completeAlert />}
      {student.studentDetail?.isCompleted &&
        !student.studentDetail?.isVerified && <AlertForStudent verifyAlert />}
      {student.studentDetail?.isBlocked && <AlertForStudent blockAlert />}
      {children}
    </div>
  );
};

export default StudentLayout;
