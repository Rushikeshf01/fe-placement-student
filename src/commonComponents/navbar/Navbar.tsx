import React from "react";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import Logo from "../../../public/sou-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Navbar = (props: { showHideSidebar: any }) => {
  const student = useSelector((state: RootState) => state.student);
  const faculty = useSelector((state: RootState) => state.faculty);

  return (
    <div className="flex justify-between items-center shadow-lg	px-[20px] py-[15px]">
      <MenuRounded
        className="cursor-pointer text-4xl"
        onClick={props.showHideSidebar}
      />
      <Image src={Logo} alt="Silver Oak University" className="w-[140px]" />
      <div className="flex items-center gap-[10px] cursor-pointer">
        <Avatar
          alt={student.firstName || faculty.firstName}
          src={
            student.studentDetail?.profilePic ||
            faculty.facultyDetail?.profilePic
              ? student.studentDetail?.profilePic ||
                faculty.facultyDetail?.profilePic
              : student.firstName || faculty.firstName
          }
          className="bg-[#01633B]"
        />
        <div className="font-medium">
          Welcome{" "}
          <span className="font-semibold">
            {student.firstName.toUpperCase() || faculty.firstName.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
