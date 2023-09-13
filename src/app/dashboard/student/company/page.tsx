"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import StudentCompany from "@/module/studentCompany/StudentCompany";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentCompanyPage = () => {
  const router = useRouter();

  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <StudentCompany rowsPerPage={10} isFilterBar />;
};

export default StudentCompanyPage;
