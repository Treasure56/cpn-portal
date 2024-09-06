'use server'

import {  Manager, PaymentsDetailed, PaymentsDetailedlus } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function adminFetchSingleStudentPayment(id:string):Promise<ActionApiResponse<PaymentsDetailedlus[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getSingleStudentPayments(id), {
            next: {tags: [tags.payment]}
        })
        const res = await req?.json()
        console.log({res});
        
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}