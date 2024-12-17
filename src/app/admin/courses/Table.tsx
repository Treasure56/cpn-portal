import { courseDummys, studentDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { fetchCourse } from "@/actions";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table() {
  const courses = await fetchCourse()
  if(!courses || courses == "error") return <div className="info">error fetching courses</div>
    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Title</td>
              <td>Duration</td>
              <td>Amount</td>
               <td></td>
            </tr>
            {
             courses.map( (v, i) => <ErrorBoundary key={i} fallback={<tr className="info">
                           <td colSpan={4}>something went wrong</td>
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