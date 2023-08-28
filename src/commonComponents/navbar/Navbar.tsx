import React, { useState } from "react";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import Logo from "../../../public/sou-logo.png";

const Navbar = (props: {
  firstName: string;
  profilePic: string | null;
  showHideSidebar: any;
}) => {
  return (
    <div className="flex justify-between items-center shadow-lg	px-[20px] py-[15px]">
      <MenuRounded
        className="cursor-pointer text-4xl"
        onClick={props.showHideSidebar}
      />
      <Image src={Logo} alt="Silver Oak University" className="w-[140px]" />
      <Avatar
        alt={props.firstName}
        src={props.profilePic ? props.profilePic : undefined}
        className="cursor-pointer bg-[#01633B]"
      />
    </div>
  );
};

export default Navbar;
