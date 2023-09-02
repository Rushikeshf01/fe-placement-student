import { Info } from "@mui/icons-material";
import { Divider, TablePagination } from "@mui/material";
import React, { useState } from "react";

const data = [
  {
    name: "Xyz",
    website: "xyz.com",
    location: "Ahmedabad",
    deadline: "05/10/2023",
    id: "xyz",
  },
];

const StudentCompany = () => {
  const [companyData, setCompanyData] = useState();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {};

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {};

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
            <th className="p-2">More info</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={`company-item-index:${index}`} className="text-center">
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.website}</td>
              <td className="p-2">{item.location}</td>
              <td className="p-2">{item.deadline}</td>
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
        count={15}
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
