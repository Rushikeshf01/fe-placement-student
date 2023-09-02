import { RootState } from "@/store/store";
import { Close } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";

export const AlertForStudent = (props: {
  completeAlert?: boolean;
  verifyAlert?: boolean;
  blockAlert?: boolean;
}) => {
  const student = useSelector((state: RootState) => state.student);

  return (
    <div>
      {props.completeAlert && (
        <IsCompleteForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
      {props.verifyAlert && (
        <IsVerifyForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
      {props.blockAlert && (
        <IsBlockForStudent
          name={`${student.firstName.toUpperCase()} ${student.lastName.toUpperCase()}`}
        />
      )}
    </div>
  );
};

export const AlertForFaculty = (props: { completeAlert?: boolean }) => {
  const faculty = useSelector((state: RootState) => state.faculty);

  return (
    <div>
      {props.completeAlert && (
        <IsCompleteForFaculty
          name={`${faculty.firstName.toUpperCase()} ${faculty.lastName.toUpperCase()}`}
        />
      )}
    </div>
  );
};

const IsCompleteForStudent = (props: { name: string }) => {
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        <span className="font-semibold">{props.name}</span> your profile is
        pending, please complete it as soon as possible and send it to college
        placement team for verification.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};

const IsVerifyForStudent = (props: { name: string }) => {
  return (
    <div className="w-full flex justify-between p-2 text-white bg-yellow-500">
      <div className="p-3">
        <span className="font-semibold">{props.name}</span> your profile is not
        verified yet, please wait for verification after that you are eligible
        to participate in campus drives.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};

const IsBlockForStudent = (props: { name: string }) => {
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        <span className="font-semibold">{props.name}</span> your profile is
        blocked by TPO cell, please contact TPO cell to unblock your profile.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};

const IsCompleteForFaculty = (props: { name: string }) => {
  return (
    <div className="w-full flex justify-between p-2 text-white bg-red-500">
      <div className="p-3">
        <span className="font-semibold">{props.name}</span> your profile is
        pending, please complete it as soon as possible.
      </div>
      <Close className="cursor-pointer" />
    </div>
  );
};
