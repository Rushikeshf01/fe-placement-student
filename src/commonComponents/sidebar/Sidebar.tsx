"use client"

import React, { useState } from "react"
import Link from "next/link";

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import ApprovalIcon from '@mui/icons-material/Approval';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import style from "./sidebar.module.css"
import { SidebarRoutesType } from "@/utils/types";
import NestedSidebar from "./NestedSidebar";

const sidebarRoutes: SidebarRoutesType[] = [
    {
        path: "/home",
        state: "Home",
        icon: <HomeIcon />
    },
    {
        path: "/dashboard",
        state: "Dashboard",
        icon: <DashboardIcon />
    },
    {
        path: "/dashboard",
        state: "Student",
        icon: <PersonIcon />,
        child: [{
            path: "/verify-student",
            state: "Verify Student",
        },
        {
            path: "/show-student",
            state: "Show Student",
        }],
    },
    {
        path: "/company",
        state: "Company's",
        icon: <BusinessIcon />
    },
    {
        path: "/applied",
        state: "Applied",
        icon: <ApprovalIcon />
    },
    {
        path: "/placed",
        state: "Placed",
        icon: <PeopleAltIcon />
    },
    {
        path: "/about",
        state: "About",
        icon: <InfoIcon />

    },
]
const Sidebar = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handelNestedRoutes = () => {
        if (isExpanded) {
            setIsExpanded(false)
        }
        else {
            setIsExpanded(true)

        }
    }

    const renderSidebarItems = (items: SidebarRoutesType[]) => {
        return items.map((route, index) => (
            <div key={index}>
                <Link
                    href={route.path}
                    className={`${style.items}`} key={index}>
                    {route.icon}
                    <p className="flex">
                        {route.state}
                        {route.child && (isExpanded ? <ExpandLess onClick={handelNestedRoutes} /> : <ExpandMore onClick={handelNestedRoutes} />)}
                    </p>
                </Link>
                {route.child && isExpanded ? (
                    <NestedSidebar key={index} subRoutes={route.child} />
                ) : ""}
            </div>
        ));
    };


    return (
        <div className={`${style.sidebar}`}>
            {renderSidebarItems(sidebarRoutes)}
        </div>

    )
}

export default Sidebar