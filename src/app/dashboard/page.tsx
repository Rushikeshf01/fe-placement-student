"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import Faculty from "@/module/faculty/Faculty";
import Student from "@/module/student/Student";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return (
    <>
      {user.isStudent && <Student />}
      {user.isStaff && <Faculty />}
    </>
  );
};

export default DashboardPage;
