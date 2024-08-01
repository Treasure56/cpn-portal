import { Courses } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";


export default function TableRow({_id, amount, createdAt, duration, title, ...props }:Courses) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{title}</td>
      <td>
        {amount}
      </td>
      <td>{duration}</td>
      <td><div className="flex gap-2 justify-end">
        <EditModal courses={{_id,  amount, createdAt, duration, title, ...props }}><button className="btn-edit"><FaEdit /></button></EditModal>
        <DeleteModal courses={{_id,  amount, createdAt, duration, title, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteModal>
      </div></td>      
    </tr>
  );
}
