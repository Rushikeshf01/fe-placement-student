import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const StudentProfile = () => {
  const [studentAccountDetail, setStudentAccountDetail] = useState();
  const [studentPersonalDetail, setStudentPersonalDetail] = useState();
  const [studentCollegeDetail, setStudentCollegeDetail] = useState();
  const [studentSchoolDetail, setStudentSchoolDetail] = useState();

  const student = useSelector((state: RootState) => state.student);
  return (
    <>
      <div>
        <p className="m-3 text-xl font-semibold">ACCOUNT DETAIL</p>
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">PERSONAL DETAIL</p>
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">COLLEGE DETAIL</p>
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">SCHOOL DETAIL</p>
      </div>
    </>
  );
};

export default StudentProfile;
