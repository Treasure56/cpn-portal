'use server'

import { ManagerDetailed } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function adminFetchSigleManager(id:string):Promise<ActionApiResponse<ManagerDetailed>>{
    try {
        const req = await ServerRequest.get(apis.admin.fetchSingleManager(id), {
            next: {tags: [tags.manager]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data.manager
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}