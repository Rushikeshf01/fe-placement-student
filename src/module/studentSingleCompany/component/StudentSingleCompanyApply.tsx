import { ApplicationConstant } from "@/constant/applicationConstant";
import { SingleCompanyItemType } from "@/utils/types";
import { Divider } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import React from "react";

const StudentSingleCompanyApply = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  const router = useRouter();
  const path = usePathname();
  const handleApply = () => {
    console.log(`${path}/apply`);
    router.push(`${path}/apply`);
  }
  return (
    <>
      <Divider className="my-2" />
      <button
        className={`${
          singleCompanyItem.isClosed
            ? "cursor-not-allowed"
            : "hover:bg-cyan-500"
        } p-2 px-8 rounded-full text-white text-md font-semibold bg-cyan-400`}
        onClick = {handleApply}
      >
        Apply
      </button>
    </>
  );
};

export default StudentSingleCompanyApply;
