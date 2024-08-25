import { fetchCourse } from "@/actions";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { FaBookOpen } from "react-icons/fa6";

export default async function AdminTotalCourses() {
    const courses = await fetchCourse();
    if(!courses|| courses == "error") return <div className="info">error fetching staffs</div>
    return (
            <AdminOverViewCard title="Total Courses" icon={ <FaBookOpen />} count={courses.length} color="#570a0d" />
    );
}