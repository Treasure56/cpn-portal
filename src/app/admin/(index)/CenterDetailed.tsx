import { fetchSingleCenter } from "@/actions";

export type CenterDetailedProps ={
    centerId: string
}
export default async function CenterDetails({centerId}:CenterDetailedProps) {
    const center = await fetchSingleCenter(centerId)
    if(!center || center === "error") return <></>
    return (
        <><td>
            {center.manager.fullname}
            </td>
            <td>{center.studentCount.toString()}</td>
            </>
    );
}