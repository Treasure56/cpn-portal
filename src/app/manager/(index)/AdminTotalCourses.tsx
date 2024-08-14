import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { FaBookOpen } from "react-icons/fa6";

export default function AdminTotalCourses() {
    return (
            <AdminOverViewCard title="Total Courses" icon={ <FaBookOpen />} count={3} color="#570a0d" />
    );
}