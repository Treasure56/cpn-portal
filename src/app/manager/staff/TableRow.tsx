import { Manager, Staff } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditManager from "./EditModal";
import DeleteManager from "./DeleteModal";

export type TableProps = {
  _id: string;
};
export default function TableRow({_id, email, center_id, full_name, phone, courses, salary, ...props }:Staff) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{full_name}</td>
      <td>
        {email}
      </td>
      <td>{phone}</td>
      <td>{center_id}</td>
      <td>{salary}</td>
      <td>{courses}</td>
      <td><div className="flex gap-2 justify-end">
        <EditManager staff={{_id, email, center_id, full_name, phone, courses, salary, ...props }}><button className="btn-edit"><FaEdit /></button></EditManager>
        <DeleteManager staff={{_id, email, center_id, full_name, phone, courses, salary, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteManager>
      </div></td>      
    </tr>
  );
}