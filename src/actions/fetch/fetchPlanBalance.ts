'use server'

import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchBalance({id}:{id:string}):Promise<ActionApiResponse<string>>{
    try {
        const req = await ServerRequest.get(apis.manager.getBalance(id), {
            next: {tags: [tags.balance]}
        })
        const res = await req?.json()
        console.log({resis: res});
        
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}