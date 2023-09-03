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
        Company&apos;s website:{" "}
        <Link href={singleCompanyItem.website}>
          <u>{singleCompanyItem.website}</u>
        </Link>
      </p>
      <p>Company&apos;s location: {singleCompanyItem.location}</p>
      <p>Application deadline: {singleCompanyItem.deadline}</p>
      <p>Company&apos;s description: {singleCompanyItem.description}</p>
    </>
  );
};

export default StudentSingleCompanyFields;
