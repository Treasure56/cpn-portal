import { paymentDummys, studentDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { fetchPayment } from "@/actions/fetch/fetchPayment";
import { Pagination } from "@/components/Pagination";
import { adminFetchPayments } from "@/actions";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table({ query }: { query: string }) {
  // const payments = await fetchPayment(query);
  const payments = await adminFetchPayments(query);
  if (!payments || payments == "error")
    return <div className="info">Error fetching payments</div>;

  console.log(
    "this",
    payments.existingRecords.map((i) => i.payment_plan_id)
  );
  // console.log({payments});
  return (
    <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
        <tbody>
          <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
            <td className="py-2 ">Student</td>
            <td>Amount</td>
            <td>Course</td>
            <td>Payment Date</td>
            <td></td>
          </tr>
          {payments.existingRecords.map((v, i) => (
            <ErrorBoundary key={i} fallback={<tr className="info">
              <td colSpan={5}>something went wrong</td>
            </tr>}>
              <TableRow {...v} />
            </ErrorBoundary>
          ))}
        </tbody>
      </table>

      <Pagination pagination={payments} />
    </div>
  );
}
