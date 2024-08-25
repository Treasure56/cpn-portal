import { adminFetchStudents } from "@/actions";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { PiStudent } from "react-icons/pi";

export default async function AdminTotalStudents() {
    const students = await adminFetchStudents();
    if(!students|| students == "error") return <div className="info">error fetching staffs</div>
    return (
            <AdminOverViewCard title="Total Students" icon={  <PiStudent />} count={students.totalDocuments} color="#771" />
    );
}