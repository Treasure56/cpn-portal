import { fetchManagers } from "@/actions/fetch/fetchManagers";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { GrUserManager } from "react-icons/gr";

export default async function AdminTotalManagers() {
    const managers = await fetchManagers();
    if(!managers || managers == "error") return <div className="info">error fetching managers</div>
    return (
            <AdminOverViewCard title="Total Managers" icon={ <GrUserManager />} count={managers.length} color="#222" />
    );
}


