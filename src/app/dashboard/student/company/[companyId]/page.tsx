"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import StudentSingleCompany from "@/module/studentSingleCompany/StudentSingleCompany";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentSingleCompanyPage = ({ params }: { params: { companyId: string } }) => {
  const router = useRouter();

  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <StudentSingleCompany companyId={params.companyId} />;
};

export default StudentSingleCompanyPage;
