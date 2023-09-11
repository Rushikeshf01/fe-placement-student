import { SingleCompanyItemType } from "@/utils/types";
import { Chip } from "@mui/material";
import React from "react";
import StudentSingleCompanyFields from "./StudentSingleCompanyFields";
import StudentSingleCompanyFiles from "./StudentSingleCompanyFiles";
import StudentSingleCompanyApply from "./StudentSingleCompanyApply";

const StudentSingleCompanyItem = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  return (
    <div className="p-2 leading-8">
      <div className="flex items-center">
        <p className="text-xl mr-2 font-semibold">
          {`${singleCompanyItem.name.toUpperCase()} Campus Drive`}
        </p>
        <Chip
          label={singleCompanyItem.isClosed ? "Closed" : "Open"}
          color={singleCompanyItem.isClosed ? "error" : "success"}
          size="small"
        />
      </div>
      <StudentSingleCompanyFields singleCompanyItem={singleCompanyItem} />
      <StudentSingleCompanyFiles singleCompanyItem={singleCompanyItem} />
      <StudentSingleCompanyApply singleCompanyItem={singleCompanyItem} />
    </div>
  );
};

export default StudentSingleCompanyItem;
