import { fetchReport } from "@/actions/fetch/fetchReport";
import { PageTitle } from "@/components/admin";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import CenterSelect from "@/components/admin/CenterSelect";
import CoursesSelect from "@/components/admin/CoursesSelect";
import { DatePicker } from "@/components/admin/DatePicker";
import StatusSelect from "@/components/admin/StatusSelect";
import { AppPageProps } from "@/types/basicTypes";
import { Suspense } from "react";
import { FaMoneyBill } from "react-icons/fa6";
import { DownloadReport } from "./DownloadReport";
import Table from "./Table";

export default async function Page({ searchParams }: AppPageProps) {
  const reports = await fetchReport(searchParams);
  if (!reports || reports == "error")
    return <div className="info">error fetching reports</div>;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <PageTitle>Report</PageTitle>
        <div className="flex gap-2">
          <Suspense>
            <div className="w-40 flex-shrink-0">
              <CoursesSelect />
            </div>
            <StatusSelect />
            <DatePicker />
            <div className="w-40 flex-shrink-0">
              <CenterSelect />
            </div>
            <DownloadReport />
          </Suspense>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AdminOverViewCard
          title="Total Students"
          color="#111"
          count={reports.data.summary.totalPaymentPlans}
          icon={<FaMoneyBill />}
        />
        <AdminOverViewCard
          title="Total Completed Payments"
          color="#111"
          count={reports.data.summary.completedCount}
          icon={<FaMoneyBill />}
        />
        <AdminOverViewCard
          title="Total pending Payments"
          color="#111"
          count={reports.data.summary.pendingCount}
          icon={<FaMoneyBill />}
        />
        <AdminOverViewCard
          title="Total Paid Amount"
          color="#111"
          count={reports.data.summary.TotalPaidAmount}
          icon={<FaMoneyBill />}
        />
        <AdminOverViewCard
          title="Total Completed Amount"
          color="#111"
          count={reports.data.summary.TotalCompletedAmount}
          icon={<FaMoneyBill />}
        />
        <AdminOverViewCard
          title="Total Pending Amount"
          color="#111"
          count={reports.data.summary.TotalPendingAmount}
          icon={<FaMoneyBill />}
        />
      </div>

      <div className="flex mt-5 flex-col">
        <Table report={reports} />
      </div>
    </section>
  );
}
