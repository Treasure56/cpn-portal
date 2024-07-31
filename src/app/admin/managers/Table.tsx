import { centerDummys, managersDummys } from "@/utils/dummy";
import TableRow from "./TableRow";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Table() {
    return (
        <div>
            <table className="min-w-[1000px] w-full rounded-md overflow-hidden app-table">
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
             managersDummys.map( (v, i) => <TableRow key={i} {...v} />)
            }
          </tbody>
        </table>
        </div>
    );
}