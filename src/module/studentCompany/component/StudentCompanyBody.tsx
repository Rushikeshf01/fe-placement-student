import { ApplicationConstant } from "@/constant/applicationConstant";
import { CompanyDetailListType } from "@/utils/types";
import { Info, Launch } from "@mui/icons-material";
import { Chip, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const StudentCompanyBody = (props: {
  companyDetailList: CompanyDetailListType;
}) => {
  const router = useRouter();

  const handleClickCompanyInfo = (id: string) => {
    router.push(`${ApplicationConstant.STUDENT_COMPANY_PATH}/${id}`);
  };

  return (
    <tbody>
      {props.companyDetailList.results.map((item, index) => (
        <tr
          key={`company-item-index:${index}`}
          className="text-center hover:bg-gray-100"
        >
          <td className="p-2">{item.name}</td>
          <td className="p-2">
            <Link href={item.website} target="_blank">
              Open
              <Launch fontSize="small" />
            </Link>
          </td>
          <td className="p-2">{item.location}</td>
          <td className="p-2">{item.deadline}</td>
          <td className="p-2">
            {item.isClosed ? (
              <Chip label="Closed" color="error" size="medium" />
            ) : (
              <Chip label="Open" color="success" size="medium" />
            )}
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

export default StudentCompanyBody;
