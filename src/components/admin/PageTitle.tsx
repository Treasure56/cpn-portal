"use client"
import { useAdminStore } from "@/state";
import { HTMLAttributes } from "react";
import { FaBars } from "react-icons/fa6";

export default function PageTitle(props: HTMLAttributes<HTMLHeadingElement>) {
    const setOpen = useAdminStore(s=>s.setSidebar);
    
    return (
        <div className="flex gap-3 items-center">
            <button onClick={()=>setOpen(true)} className="text-xl icon-btn md:hidden p-2">
                <FaBars />
            </button>
            <h3 {...props} className="heading" />
        </div>
    );
}