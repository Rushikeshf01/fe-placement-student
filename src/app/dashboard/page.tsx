"use client";

import Sidebar from "@/commonComponents/Slidebar/Sidebar";
import { ApplicationConstant } from "@/constant/applicationConstant";
import Faculty from "@/module/faculty/Faculty";
import Student from "@/module/student/Student";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const isStudent = useSelector(
    (state: RootState) => state.auth.user.isStudent
  );
  const isFaculty = useSelector((state: RootState) => state.auth.user.isStaff);

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return (
    <>
      <Sidebar />
      {/* {isStudent && <Student />}
      {isFaculty && <Faculty />} */}
    </>
  );
};

export default DashboardPage;
