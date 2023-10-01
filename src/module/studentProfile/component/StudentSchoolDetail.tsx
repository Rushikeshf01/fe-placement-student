import { RootState } from "@/store/store";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const StudentSchoolDetail = () => {
  const student = useSelector((state: RootState) => state.student);

  const [studentSchoolDetail, setStudentSchoolDetail] = useState({
    schoolMedium: "",
    twelvePercent: "",
    diplomaPercent: "",
    tenPercent: "",
  });

  useEffect(() => {
    setStudentSchoolDetail({
      schoolMedium: student.studentDetail?.schoolMedium || "",
      twelvePercent: student.studentDetail?.twelvePercent || "",
      diplomaPercent: student.studentDetail?.diplomaPercent || "",
      tenPercent: student.studentDetail?.tenPercent || "",
    });
  }, [student]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setStudentSchoolDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="m-3 mt-5 grid grid-cols-2 gap-2 gap-y-3.5">
      <TextField
        value={studentSchoolDetail.schoolMedium}
        name="schoolMedium"
        label="Schooling Medium"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentSchoolDetail.tenPercent}
        name="tenPercent"
        label="Ten Percentange"
        onChange={handleOnChange}
        required
        fullWidth
        size="small"
      />
      <TextField
        value={studentSchoolDetail.twelvePercent}
        name="twelvePercent"
        label="Twelve Percentange"
        onChange={handleOnChange}
        fullWidth
        size="small"
      />
      <TextField
        value={studentSchoolDetail.diplomaPercent}
        name="diplomaPercent"
        label="Diploma Percentange"
        onChange={handleOnChange}
        fullWidth
        size="small"
      />
    </div>
  );
};

export default StudentSchoolDetail;
