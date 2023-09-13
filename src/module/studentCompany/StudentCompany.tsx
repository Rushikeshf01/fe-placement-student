import React, { useEffect, useState } from "react";
import { ApiConstant } from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { CompanyDetailListType } from "@/utils/types";
import { NotAvailable } from "@/commonComponents/alert/Alerts";
import StudentCompanyHead from "./component/StudentCompanyHead";
import StudentCompanyFilter from "./component/StudentCompanyFilter";

const StudentCompany = (props: { rowsPerPage: number; isFilterBar?: true }) => {
  const [companyDetailList, setCompanyDetailList] =
    useState<CompanyDetailListType>();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("isClosed");

  useEffect(() => {
    getCompanyList();
  }, [page, rowsPerPage, filterValue]);

  const getCompanyList = async () => {
    const res = await authClient.get(
      `${ApiConstant.GET_COMPANY_DETAIL}?page=${
        page + 1
      }&pagesize=${rowsPerPage}&search=${searchValue}&ordering=${filterValue}`
    );
    setCompanyDetailList(res.data);
    setCount(res.data.count);
  };

  return (
    <>
      {props.isFilterBar && (
        <StudentCompanyFilter
          searchValue={searchValue}
          filterValue={filterValue}
          setSearchValue={setSearchValue}
          setFilterValue={setFilterValue}
          getCompanyList={getCompanyList}
        />
      )}
      {companyDetailList && companyDetailList.results.length !== 0 ? (
        <StudentCompanyHead
          companyDetailList={companyDetailList}
          count={count}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
        />
      ) : (
        <NotAvailable label="Company details" />
      )}
    </>
  );
};

export default StudentCompany;
