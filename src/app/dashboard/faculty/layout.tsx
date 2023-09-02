"use client";

import React from "react";
import { AlertForFaculty } from "@/commonComponents/alert/Alerts";

const StudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AlertForFaculty completeAlert />
      {children}
    </div>
  );
};

export default StudentLayout;
