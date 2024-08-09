'use server'

import {  Courses, Manager } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchCourses():Promise<ActionApiResponse<Courses[]>>{
    try {
        const req = await ServerRequest.get(apis.admin.getCourses, {
            next: {tags: [tags.course]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data.courses
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}