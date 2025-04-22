import { fetchReport } from "@/actions/fetch/fetchReport";
import { useQuery } from "@tanstack/react-query";


export function useReportType(){
    const {data: reports, ...others}  = useQuery({
        queryKey: ['reports'],
        queryFn: () => fetchReport().then(res=>{
            if(res == "error") return null;
            return res;
        }),
    })

    return {reports, ...others}
}