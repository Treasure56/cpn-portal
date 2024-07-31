"use client"
import { useAdminStore } from "@/state";
import { HTMLAttributes } from "react";
import { FaBars } from "react-icons/fa6";

export default function PageTitle( { className,...props}: HTMLAttributes<HTMLHeadingElement>) {
    const setOpen = useAdminStore(s=>s.setSidebar);
    
    return (
        <div className="flex gap-3 items-center justify-stretch w-full">
            <button onClick={()=>setOpen(true)} className="text-xl icon-btn md:hidden p-2 aspect-square flex-shrink-0">
                <FaBars />
            </button>
            <h3 {...props} className={`heading ${className}`}/>
        </div>
    );
}