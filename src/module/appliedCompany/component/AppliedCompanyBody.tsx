import { ApplicationConstant } from "@/constant/applicationConstant";
import { AppliedCompanyDetailListType } from "@/utils/types";
import { Info, Launch } from "@mui/icons-material";
import { Chip, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AppliedCompanyBody = (props: {
  appliedCompanyDetailList: AppliedCompanyDetailListType;
}) => {
  const router = useRouter();

  const handleClickCompanyInfo = (id: string) => {
    router.push(`${ApplicationConstant.COMPANY_PATH}/${id}`);
  };

  return (
    <tbody>
      {props.appliedCompanyDetailList.results.map((item, index) => (
        <tr
          key={`company-item-index:${index}`}
          className="text-center hover:bg-gray-100"
        >
          <td className="p-2">{item.companyId.name}</td>
          <td className="p-2">
            <Link href={item.companyId.website} target="_blank">
              Open
              <Launch fontSize="small" />
            </Link>
          </td>
          <td className="p-2">{item.companyId.location}</td>
          <td className="p-2">{item.companyId.deadline}</td>
          <td className="p-2">
            {item.status === 'applied' ? (
              <Chip label={item.status.charAt(0).toUpperCase() + item.status.slice(1)} color="warning" size="medium" />
            ) : item.status === 'interviewed'? (
              <Chip label={item.status.charAt(0).toUpperCase() + item.status.slice(1)} color="info" size="medium" />
            ): (
              <Chip label={item.status.charAt(0).toUpperCase() + item.status.slice(1)} color="success" size="medium" />
            )}
            {/* <Chip label={item.status.charAt(0).toUpperCase() + item.status.slice(1)} color="success" size="medium" /> */}
          </td>
          <td className="p-2">
            <Tooltip title="More info" placement="right">
              <Info
                onClick={() => handleClickCompanyInfo(item.id)}
                className="text-2xl cursor-pointer"
              />
            </Tooltip>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default AppliedCompanyBody;
