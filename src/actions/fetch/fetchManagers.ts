'use server'

import {  Manager } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchManagers():Promise<ActionApiResponse<Manager[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getManagers, {
            next: {tags: [tags.manager]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data.managers
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}