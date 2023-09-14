import { RootState } from "@/store/store";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StudentDocuments from "./StudentDocuments";

const StudentPersonalDetail = () => {
  const student = useSelector((state: RootState) => state.student);

  const [studentPersonalDetail, setStudentPersonalDetail] = useState({
    whatsappMobile: "",
    alternateMobile: "",
    address: "",
  });

  useEffect(() => {
    setStudentPersonalDetail({
      whatsappMobile: student.studentDetail?.whatsappMobile || "",
      alternateMobile: student.studentDetail?.alternateMobile || "",
      address: student.studentDetail?.address || "",
    });
  }, [student]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.currentTarget;
    setStudentPersonalDetail((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="m-3 mt-5">
      <div className="grid grid-cols-2 gap-2 gap-y-3.5">
        <TextField
          value={studentPersonalDetail.whatsappMobile}
          name="whatsappMobile"
          label="WhatsApp Number"
          type="number"
          onChange={handleOnChange}
          required
          fullWidth
          size="small"
        />
        <TextField
          value={studentPersonalDetail.alternateMobile}
          name="alternateMobile"
          label="Alternate Mobile"
          type="alternateMobile"
          onChange={handleOnChange}
          required
          fullWidth
          size="small"
        />
        <TextField
          value={studentPersonalDetail.address}
          name="address"
          label="Address"
          multiline
          onChange={handleOnChange}
          required
          fullWidth
          size="small"
        />
      </div>
      <StudentDocuments />
    </div>
  );
};

export default StudentPersonalDetail;
