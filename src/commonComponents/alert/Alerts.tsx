import { RootState } from "@/store/store";
import { Close } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

export const IsCompleteForStudent = () => {
  const student = useSelector((state: RootState) => state.student);
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        <span className="font-semibold">
          {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
        </span>{" "}
        your profile is pending, please complete it as soon as possible and send
        it to college placement team for verification.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};

export const IsCompleteForFaculty = () => {
  const faculty = useSelector((state: RootState) => state.faculty);
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        <span className="font-semibold">
          {faculty.firstName.toUpperCase()} {faculty.lastName.toUpperCase()}
        </span>{" "}
        your profile is pending, please complete it as soon as possible.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};
