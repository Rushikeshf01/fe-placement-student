"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import Student from "@/module/student/Student";
import StudentCompany from "@/module/studentCompany/StudentCompany";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const authClient = useSelector((state: RootState) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (authClient.isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <StudentCompany rowsPerPage={5} isClosed="False" />;
};

export default DashboardPage;
