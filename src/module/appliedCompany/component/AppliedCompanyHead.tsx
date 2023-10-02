import { AppliedCompanyDetailListType } from "@/utils/types";
import React from "react";
import AppliedCompanyBody from "./AppliedCompanyBody";
import AppliedCompanyPagination from "./AppliedCompanyPagination";

const AppliedCompanyHead = (props: {
  appliedCompanyDetailList: AppliedCompanyDetailListType;
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
        <AppliedCompanyBody appliedCompanyDetailList={props.appliedCompanyDetailList} />
      </table>
      <AppliedCompanyPagination
        count={props.count}
        page={props.page}
        rowsPerPage={props.rowsPerPage}
        setPage={props.setPage}
        setRowsPerPage={props.setRowsPerPage}
      />
    </>
  );
};

export default AppliedCompanyHead;
