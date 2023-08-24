"use client";

import React, { useEffect } from "react";
import Register from "@/module/register/Register";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { useRouter } from "next/navigation";
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
      router.push(ApplicationConstant.REGISTER_PATH);
    }
  };

  return <Register />;
}
