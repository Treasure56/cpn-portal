import { PageTitle } from "@/components/admin";
import CenterSelect from "@/components/admin/CenterSelect";
import DatePicker from "@/components/admin/DatePicker";
import AdminTotalCourses from "./AdminTotalCourses";
import AdminTotalManagers from "./AdminTotalManagers";
import AdminTotalStaff from "./AdminTotalStaff";
import AdminTotalStudents from "./AdminTotalStudents";
import CreateCenter from "./CreateCenter";
import Table from "./Table";

export default function Page() {
    return (
        <section className="flex flex-col gap-4">
            <div className="flex justify-between">
                <PageTitle>Admin</PageTitle>
               <div className="flex gap-2">
                 <DatePicker />
                 <CenterSelect />

               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AdminTotalManagers />
                <AdminTotalStaff />
                <AdminTotalStudents />
                <AdminTotalCourses />

            </div>

           <div className="flex flex-col">
            <div className="py-2 flex justify-between items-center">
                <h3 className=" text-lg font-[500]">Centers</h3>
                <CreateCenter>
                    <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm">Add Center +</button>
                </CreateCenter>
            </div>
           <Table />
           </div>
        </section>
    );
}