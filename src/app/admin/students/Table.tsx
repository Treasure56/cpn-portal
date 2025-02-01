import { studentDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { adminFetchStudents } from "@/actions";
import { Pagination } from "@/components/Pagination";
import { ErrorBoundary } from "react-error-boundary";

export default async function Table({ query }: { query: string }) {
  const students = await adminFetchStudents(query);
  if (!students || students == "error")
    return <div className="info">error fetching Students</div>;
  return (
    <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
        <tbody>
          <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
            <td className="py-2 ">Student</td>
            <td>Phone</td>
            <td>Center</td>
            <td>Student ID</td>
            <td>Reg. Date</td>
            <td>Course</td>
            <td></td>
          </tr>
          {students.existingRecords.map((v, i) => (
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
      <Pagination pagination={students} />
    </div>
  );
}
