import { Students } from "@/types";
import { ActionApiResponse } from "@/types/basicTypes";
import { apis, tags } from "@/utils";
import { ServerRequest } from "@/utils/serverRequest";

export async function fetchStudentDetails():Promise<ActionApiResponse<Students>>{
    try {
        const req = await ServerRequest.get(apis.general.getStudents, {
            next: {tags: [tags.student]}
        })
        const res = await req?.json()
        if(res.status == 200) return res.data
        else return null
    } catch (error) {
        console.error(error)
        return "error"
        
    }
}