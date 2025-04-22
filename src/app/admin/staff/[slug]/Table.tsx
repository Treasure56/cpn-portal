import { ErrorBoundary } from "react-error-boundary";
import TableRow from "./TableRow";
import { StaffDetailed } from "@/types";

export default async function Table({
  query,
  staff,
}: {
  query: string;
  staff: StaffDetailed;
}) {
  if (!staff.certificate) return null;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className=" text-lg font-[500]">Certificates</h3>
      </div>

      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
        <tbody>
          <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
            {/* <td className="py-2 ">Student</td> */}
            {/* <td></td> */}
            <td>Title</td>
            {/* <td></td> */}
            {/* <td>Student ID</td> */}
            <td>open</td>
          </tr>
          {staff.certificate.map((v, i) => (
            <ErrorBoundary
              key={i}
              fallback={
                <tr className="info">
                  <td colSpan={5}>something went wrong</td>
                </tr>
              }
            >
              {TableRow(v)}
            </ErrorBoundary>
          ))}
        </tbody>
      </table>
    </div>
  );
}
