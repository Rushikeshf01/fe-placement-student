"use client";

import React, { useEffect } from "react";
import Login from "@/module/login/Login";
import { useRouter } from "next/navigation";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { initializeAuthData } from "@/network/authClient";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    getAuthenticationStatus();
  }, []);

  const getAuthenticationStatus = async () => {
    const status = await initializeAuthData();
    if (status) {
      router.push(ApplicationConstant.DASHBOARD_PATH);
    } else {
      router.push(ApplicationConstant.LOGIN_PATH);
    }
  };

  return <Login />;
}
