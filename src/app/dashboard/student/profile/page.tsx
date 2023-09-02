"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import StudentProfile from "@/module/studentProfile/StudentProfile";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentProfilePage = () => {
  const router = useRouter();

  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <StudentProfile />;
};

export default StudentProfilePage;
