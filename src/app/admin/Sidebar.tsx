'use client'

import Image from "next/image";
import SidebarLink, { SidebarLinkProps } from "./SidebarLink";
// import AppIcons from "@/components/AppIcons";
import { paths } from "@/utils";
import { AppLogo } from "@/components/navbar";
import { FaBookOpen, FaMoneyBill, FaX } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { useAdminStore } from "@/state";
import { Admin } from "@/types/";
import { IoGrid, IoSettingsOutline } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Avatar } from "@radix-ui/themes";
import { PiInvoiceFill, PiStudent, PiUsersFourBold } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";

export default function Sidebar({admin}:{admin: Admin}) {
    const pathname = usePathname();
    const {sidebarOpen:open, setSidebar:setOpen, setAdmin, admin:_admin} = useAdminStore();

    useLayoutEffect(()=>{
        setAdmin(admin);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [admin]);
    
    useEffect(()=>{
        setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    
    return (
        <div className={`w-full flex flex-col gap-4 fixed md:sticky bg-light top-0 left-0 h-screen p-4 overflow-y-auto transition-transform ${open ? 'max-md:translate-x-0' : 'max-md:translate-x-[-110%]'}`}>
            <div className="flex justify-between items-center">
            <AppLogo />
            <button onClick={()=>setOpen(false)} className="text-xl icon-btn md:hidden p-2">
                <FaX />
            </button>
            </div>
            <div className="flex gap-2 border rounded-md p-2 justify-stretch">
            <Avatar variant="solid" color="gray" fallback={_admin?.email[0].toUpperCase()??"?"} />
                <div className=" overflow-hidden">
                    <h2 className="text-neutral-500 font-semibold line-clamp-1 w-full text-base">{_admin?.email}</h2>
                    <p className="text-neutral-400 text-sm">Admin User</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    links.map(link =>
                        <SidebarLink
                            key={link.href}
                            {...link}
                        />
                    )
                }
            </div>
        </div>
    );
}


const links: SidebarLinkProps[] = [
    {
        title: "Overview",
        icon: <IoGrid />,
        href: paths.admin,
    },
    {
        title: "Managers",
        icon: <GrUserManager />,
        href: paths.adminManagers,
    },
    {
        title: "Staff",
        icon: <PiUsersFourBold />,
        href: paths.adminStaff,
    },
    {
        title: "Students",
        icon: <PiStudent />,
        href: paths.adminStudents,
    },
    {
        title: "Courses",
        icon: <FaBookOpen />,
        href: paths.adminCourses,
    },
    {
        title: "Payments",
        icon: <FaMoneyBill />,
        href: paths.adminPayments,
    },
    // {
    //     title: "Invoices",
    //     icon: <PiInvoiceFill />,
    //     href: paths.admininvoices,
    // },
    {
        title: "Settings",
        icon: <IoSettingsOutline />,
        href: paths.adminChangePassword,
    },
    
    {
        className: "admin-side-link-logout mt-10",
        title: "Log out",
        icon: <BiLogOut />,
        href: paths.logout,
    },
]