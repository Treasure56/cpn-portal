import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { GrUserManager } from "react-icons/gr";

export default function AdminTotalManagers() {
    return (
            <AdminOverViewCard title="Total Managers" icon={ <GrUserManager />} count={3} color="#222" />
    );
}