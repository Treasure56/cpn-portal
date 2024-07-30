import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { FaBookOpen } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";

export default function AdminTotalCourses() {
    return (
        <div>
            <AdminOverViewCard title="Total Courses" icon={ <FaBookOpen />} count={3} color="#570a0d" />
        </div>
    );
}