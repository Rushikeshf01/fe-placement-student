"use client";

import { RootState } from "@/store/store";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const studentAccountField = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
  },
  {
    label: "Mobile Number",
    name: "mobile",
    type: "number",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
  },
];

const StudentAccountDetail = () => {
  const student = useSelector((state: RootState) => state.student);

  const [studentAccountDetail, setStudentAccountDetail] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    setStudentAccountDetail({
      firstName: student.firstName,
      lastName: student.lastName,
      mobile: student.mobile,
      email: student.email,
    });
  }, [student]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setStudentAccountDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="m-3 mt-5 grid grid-cols-2 gap-2 gap-y-3.5">
      {studentAccountField.map((item, index) => (
        <TextField
          value={(studentAccountDetail as any)[item.name]}
          name={item.name}
          label={item.label}
          type={item.type}
          key={`student-profile-account-index:${index}`}
          onChange={handleOnChange}
          required
          fullWidth
          size="small"
        />
      ))}
    </div>
  );
};

export default StudentAccountDetail;
