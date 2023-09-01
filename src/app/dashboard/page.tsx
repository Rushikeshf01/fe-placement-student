"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import Faculty from "@/module/faculty/Faculty";
import Student from "@/module/student/Student";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const authClient = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (authClient.isAuthenticated) {
      if (authClient.user.isStudent) {
        router.push(ApplicationConstant.STUDENT_DASHBOARD_PATH);
      }
      if (authClient.user.isStaff) {
        router.push(ApplicationConstant.FACULTY_DASHBOARD_PATH);
      }
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <></>;
};

export default DashboardPage;
