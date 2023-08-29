"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { studentProfile } from "@/store/slice/studentSlice";
import { facultyProfile } from "@/store/slice/facultySlice";
import appClient from "@/network/appClient";
import { ApiConstant } from "@/constant/applicationConstant";
import Sidebar from "@/commonComponents/sidebar/Sidebar";
import Navbar from "@/commonComponents/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    getDashboardProfile();
  }, []);

  const getDashboardProfile = async () => {
    if (user.isStudent) {
      const res = await appClient.get(
        `${ApiConstant.GET_STUDENT_PROFILE}${user.id}`
      );
      dispatch(studentProfile(res.data));
    }
    if (user.isStaff) {
      const res = await appClient.get(
        `${ApiConstant.GET_FACULTY_PROFILE}${user.id}`
      );
      dispatch(facultyProfile(res.data));
    }
  };

  const showHideSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <Navbar showHideSidebar={showHideSidebar} />
      <div className="flex">
        {toggleSidebar && <Sidebar />}
        <div>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
