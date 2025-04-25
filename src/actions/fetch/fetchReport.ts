'use server'

import { buildUrlQuery } from "@/functions/helpers";
import { Centers, PaymentPlanDetailed, Report } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchReport(params:Record<string,string>):Promise<ActionApiResponse<Report>>{
    try {
        const req = await ServerRequest.get(apis.admin.adminReport+buildUrlQuery(params), {   next: {tags: [tags.report]}
        })
        const res = await req?.json()
        if(res.status == 200) return res
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}
