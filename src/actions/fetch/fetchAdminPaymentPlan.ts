'use server'

import { PaymentPlan } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchAdminPaymentPlan({id}:{id:string}):Promise<ActionApiResponse<PaymentPlan>>{
    try {
        const req = await ServerRequest.get(apis.admin.getPaymentPlan(id), {
            next: {tags: [tags.payment]}
        })
        const res = await req?.json()
        console.log(res.data);
        
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}