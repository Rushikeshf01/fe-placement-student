"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import StudentCompany from "@/module/studentCompany/StudentCompany";
import { RootState } from "@/store/store";
import { UserDetailType } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const authClient: UserDetailType = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  useEffect(() => {
    if (!authClient.isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <>{authClient.user.isStudent && <StudentCompany />}</>;
};

export default StudentPage;
