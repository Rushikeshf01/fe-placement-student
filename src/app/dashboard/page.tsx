"use client";

import Sidebar from "@/commonComponents/Sidebar";
import Navbar from "@/commonComponents/navbar/Navbar";
import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import Faculty from "@/module/faculty/Faculty";
import Student from "@/module/student/Student";
import appClient from "@/network/appClient";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const [dashboardProfile, setDashboardProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    profilePic: null,
  });
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const showHideSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const router = useRouter();

  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

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

  return (
    <>
      <Navbar
        firstName={dashboardProfile.firstName}
        profilePic={dashboardProfile.profilePic}
        showHideSidebar={showHideSidebar}
      />
      <div className="flex">
        {toggleSidebar && <Sidebar />}
        <div>
          {user.isStudent && <Student />}
          {user.isStaff && <Faculty />}
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
