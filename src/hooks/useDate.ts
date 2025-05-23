import { fetchCenters } from "@/actions/fetch/fetchCenters";
import { useQuery } from "@tanstack/react-query";


export function useDate(){
    const {data: centers, ...others}  = useQuery({
        queryKey: ['dates'],
        queryFn: () => fetchCenters().then(res=>{
            if(res == "error") return null;
            return res;
        }),
    })

    return {centers, ...others}
}