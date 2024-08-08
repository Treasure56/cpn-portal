import { centerDummys, managersDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { fetchManagers } from "@/actions/fetch/fetchManagers";

export default async function Table() {
  const managers = await fetchManagers();
  if(!managers || managers == "error") return <div className="info">error fetching centers</div>;
    return (
      <div className="w-full max-w-full overflow-x-auto [&>table]:mb-6">
      <table className="min-w-[900px] w-full rounded-md overflow-hidden app-table">
          <tbody>
            <tr className="bg-dark text-neutral-background font-semibold rounded-md text-base rounded-br-md rounded-bl-md">
              <td className="py-2 ">Fullname</td>
              <td>email</td>
              <td>Center</td>
              <td>Phone</td>
              <td></td>
              
              {/* <td></td> */}
            </tr>
            {
             managers.map( (v, i) => <TableRow key={i} {...v} />)
            }
          </tbody>
        </table>
        </div>
    );
}