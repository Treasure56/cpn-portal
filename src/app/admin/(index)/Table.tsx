import { centerDummys } from "@/utils/dummy";
import TableRow from "./TableRow";

export default function Table() {
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
              {/* <td></td> */}
            </tr>
            {
             centerDummys.map( (v, i) => <TableRow key={i} {...v} />)
            }
          </tbody>
        </table>
        </div>
    );
}