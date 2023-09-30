import React, { useState } from "react";
import Image from "next/image";
import { Avatar, Tooltip } from "@mui/material";
import { Logout, MenuRounded } from "@mui/icons-material";
import Logo from "../../../public/sou-logo.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { logoutFunc } from "@/network/authClient";
import { useRouter } from "next/navigation";

const Navbar = (props: { showHideSidebar: any }) => {
  const [toggleProfileBar, setToggleProfileBar] = useState(false);

  const student = useSelector((state: RootState) => state.student);

  const handleToggleProfileBar = () => {
    setToggleProfileBar(!toggleProfileBar);
  };

  return (
    <div className="fixed w-full top-0 flex justify-between items-center px-[20px] py-[15px] bg-white shadow-md z-10">
      <Tooltip title="Menu" placement="right">
        <MenuRounded
          className="cursor-pointer text-4xl"
          onClick={props.showHideSidebar}
        />
      </Tooltip>
      <Image src={Logo} alt="Silver Oak University" className="w-[140px]" />
      <div
        onClick={handleToggleProfileBar}
        className="flex relative items-center gap-[10px] cursor-pointer"
      >
        <Avatar
          alt={student.firstName}
          src={
            student.studentDetail?.profilePic
              ? student.studentDetail?.profilePic
              : student.firstName
          }
          className="bg-[#01633B]"
        />
        <div className="font-medium">
          Welcome{" "}
          <span className="font-semibold">
            {student.firstName.toUpperCase()}
          </span>
        </div>
        {toggleProfileBar && <ProfileBar />}
      </div>
    </div>
  );
};

const ProfileBar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  return (
    <div className="w-full absolute top-[130%] p-[10px] text-center rounded-md bg-gray-100 shadow z-10">
      <div className="font-medium text-lg">
        <Link href={ApplicationConstant.PROFILE_PATH}>My Profile</Link>
      </div>
      <button
        className="mt-4 text-sm text-red-500"
        onClick={() => {
          logoutFunc();
          router.push(ApplicationConstant.LOGIN_PATH);
        }}
      >
        <Logout /> Logout
      </button>
    </div>
  );
};

export default Navbar;
