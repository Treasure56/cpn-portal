"use server"
import { Paginated, Staff, StaffDetailed, Students } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function adminFetchStaff(query = ''):Promise<ActionApiResponse<Paginated<StaffDetailed>>>{
    try {
        const req = await ServerRequest.get(apis.admin.getStaffs+query, {
            next: {tags: [tags.staff]}
        })
        const res = await req?.json()
        // console.log(res);
        
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}