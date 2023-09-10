import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SingleCompanyItemType } from "@/utils/types";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { Button, Divider } from "@mui/material";
import StudentCompanyApplyPopup from "./StudentCompanyApplyPopup";

const StudentSingleCompanyApply = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleStudentCompanyApply = (id: string) => {
    router.push(`${ApplicationConstant.STUDENT_COMPANY_PATH}/${id}/apply`);
  };

  return (
    <>
      <Divider className="my-2" />
      <Button
        className={singleCompanyItem.isClosed ? "cursor-not-allowed" : ""}
        disabled={singleCompanyItem.isClosed}
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
