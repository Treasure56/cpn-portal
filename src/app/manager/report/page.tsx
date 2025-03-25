import { PageTitle } from "@/components/admin";
import ManagerTotalStudents from "./ManagerTotalStudents";
import ManagerTotalCourses from "./ManagerTotalCourses";
import DailyPayments from "./ManagerTotalStaff";
import Table from "@/app/manager/staff/Table";

export default function Page() {
  return (
    <section className="flex flex-col gap-4">
      <PageTitle>Report</PageTitle>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <DailyPayments />
        <ManagerTotalStudents />
        <ManagerTotalCourses />
      </div>

      <div className="flex flex-col">
        <div className="py-2 flex justify-between items-center">
          <h3 className=" text-lg font-[500]">Staffs</h3>
        </div>
        <Table query="" />
      </div>
    </section>
  );
}
