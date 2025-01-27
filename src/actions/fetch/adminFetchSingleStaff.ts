'use server'

import { Paginated, Staff, StaffDetailed, Students } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function adminFetchSingleStaff(id:string):Promise<ActionApiResponse<StaffDetailed>>{
    try {
        const req = await ServerRequest.get(apis.admin.getSingleStaff(id), {
            next: {tags: [tags.student]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}