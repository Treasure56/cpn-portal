'use server'

import {  Manager, PaymentsDetailed } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchSingleStudentPayment(id:string):Promise<ActionApiResponse<PaymentsDetailed[]>>{
    try {
        const req = await ServerRequest.get(apis.manager.getStudentPayments(id), {
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