"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object ({
   fullname: validators.min3,
   email: validators.min3,
   phone: validators.phone,
   courses: z.string(),
   salary: validators.min3
})
type FormType = z.infer<typeof schema>



export async function addPayment(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors, error: "fix errors and try again"}
    // data.courses = JSON.parse(data.courses);
   
    try {
        console.log(data);
        
        const req = await ServerRequest.post(apis.manager.createStaff,data)
        const res:ApiResponse = await req?.json()
        console.log({res})
        if(res.status == 201){
            revalidateTag(tags.payment);
            return {success: "Payment added"}
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    return {}
}

