import {
  ApiConstant,
  ApplicationConstant,
} from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { CompanyDetailListType } from "@/utils/types";
import { Info } from "@mui/icons-material";
import { Chip, Divider, TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";

const StudentCompany = () => {
  const [companyDetailList, setCompanyDetailList] =
    useState<CompanyDetailListType>();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    getCompanyList();
  }, [page, rowsPerPage]);

  const getCompanyList = async () => {
    const res = await authClient.get(
      `${ApiConstant.GET_COMPANY_DETAIL}?page=${
        page + 1
      }&pagesize=${rowsPerPage}&ordering=isClosed`
    );
    setCompanyDetailList(res.data);
    setCount(res.data.count);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handleClickCompanyInfo = (id: string) => {
    // Push student to /dashboard/student/company/:id
  };

  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-red-100">
            <th className="p-2">Name</th>
            <th className="p-2">Website</th>
            <th className="p-2">Location</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Status</th>
            <th className="p-2">More info</th>
          </tr>
        </thead>
        <tbody>
          {companyDetailList &&
            companyDetailList.results.map((item, index) => (
              <tr key={`company-item-index:${index}`} className="text-center">
                <td className="p-2">{item.name}</td>
                <td className="p-2">{item.website}</td>
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
                  <Info
                    onClick={() => handleClickCompanyInfo(item.id)}
                    className="text-2xl cursor-pointer"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Divider className="mt-2" />
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default StudentCompany;
