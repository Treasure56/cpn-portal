"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, validators } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";
import { revalidateTag } from "next/cache";
import { z } from "zod";

const schema = z.object ({
   amount: validators.min3,
   course_id: validators.min3,
   installments: validators.phone,
   reg_date: z.string(),
})
type FormType = z.infer<typeof schema>



export async function addCourse(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors, error: "fix errors and try again"}
   
    try {
        // console.log(data);
        
        const req = await ServerRequest.post(apis.manager.addCourse,data)
        const res:ApiResponse = await req?.json()
        console.log({res})
        if(res.status == 201){
            revalidateTag(tags.plan);
            return {success: "Course Addes"}
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    return {}
}

