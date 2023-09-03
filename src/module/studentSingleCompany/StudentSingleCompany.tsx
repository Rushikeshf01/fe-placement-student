import { NotAvailable } from "@/commonComponents/alert/Alerts";
import { ApiConstant } from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { SingleCompanyItemType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import StudentSingleCompanyItem from "./component/StudentSingleCompanyItem";

const StudentSingleCompany = (props: { companyId: string }) => {
  const [singleCompanyItem, setSingleCompanyItem] =
    useState<SingleCompanyItemType>();

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
        <StudentSingleCompanyItem singleCompanyItem={singleCompanyItem} />
      ) : (
        <NotAvailable label="Company details" />
      )}
    </div>
  );
};

export default StudentSingleCompany;
