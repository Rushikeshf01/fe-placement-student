import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SingleCompanyItemType } from "@/utils/types";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { Divider } from "@mui/material";
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
      <button
        className={`${
          singleCompanyItem.isClosed
            ? "cursor-not-allowed"
            : "hover:bg-cyan-500"
        } p-2 px-8 rounded-full text-white text-md font-semibold bg-cyan-400`}
        onClick={() => setOpen(!open)}
      >
        Apply
      </button>
      <StudentCompanyApplyPopup
        open={open}
        setOpen={setOpen}
        singleCompanyItem={singleCompanyItem}
      />
    </>
  );
};

export default StudentSingleCompanyApply;
