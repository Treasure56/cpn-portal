import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { GrUserManager } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";

export default function AdminTotalStudents() {
    return (
        <div>
            <AdminOverViewCard title="Total Students" icon={  <PiStudent />} count={3} color="#771" />
        </div>
    );
}