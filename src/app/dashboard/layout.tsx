"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import appClient from "@/network/appClient";
import { ApiConstant } from "@/constant/applicationConstant";
import Sidebar from "@/commonComponents/Sidebar";
import Navbar from "@/commonComponents/navbar/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector((state: RootState) => state.auth.user);

  const [dashboardProfile, setDashboardProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    profilePic: null,
  });
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    getDashboardProfile();
  }, []);

  const getDashboardProfile = async () => {
    if (user.isStudent) {
      const res = await appClient.get(
        `${ApiConstant.GET_STUDENT_PROFILE_DASHBOARD}${user.id}`
      );
      setDashboardProfile((prevState) => ({
        ...prevState,
        profilePic: res.data.accountDetail?.profilePic,
      }));
    }
    if (user.isStaff) {
      const res = await appClient.get(
        `${ApiConstant.GET_FACULTY_PROFILE_DASHBOARD}${user.id}`
      );
      setDashboardProfile((prevState) => ({
        ...prevState,
        profilePic: res.data.facultyDetail?.profilePic,
      }));
    }
  };

  const showHideSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <>
      <Navbar
        firstName={dashboardProfile.firstName}
        profilePic={dashboardProfile.profilePic}
        showHideSidebar={showHideSidebar}
      />
      <div className="flex">
        {toggleSidebar && <Sidebar />}
        <div>{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
