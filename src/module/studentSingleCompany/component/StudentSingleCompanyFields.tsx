import { SingleCompanyItemType } from "@/utils/types";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const StudentSingleCompanyFields = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  return (
    <>
      <Divider className="my-2" />
      <p>
        <span className="font-semibold">Company&apos;s website: </span>
        <Link href={singleCompanyItem.website} target="_blank">
          <u>{singleCompanyItem.website}</u>
        </Link>
      </p>
      <p>
        <span className="font-semibold">Company&apos;s location: </span>
        {singleCompanyItem.location}
      </p>
      <p>
        <span className="font-semibold">Application deadline: </span>
        {singleCompanyItem.deadline}
      </p>
      <p>
        <span className="font-semibold">Company&apos;s description: </span>
        {singleCompanyItem.description}
      </p>
    </>
  );
};

export default StudentSingleCompanyFields;
