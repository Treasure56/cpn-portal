import { Students } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import Link from "next/link";
import { paths } from "@/utils";


export default function TableRow({_id, email, center_id, full_name, phone, course_id, reg_date, student_id, ...props }:Students) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center"><Link href={paths.adminSingleStudent(_id)}>{full_name}</Link></td>
      <td>
        {email}
      </td>
      <td>{phone}</td>
      <td>{center_id}</td>
      <td>{student_id}</td>
      <td>{reg_date}</td>
      <td>{course_id}</td>
      <td><div className="flex gap-2 justify-end">
        <EditModal students={{_id, email, center_id, full_name, phone, course_id, reg_date, student_id, ...props }}><button className="btn-edit"><FaEdit /></button></EditModal>
        <DeleteModal students={{_id, email, center_id, full_name, phone, course_id, reg_date, student_id, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteModal>
      </div></td>      
    </tr>
  );
}
