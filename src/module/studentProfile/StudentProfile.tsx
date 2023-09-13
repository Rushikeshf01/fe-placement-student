import React, { useState } from "react";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import StudentAccountDetail from "./component/StudentAccountDetail";

const StudentProfile = () => {
  const [studentPersonalDetail, setStudentPersonalDetail] = useState();
  const [studentCollegeDetail, setStudentCollegeDetail] = useState();
  const [studentSchoolDetail, setStudentSchoolDetail] = useState();

  const student = useSelector((state: RootState) => state.student);
  return (
    <>
      <div>
        <p className="m-3 text-xl font-semibold">Account Detail</p>
        <StudentAccountDetail />
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">Personal Detail</p>
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">College Detail</p>
      </div>
      <Divider />
      <div>
        <p className="m-3 text-xl font-semibold">School Detail</p>
      </div>
    </>
  );
};

export default StudentProfile;
