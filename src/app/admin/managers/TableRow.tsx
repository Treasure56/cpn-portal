import { Manager } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditManager from "./EditManager";
import DeleteManager from "./DeleteManager";

export type TableProps = {
  _id: string;
};
export default function TableRow({_id, email, center_id, full_name, phone, ...props }: Manager) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{full_name}</td>
      <td>
        {email}
      </td>
      <td>{center_id}</td>
      <td>{phone}</td>
      <td><div className="flex gap-2 justify-end">
        <EditManager manager={{_id, email, center_id, full_name, phone, ...props }}><button className="btn-edit"><FaEdit /></button></EditManager>
        <DeleteManager manager={{_id, email, center_id, full_name, phone, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteManager>
      </div></td>      
    </tr>
  );
}
