import { SingleCompanyItemType } from "@/utils/types";
import { Divider } from "@mui/material";
import React from "react";

const StudentSingleCompanyApply = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  return (
    <>
      <Divider className="my-2" />
      <button
        className={`${
          singleCompanyItem.isClosed
            ? "cursor-not-allowed"
            : "hover:bg-cyan-500"
        } p-2 px-8 rounded-full text-white text-md font-semibold bg-cyan-400`}
      >
        Apply
      </button>
    </>
  );
};

export default StudentSingleCompanyApply;
