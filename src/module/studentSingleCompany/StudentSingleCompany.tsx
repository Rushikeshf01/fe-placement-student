"use client";

import { NotAvailable } from "@/commonComponents/alert/Alerts";
import { ApiConstant } from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { SingleCompanyItemType } from "@/utils/types";
import { Launch } from "@mui/icons-material";
import { Chip, Divider } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StudentSingleCompany = (props: { companyId: string }) => {
  const [singleCompanyItem, setSingleCompanyItem] =
    useState<SingleCompanyItemType>();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  useEffect(() => {
    getSingleCompany();
  }, []);

  const getSingleCompany = async () => {
    const res = await authClient.get(
      `${ApiConstant.GET_COMPANY_DETAIL}${props.companyId}`
    );
    setSingleCompanyItem(res.data);
  };

  return (
    <div>
      {singleCompanyItem ? (
        <div className="p-2 leading-7">
          <div className="flex items-center">
            <p className="text-xl mr-2 font-semibold">
              {singleCompanyItem.name} campus drive
            </p>
            <Chip
              label={singleCompanyItem.isClosed ? "Closed" : "Open"}
              color={singleCompanyItem.isClosed ? "error" : "success"}
              size="small"
            />
          </div>
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
        </div>
      ) : (
        <NotAvailable label="Company details" />
      )}
    </div>
  );
};

export default StudentSingleCompany;
