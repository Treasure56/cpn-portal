'use server'

import { CenterDetailed, Centers } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchSingleCenter(id:string):Promise<ActionApiResponse<CenterDetailed>>{
    try {
        const req = await ServerRequest.get(apis.admin.getSingleCenter(id), {   next: {tags: [tags.center]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}