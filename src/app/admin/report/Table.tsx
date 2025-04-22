import { centerDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { ErrorBoundary } from "react-error-boundary";
import { fetchReport } from "@/actions/fetch/fetchReport";
import { Pagination } from "@/components/Pagination";

export default async function Table() {
  const reports = await fetchReport();
  if(!reports || reports == "error") return <div className="info">error fetching centers</div>;
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
            {
             reports.data.plans.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={7}>something went wrong</td>
                         </tr>}>
                           <TableRow {...v} />
                         </ErrorBoundary>
            )
            }
          </tbody>
        </table>
        <Pagination pagination={reports.pagination} />
        </div>
    );
}