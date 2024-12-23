import { studentDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { fetchStudents } from "@/actions/fetch/fetchStudents";
import { Pagination } from "@/components/Pagination";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table({query}:{query: string}) {
  const students = await fetchStudents(query);
  if(!students || students == "error") return <div className="info">error fetching Students</div>;
  // console.log(students.existingRecords[0].plan[0].);

  
  
    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Name</td>
              <td>Email</td>
              <td>Phone</td>
              <td>Student ID</td>
              <td>Reg. Date</td>
              <td>Course</td>
               <td></td>
            </tr>
            {
             students.existingRecords.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={7}>something went wrong</td>
                         </tr>}>
                           <TableRow {...v} />
                         </ErrorBoundary>
            )
            }
          </tbody>
        </table>
        <Pagination pagination={students} />
        </div>
    );
}