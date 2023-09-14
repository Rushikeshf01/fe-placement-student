import { RootState } from "@/store/store";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentCollegeDetail = () => {
  const student = useSelector((state: RootState) => state.student);

  const [studentCollegeDetail, setStudentCollegeDetail] = useState({
    enrollmentNumber: "",
    college: "",
    branch: "",
    passingYear: 0,
    currentCGPA: "",
    currentBacklog: 0,
    totalBacklog: 0,
  });

  useEffect(() => {
    setStudentCollegeDetail({
      enrollmentNumber: student.studentDetail?.enrollmentNumber || "",
      college: student.studentDetail?.college || "",
      branch: student.studentDetail?.branch || "",
      passingYear: student.studentDetail?.passingYear || 0,
      currentCGPA: student.studentDetail?.currentCGPA || "",
      currentBacklog: student.studentDetail?.currentBacklog || 0,
      totalBacklog: student.studentDetail?.totalBacklog || 0,
    });
  }, [student]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setStudentCollegeDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="m-3 mt-5 grid grid-cols-2 gap-2 gap-y-3.5">
      <TextField
        value={studentCollegeDetail.enrollmentNumber}
        name="enrollmentNumber"
        label="Enrollment Number"
        type="number"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentCollegeDetail.passingYear}
        name="passingYear"
        label="Passing Year"
        type="number"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentCollegeDetail.currentCGPA}
        name="currentCGPA"
        label="Current CGPA"
        type="number"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentCollegeDetail.currentBacklog}
        name="currentBacklog"
        label="Current Backlog"
        type="number"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentCollegeDetail.totalBacklog}
        name="totalBacklog"
        label="Total Backlog"
        type="number"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
    </div>
  );
};

export default StudentCollegeDetail;
