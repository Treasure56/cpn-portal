"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object ({
   managerId: validators.min3
})
type FormType = z.infer<typeof schema>


export async function deleteManager(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors, error: "fix errors and ry again"}

    try {
        const req = await ServerRequest.delete(apis.admin.deleteManager(data.managerId), {})
        const res:ApiResponse = await req?.json()
        console.log({res})
        if(res.status == 200    ){
            revalidateTag(tags.manager);
            return {success: "Manager deleted successfully"} 
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    return {}
}
