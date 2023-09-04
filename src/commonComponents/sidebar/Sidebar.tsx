"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Business,
  ExpandLess,
  ExpandMore,
  Home,
  Person,
} from "@mui/icons-material";
import { NestedSidebarProps, SidebarRoutesType } from "@/utils/types";
import { ApplicationConstant } from "@/constant/applicationConstant";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const studentSidebarRoutes: SidebarRoutesType[] = [
  {
    path: ApplicationConstant.STUDENT_DASHBOARD_PATH,
    state: "Home",
    icon: <Home />,
  },
  {
    state: "Profile",
    icon: <Person />,
    path: ApplicationConstant.STUDENT_PROFILE_PATH,
  },
  {
    path: ApplicationConstant.STUDENT_COMPANY_PATH,
    state: "Company",
    icon: <Business />,
  },
];

const facultySidebarRoutes: SidebarRoutesType[] = [
  {
    path: ApplicationConstant.FACULTY_DASHBOARD_PATH,
    state: "Home",
    icon: <Home />,
  },
  {
    state: "Profile",
    icon: <Person />,
    path: ApplicationConstant.FACULTY_PROFILE_PATH,
  },
  {
    state: "Company",
    icon: <Business />,
    child: [{ state: "Add Company", path: "" }],
  },
  // {
  //   path: "/applied",
  //   state: "Applied",
  //   icon: <ApprovalIcon />,
  // },
  // {
  //   path: "/about",
  //   state: "About",
  //   icon: <InfoIcon />,
  // },
];

const Sidebar = () => {
  const authClient = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="fixed left-0 w-[200px] h-screen p-2 bg-gray-100">
      {authClient.isStudent &&
        studentSidebarRoutes.map((item, index) => (
          <SidebarItem key={`sidebar-item-index:${index}`} item={item} />
        ))}
      {authClient.isStaff &&
        facultySidebarRoutes.map((item, index) => (
          <SidebarItem key={`sidebar-item-index:${index}`} item={item} />
        ))}
    </div>
  );
};

const SidebarItem = (props: { item: SidebarRoutesType }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handelNestedRoutes = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Link
        href={props.item.path ? props.item.path : ""}
        className="flex m-2 p-3 px-7 hover:bg-gray-200 hover:rounded-md"
      >
        {props.item.icon}
        <p className="mx-2 ">{props.item.state}</p>
        <p onClick={handelNestedRoutes}>
          {props.item.child && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
        </p>
      </Link>
      {props.item.child && isExpanded && (
        <NestedSidebar subRoutes={props.item.child} />
      )}
    </div>
  );
};

const NestedSidebar = (props: { subRoutes: NestedSidebarProps[] }) => {
  return (
    <>
      {props.subRoutes.map((item, index) => (
        <div key={`sidebar-nested-route-index:${index}`}>
          <Link
            href={item.path}
            className="block m-2 ml-6 p-2 text-center hover:bg-gray-200 hover:rounded-md"
          >
            {item.state}
          </Link>
        </div>
      ))}
    </>
  );
};

export default Sidebar;
