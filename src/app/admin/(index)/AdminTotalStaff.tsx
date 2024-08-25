import { adminFetchStaff } from "@/actions";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { PiUsersFourBold } from "react-icons/pi";

export default async function AdminTotalStaff() {
    const staffs = await adminFetchStaff();
    if(!staffs|| staffs == "error") return <div className="info">error fetching staffs</div>
    return (
            <AdminOverViewCard title="Total Staff" icon={ <PiUsersFourBold />} count={staffs.totalDocuments} color="#226" />
    );
}