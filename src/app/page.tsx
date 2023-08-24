"use client";

import { ApplicationConstant } from "@/constant/applicationConstant";
import { initializeAuthData } from "@/network/authClient";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
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
  return <div></div>;
}
