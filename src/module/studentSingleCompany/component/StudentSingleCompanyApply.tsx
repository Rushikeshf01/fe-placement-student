"use client";

import React, { useState } from "react";
import { SingleCompanyItemType } from "@/utils/types";
import { Button, Divider } from "@mui/material";
import StudentCompanyApplyPopup from "./StudentCompanyApplyPopup";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const StudentSingleCompanyApply = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  const [open, setOpen] = useState(false);
  const isComplete = useSelector((state: RootState) => state.student.studentDetail?.isCompleted);
  const isVerified = useSelector((state: RootState) => state.student.studentDetail?.isVerified);
  const isBlocked = useSelector((state: RootState) => state.student.studentDetail?.isBlocked);

  return (
    <>
      <Divider className="my-2" />
      <Button
        className={singleCompanyItem.isClosed ? "cursor-not-allowed" : ""}
        disabled={singleCompanyItem.isClosed || isBlocked || !isComplete || !isVerified}
        onClick={() => setOpen(!open)}
        variant="contained"
      >
        Apply
      </Button>
      <StudentCompanyApplyPopup
        open={open}
        setOpen={setOpen}
        singleCompanyItem={singleCompanyItem}
      />
    </>
  );
};

export default StudentSingleCompanyApply;
