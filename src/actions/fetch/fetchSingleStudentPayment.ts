'use server'

import {  Manager, Payments } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchSingleStudentPayment():Promise<ActionApiResponse<Payments[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getManagers, {
            next: {tags: [tags.payment]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}