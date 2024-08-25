'use server'

import { Centers, Invoice } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchInvoice(query = ''):Promise<ActionApiResponse<Invoice[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getCenter+query, {   next: {tags: [tags.center]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}