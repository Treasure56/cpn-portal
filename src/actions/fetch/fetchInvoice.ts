'use server'

import { Centers, Invoice, InvoiceDetailed, InvoiceDetailedlus } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchInvoice(query = ''):Promise<ActionApiResponse<InvoiceDetailedlus[]>>{
    try {
        const req = await ServerRequest.get(apis.manager.getInvoices+query, {   next: {tags: [tags.invoice]}
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