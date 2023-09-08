import { CompanyDetailListType } from "@/utils/types";
import React from "react";
import StudentCompanyBody from "./StudentCompanyBody";
import StudentCompanyPagination from "./StudentCompanyPagination";

const StudentCompanyHead = (props: {
  companyDetailList: CompanyDetailListType;
  count: number;
  page: number;
  rowsPerPage: number;
  setPage: any;
  setRowsPerPage: any;
}) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Name</th>
            <th className="p-2">Website</th>
            <th className="p-2">Location</th>
            <th className="p-2">Deadline</th>
            <th className="p-2">Status</th>
            <th className="p-2">More info</th>
          </tr>
        </thead>
        <StudentCompanyBody companyDetailList={props.companyDetailList} />
      </table>
      <StudentCompanyPagination
        count={props.count}
        page={props.page}
        rowsPerPage={props.rowsPerPage}
        setPage={props.setPage}
        setRowsPerPage={props.setRowsPerPage}
      />
    </>
  );
};

export default StudentCompanyHead;
