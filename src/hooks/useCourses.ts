import { fetchCenters } from "@/actions/fetch/fetchCenters";
import { fetchCourses } from "@/actions/fetch/fetchCourse";
import { useQuery } from "@tanstack/react-query";


export function useCourses(){
    const {data: courses, ...others}  = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetchCourses().then(res=>{
            if(res == "error") return null;
            return res;
        }),
    })

    return {courses, ...others}
}