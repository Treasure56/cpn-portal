import { PageTitle } from "@/components/admin";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import { FaUserAlt } from "react-icons/fa";
import AdminTotalStaff from "./AdminTotalStaff";
import AdminTotalManagers from "./AdminTotalManagers";
import AdminTotalStudents from "./AdminTotalStudents";
import AdminTotalCourses from "./AdminTotalCourses";
import AdminTable from "../Table";
import Link from "next/link";
import { paths } from "@/utils";

export default function Page() {
    return (
        <section className="flex flex-col gap-4">
            <PageTitle>Admin</PageTitle>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AdminTotalManagers />
                <AdminTotalStaff />
                <AdminTotalStudents />
                <AdminTotalCourses />

            </div>

           <div className="flex flex-col">
            <div className="py-2 flex justify-between items-center">
                <h3 className=" text-lg font-[500]">Centers</h3>
                <Link href={`${paths.admin}?new=center`} className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">Add Center +</Link>
            </div>
           <AdminTable />
           </div>
        </section>
    );
}