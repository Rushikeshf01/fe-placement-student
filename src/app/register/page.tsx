"use client";

import React, { useEffect } from "react";
import Register from "@/module/register/Register";
import { initializeAuthData } from "@/network/authClient";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    getAuthenticationStatus();
    if (isAuthenticated) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.REGISTER_PATH);
    }
  }, []);

  const getAuthenticationStatus = async () => {
    await initializeAuthData();
  };

  return <Register />;
}
