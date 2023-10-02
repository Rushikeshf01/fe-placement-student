import React, { useEffect, useState } from "react";
import { ApiConstant } from "@/constant/applicationConstant";
import authClient from "@/network/authClient";
import { AppliedCompanyDetailListType } from "@/utils/types";
import { NotAvailable } from "@/commonComponents/alert/Alerts";
import AppliedCompanyHead from "./component/AppliedCompanyHead";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const AppliedCompany = (props: {
  rowsPerPage: number;
  isClosed: string;
}) => {
  
  const student = useSelector((state:RootState) => state.student);
  
  const [appliedCompanyDetailList, setAppliedCompanyDetailList] =
    useState<AppliedCompanyDetailListType>();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(props.rowsPerPage);
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("isClosed");

  useEffect(() => {
    getAppliedCompanyList();
    console.log(student.studentDetail?.id);
    
  }, [page, rowsPerPage, filterValue]);

  const getAppliedCompanyList = async () => {
    const res = await authClient.get(
      `${ApiConstant.GET_APPLIED_COMPANY}?studentApplication=${student.studentDetail?.id}&page=${
        page + 1
      }&pagesize=${rowsPerPage}&search=${searchValue}&ordering=${filterValue}&isClosed=${
        props.isClosed
      }`
    );
    setAppliedCompanyDetailList(res.data);
    setCount(res.data.count);
  };

  return (
    <>
      {appliedCompanyDetailList && appliedCompanyDetailList.results.length !== 0 ? (
        <AppliedCompanyHead
          appliedCompanyDetailList={appliedCompanyDetailList}
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

export default AppliedCompany;
