"use server"

import { formDataToObject } from "@/functions/helpers";
import { ActionResponse, ApiResponse } from "@/types/basicTypes";
import { apis, tags, appCookies, paths, validators } from "@/utils";
import { ClientRequest } from "@/utils/clientFetch";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import { z } from "zod";

const schema = z.object ({
    email: validators.email,
    password: z.string().min(6, "invalid login details")
})
type FormType = z.infer<typeof schema>


export async function login(_:ActionResponse, formData:FormData):Promise<ActionResponse>{
    let success = false
    const data = formDataToObject<FormType>(formData)
    const validate = schema.safeParse(data)
    //check if validation was successful 
    if(!validate.success) return {fieldErrors:validate.error.flatten().fieldErrors}

    try {
        const req = await ClientRequest.post(apis.auth.login,data)
        const res:ApiResponse = await req.json()
        if(res.status == 200){
            revalidateTag(tags.admin)
            const {set} = cookies()
            set(appCookies.accessToken, res.data.token, {maxAge: 60 * 60 * 24, sameSite: 'strict', path: '/'})
            success = true
        }else{
            return {error:res.data}
        }
        
    } catch (error) {
        console.error(error)
        return {error:"Something went wrong"}
        
    }

    if(success) redirect(paths.admin, RedirectType.replace) 
    return {}
}
