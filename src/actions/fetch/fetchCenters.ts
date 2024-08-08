'use server'

import { Centers } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchCenters():Promise<ActionApiResponse<Centers[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getCenter, {   next: {tags: [tags.center]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data.centers
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}