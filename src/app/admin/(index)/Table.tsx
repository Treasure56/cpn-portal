import { centerDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { fetchCenters } from "@/actions/fetch/fetchCenters";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table() {
  const centers = await fetchCenters();
  if(!centers || centers == "error") return <div className="info">error fetching centers</div>;
    return (
        <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
            <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Name</td>
              <td>Code</td>
              <td>Location</td>
              <td>Manager</td>
              <td>Students</td>
            </tr>
            {
             centers.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={5}>something went wrong</td>
                         </tr>}>
                           <TableRow {...v} />
                         </ErrorBoundary>
            )
            }
          </tbody>
        </table>
        </div>
    );
}