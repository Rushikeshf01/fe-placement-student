import { Divider, TablePagination } from "@mui/material";
import React from "react";

const StudentCompanyPagination = (props: {
  count: number;
  page: number;
  rowsPerPage: number;
  setPage: any;
  setRowsPerPage: any;
}) => {
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    props.setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    props.setRowsPerPage(parseInt(event.target.value));
    props.setPage(0);
  };

  return (
    <>
      <Divider className="mt-2" />
      <TablePagination
        component="div"
        count={props.count}
        page={props.page}
        onPageChange={handleChangePage}
        rowsPerPage={props.rowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="mx-2"
      />
    </>
  );
};

export default StudentCompanyPagination;
