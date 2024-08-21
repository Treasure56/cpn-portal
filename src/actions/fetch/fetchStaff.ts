"use server"
import { Paginated, Staff, Students } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchStaff():Promise<ActionApiResponse<Staff[]>>{
    try {
        const req = await ServerRequest.get(apis.manager.getStaff, {
            next: {tags: [tags.staff]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}