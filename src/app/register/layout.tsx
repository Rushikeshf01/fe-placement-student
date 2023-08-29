import Image from "next/image";
import React from "react";
import logo from "../../../public/sou-logo.png";
import Slideshow from "@/commonComponents/slideshow/Slideshow";

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-center	items-center h-screen">
        <div className="w-1/3 h-screen p-7 bg-gray-100">
          <Image src={logo} alt="Silver Oak University" className="w-[350px]" />
          {children}
        </div>
        <Slideshow />
      </div>
    </div>
  );
};

export default RegisterLayout;
