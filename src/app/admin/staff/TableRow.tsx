import { Manager, Staff, StaffDetailed } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditManager from "./EditModal";
import DeleteManager from "./DeleteModal";
import { formatNumber } from "@/functions/helpers";
import Link from "next/link";
import { paths } from "@/utils";

export type TableProps = {
  _id: string;
};
export default function TableRow({_id, email, center, fullname: full_name, phone, courses, salary, ...props }:StaffDetailed) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
     <td className="py-1 flex gap-2 items-center"><Link href={paths.adminSingleStaff(_id)}>{full_name}</Link></td>
      <td>
        {email}
      </td>
      <td>{phone}</td>
      <td>{center.name}</td>
      {/* <td>{formatNumber(salary, true)}</td> */}
      {/* <td>{courses.map(i => i.title).join(", ")}</td> */}
      {/* <td><div className="flex gap-2 justify-end"> */}
        {/* <EditManager staff={{_id, email, center: center, fullname: full_name, phone, courses, salary, ...props }}><button className="btn-edit"><FaEdit /></button></EditManager> */}
        {/* <DeleteManager staff={{_id, email, center: center, fullname: full_name, phone, courses, salary, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteManager> */}
      {/* </div></td>       */}
    </tr>
  );
}
