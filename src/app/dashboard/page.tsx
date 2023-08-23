"use client"

import { ApplicationConstant } from "@/constant/applicationConstant";
import { initializeAuthData } from "@/network/authClient";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  
  useEffect(() => {
    getAuthenticationStatus();
    if (isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  }, []);

  const getAuthenticationStatus = async () => {
    await initializeAuthData();
  };
  return <div>Dashboard</div>;
};

export default DashboardPage;
