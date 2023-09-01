"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import { RootState } from "@/store/store";
import { UserDetailType } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const FacultyPage = () => {
  const authClient: UserDetailType = useSelector(
    (state: RootState) => state.auth
  );
  const router = useRouter();

  useEffect(() => {
    if (!authClient.isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return <>{authClient.user.isStaff && <div>FacultyPage</div>}</>;
};

export default FacultyPage;
