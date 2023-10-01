"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { studentProfile } from "@/store/slice/studentSlice";
import appClient from "@/network/appClient";
import { ApiConstant } from "@/constant/applicationConstant";
import Sidebar from "@/commonComponents/sidebar/Sidebar";
import Navbar from "@/commonComponents/navbar/Navbar";
import { AlertForStudent } from "@/commonComponents/alert/Alerts";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const student = useSelector((state: RootState) => state.student);

  useEffect(() => {
    getDashboardProfile();
  }, []);

  const getDashboardProfile = async () => {
    const res = await appClient.get(
      `${ApiConstant.GET_STUDENT_PROFILE}${user.id}`
    );
    dispatch(studentProfile(res.data));
  };

  const showHideSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <Navbar showHideSidebar={showHideSidebar} />
      <div className={`mt-[70px] ${toggleSidebar ? "ml-[220px]" : "ml-[0px]"}`}>
        {toggleSidebar && <Sidebar />}
        {!student.studentDetail?.isCompleted && (
          <AlertForStudent completeAlert />
        )}
        {student.studentDetail?.isCompleted &&
          !student.studentDetail?.isVerified && <AlertForStudent verifyAlert />}
        {student.studentDetail?.isBlocked && <AlertForStudent blockAlert />}
        <div className="p-[20px]">
          <div className="border rounded-md">{children}</div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
