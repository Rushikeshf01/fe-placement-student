import { SingleCompanyItemType } from "@/utils/types";
import { Launch } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Link from "next/link";
import React from "react";

const StudentSingleCompanyFiles = ({
  singleCompanyItem,
}: {
  singleCompanyItem: SingleCompanyItemType;
}) => {
  return (
    <>
      {singleCompanyItem.companyDocument.length !== 0 && (
        <>
          <Divider className="my-2" />
          <p className="text-lg font-medium mb-2">Attachments</p>
          <div className="flex">
            {singleCompanyItem.companyDocument.map((item, index) => (
              <Link
                href={item.document}
                target="_blank"
                key={`single-document-item-index:${index}`}
                className="flex items-center mr-3"
              >
                Document {index + 1}
                <Launch fontSize="small" />
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default StudentSingleCompanyFiles;
