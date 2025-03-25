import { fetchStudents } from "@/actions/fetch/fetchStudents";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { PiStudent } from "react-icons/pi";

export default async function ManagerTotalStudents() {
    const students = await fetchStudents();
    if(!students|| students == "error") return <div className="info">error fetching students</div>
    return (
            <AdminOverViewCard title="Total Students" icon={  <PiStudent />} count={students.totalDocuments} color="#771" />
    );
}