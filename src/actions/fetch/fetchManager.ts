"use server"

import { Admin, Manager } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchManager():Promise<ActionApiResponse<Manager>> {
   try {
    // make a request to fetch the admin profile
    const req = await ServerRequest.get(apis.manager.getProfile, {
        next: {tags: [tags.manager]}
    })
    // geth the response as json
    const res = await req?.json()
    // check if the response was succesful (200)
    if(res.status == 200) return res.data
    // check if the admin was not found (404)
    else if(res.status == 404) return null;
    // if there's any other error
    else return "error"
   } catch (error) {
    console.error(error)
    return "error"
   }
}