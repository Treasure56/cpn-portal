import { invoiceDummys, studentDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { ErrorBoundary } from "react-error-boundary";

export default function Table() {

    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Name</td>
              <td>Amount</td>
              <td>Date</td>
               <td></td>
            </tr>
            {
             invoiceDummys.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={4}>something went wrong</td>
                         </tr>}>
                           <TableRow {...v} />
                         </ErrorBoundary>)
            }
          </tbody>
        </table>
        </div>
    );
}