"use client"

import React from "react"
import style from "./sidebar.module.css"

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BusinessIcon from '@mui/icons-material/Business';
import ApprovalIcon from '@mui/icons-material/Approval';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InfoIcon from '@mui/icons-material/Info';

import { SidebarRoutesType } from "@/utils/types";
import Login from "@/module/login/Login";

const sidebarRoutes: SidebarRoutesType[] = [
    {
        path: "/Home",
        element: <Login />,
        state: "Home",
        sidebarProps: {
            displayText: "Home",
            icon: <HomeIcon />
        }
    },
    {
        path: "/Dashboard",
        element: <Login />,
        state: "Dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardIcon />
        }
    },
    {
        path: "/Company",
        element: <Login />,
        state: "Company's",
        sidebarProps: {
            displayText: "Company",
            icon: <BusinessIcon />
        }
    },
    {
        path: "/Applied",
        element: <Login />,
        state: "Applied",
        sidebarProps: {
            displayText: "Applied",
            icon: <ApprovalIcon />
        }
    },
    {
        path: "/Placed",
        element: <Login />,
        state: "Placed",
        sidebarProps: {
            displayText: "Placed",
            icon: <PeopleAltIcon />
        }
    },
    {
        path: "/About",
        element: <Login />,
        state: "About",
        sidebarProps: {
            displayText: "About",
            icon: <InfoIcon />
        }

    },
]
const Sidebar = () => {

    return (
        <div className={`${style.sidebar}`} >
            {/* <div className={`${style.items}`}>Home</div>
            <div className={`${style.items}`}>Company</div>
            <div className={`${style.items}`}>Applied</div>
            <div className={`${style.items}`}>Placed</div>
            <div className={`${style.items}`}>About</div> */}
                {sidebarRoutes.map((route, index) => (
                    <div className={`${style.items}`} key={index}>
                        {route.sidebarProps.icon}
                        <p>{route.state}</p> 
                    </div>
                ))}
        </div>

    )
}

export default Sidebar