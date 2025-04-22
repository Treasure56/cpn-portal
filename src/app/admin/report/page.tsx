import { fetchReport } from "@/actions/fetch/fetchReport";
import { PageTitle } from "@/components/admin";
import AdminOverViewCard from "@/components/admin/AdminOverViewCard";
import DatePicker from "@/components/admin/DatePicker";
import { FaMoneyBill } from "react-icons/fa6";
import Table from "./Table";

export default async function Page() {
  const reports = await fetchReport();
  if (!reports || reports == "error")
    return <div className="info">error fetching reports</div>;
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between">
        <PageTitle>Report</PageTitle>
        <div className="flex gap-2">
          <DatePicker />
          {/* <CenterSelect />
          <SelectReportType /> */}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <AdminOverViewCard
          title="Total Payment Plans"
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
       
        <Table />
      </div>
    </section>
  );
}
