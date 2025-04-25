import { Pagination } from "@/components/Pagination";
import { ErrorBoundary } from "react-error-boundary";
import TableRow from "./TableRow";
import { Report } from "@/types";

export default async function Table({ report }: { report: Report }) {
  return (
    <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
        <tbody>
          <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
            <td className="py-2 ">Name</td>
            <td>Student ID</td>
            <td>Center</td>
            <td>Course</td>
            <td>Amount</td>
            <td>Paid</td>
            <td>Pending</td>
            {/* <td></td> */}
          </tr>
          {report.data.plans.map((v, i) => (
            <ErrorBoundary
              key={i}
              fallback={
                <tr className="info">
                  <td colSpan={7}>something went wrong</td>
                </tr>
              }
            >
              <TableRow {...v} />
            </ErrorBoundary>
          ))}
        </tbody>
      </table>
      <Pagination pagination={report.pagination} />
    </div>
  );
}
