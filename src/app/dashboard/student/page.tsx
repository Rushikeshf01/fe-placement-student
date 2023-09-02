"use client";

import { IsCompleteForStudent } from "@/commonComponents/alert/Alerts";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { RootState } from "@/store/store";
import { UserDetailType } from "@/utils/types";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const StudentPage = () => {
  const authClient: UserDetailType = useSelector(
    (state: RootState) => state.auth
  );
  const student = useSelector((state: RootState) => state.student);
  const router = useRouter();

  useEffect(() => {
    if (!authClient.isAuthenticated) {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  return (
    <>
      {authClient.user.isStudent && (
        <div>
          {!student.studentDetail?.isCompleted && <IsCompleteForStudent />}
        </div>
      )}
    </>
  );
};

export default StudentPage;
