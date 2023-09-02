"use client";

import React, { useState } from "react";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from "@mui/icons-material/Business";
import ApprovalIcon from "@mui/icons-material/Approval";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoIcon from "@mui/icons-material/Info";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import style from "./sidebar.module.css";
import { SidebarRoutesType } from "@/utils/types";
import NestedSidebar from "./NestedSidebar";

const sidebarRoutes: SidebarRoutesType[] = [
  {
    path: "/home",
    state: "Home",
    icon: <HomeIcon />,
  },
  {
    path: "/dashboard",
    state: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    state: "Student",
    icon: <PersonIcon />,
    child: [
      {
        path: "/verify-student",
        state: "Verify Student",
      },
      {
        path: "/show-student",
        state: "Show Student",
      },
    ],
  },
  {
    path: "/company",
    state: "Company's",
    icon: <BusinessIcon />,
  },
  {
    path: "/applied",
    state: "Applied",
    icon: <ApprovalIcon />,
  },
  {
    path: "/placed",
    state: "Placed",
    icon: <PeopleAltIcon />,
  },
  {
    path: "/about",
    state: "About",
    icon: <InfoIcon />,
  },
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handelNestedRoutes = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-screen w-full p-2 bg-gray-100 z-10">
      {sidebarRoutes.map((item, index) => (
        <div key={`sidebar-index:${index}`}>
          <Link
            href={item.path ? item.path : ""}
            className="flex m-2 p-3 px-7 hover:bg-gray-200 hover:rounded-md"
          >
            {item.icon}
            <p className="mx-2 ">{item.state}</p>
            <p onClick={handelNestedRoutes}>
              {item.child && (isExpanded ? <ExpandLess /> : <ExpandMore />)}
            </p>
          </Link>
          {item.child && isExpanded && <NestedSidebar subRoutes={item.child} />}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
