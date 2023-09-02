"use client";

import { IsCompleteForFaculty } from "@/commonComponents/alert/Alerts";
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
  const faculty = useSelector((state: RootState) => state.faculty);
  const router = useRouter();

  useEffect(() => {
    if (!authClient.isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return (
    <>
      {authClient.user.isStaff && (
        <div>
          {!faculty.facultyDetail?.isCompleted && <IsCompleteForFaculty />}
        </div>
      )}
    </>
  );
};

export default FacultyPage;
