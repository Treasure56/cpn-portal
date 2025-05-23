import { centerDummys, managersDummys, staffDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { adminFetchStaff } from "@/actions";
import { Pagination } from "@/components/Pagination";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table({query}:{query: string}) {
  const staffs = await adminFetchStaff(query);
  if(!staffs || staffs == "error") return <div className="info">error fetching staffs</div>;
    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Center</td>
              {/* <td>Salary</td> */}
              {/* <td>Courses</td> */}
              <td></td>
              
              {/* <td></td> */}
            </tr>
            {
             staffs.existingRecords.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={7}>something went wrong</td>
                         </tr>}>
                           <TableRow {...v} />
                         </ErrorBoundary>
            )
            }
          </tbody>
        </table>
        <Pagination pagination={staffs} />
        </div>
    );
}