import { ManagerDetailed } from "@/types";
import { ErrorBoundary } from "react-error-boundary";
import TableRow from "./TableRow";
import UploadCert from "./Uploadcert";

export default async function Table({
  query,
  manager: manager,
}: {
  query: string;
  manager: ManagerDetailed;
}) {
  if (!manager.certificate) return null;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h3 className=" text-lg font-[500]">Certificates</h3>
        <UploadCert>
          <button className="btn-dark !py-1.5 !px-5 !font-normal !text-sm w-fit flex justify-end">
            Add Certificate +
          </button>
        </UploadCert>
      </div>

      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
        <tbody>
          <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
            <td>Title</td>
            <td>open</td>
            <td></td>
          </tr>
          {manager.certificate.map((v, i) => (
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
