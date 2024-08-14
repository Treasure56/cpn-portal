import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { PiStudent } from "react-icons/pi";

export default function AdminTotalStudents() {
    return (
            <AdminOverViewCard title="Total Students" icon={  <PiStudent />} count={3} color="#771" />
    );
}