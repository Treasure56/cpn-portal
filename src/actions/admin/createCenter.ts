"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object ({
   name: validators.min3,
   location: validators.min3,
   code: validators.min3

})
type FormType = z.infer<typeof schema>


export async function createCenter(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}

    try {
        const req = await ServerRequest.post(apis.admin.createCenter,data)
        const res:ApiResponse = await req?.json()
        if(res.status == 201){
            revalidateTag(tags.center)
            return {success: "Center created"}
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    return {}
}
