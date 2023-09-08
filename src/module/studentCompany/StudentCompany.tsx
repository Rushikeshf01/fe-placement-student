import { ApiConstant } from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { CompanyDetailListType } from "@/utils/types";
import { Divider, TablePagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import StudentCompanyHead from "./component/StudentCompanyHead";
import StudentCompanyBody from "./component/StudentCompanyBody";
import { NotAvailable } from "@/commonComponents/alert/Alerts";
import StudentCompanyFilter from "./component/StudentCompanyFilter";

const StudentCompany = (props: { rowsPerPage: number; isFilterBar?: true }) => {
  const [companyDetailList, setCompanyDetailList] =
    useState<CompanyDetailListType>();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getCompanyList();
  }, [page, rowsPerPage]);

  const getCompanyList = async () => {
    const res = await authClient.get(
      `${ApiConstant.GET_COMPANY_DETAIL}?page=${
        page + 1
      }&pagesize=${rowsPerPage}&search=${searchValue}&ordering=isClosed`
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

  return (
    <>
      {props.isFilterBar && (
        <StudentCompanyFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          getCompanyList={getCompanyList}
        />
      )}
      {companyDetailList ? (
        <>
          <table className="w-full">
            <StudentCompanyHead />
            <StudentCompanyBody companyDetailList={companyDetailList} />
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
            className="mx-2"
          />
        </>
      ) : (
        <NotAvailable label="Company details" />
      )}
    </>
  );
};

export default StudentCompany;
