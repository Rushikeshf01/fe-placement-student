import { RootState } from "@/store/store";
import { Close } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

export const IsComplete = () => {
  const student = useSelector((state: RootState) => state.student);
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        {student.firstName} {student.lastName} your profile is pending, please
        complete it as soon as possible and send it to college placement team
        for verification.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};
