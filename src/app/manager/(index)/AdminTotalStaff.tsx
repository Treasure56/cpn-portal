import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { PiUsersFourBold } from "react-icons/pi";

export default function AdminTotalStaff() {
    return (
            <AdminOverViewCard title="Total Staff" icon={ <PiUsersFourBold />} count={10} color="#226" />
    );
}