"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, paths, validators } from "@/utils";
import { ClientRequest } from "@/utils/clientFetch";
import { ServerRequest } from "@/utils/serverRequest";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object ({
    currentPassword: validators.password,
    newPassword: validators.password,
    confirm_password: validators.password
})
type FormType = z.infer<typeof schema>
    

export async function changePassword(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    let nextPath = ""
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}

    if(data.newPassword !== data.confirm_password) return {error:"Passwords do not match"}

    try {
        const req = await ServerRequest.post(apis.manager.changePassword,data)
        const res:ApiResponse = await req?.json()
        console.log(res);
        
        if(res.status == 200){
           return {success:"Password changed successfully"}
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    if(nextPath) redirect(nextPath, RedirectType.replace) 
    return {}
}
