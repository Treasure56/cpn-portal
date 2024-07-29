'use client'

import { ActionResponse } from "@/types/basicTypes";
import { useFormStatus } from "react-dom";

export type FormMessageProps = {
    res: ActionResponse;
}

export function FormMessage({
    res
}: FormMessageProps) {
    const {pending} = useFormStatus();
    
    if(res)
    if(!pending)
    return (
        <>
        {
            res && res.error && <p className="text-red-900 bg-red-50  border border-red-800 p-2 rounded-md">{res.error}</p>
        }
        {
            res && res.success && <p className="text-green-900 bg-green-50  border border-green-800 p-2 rounded-md">{res.success}</p>
        }
        </>
    );
}