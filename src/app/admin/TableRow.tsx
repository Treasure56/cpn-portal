import { Centers } from "@/types";

export type AdminTableProps = {
  _id: string;
};
export default function TableRow({_id, code, location, name }: Centers) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{name}</td>
      <td>
        {code}
      </td>
      <td>{location}</td>
      <td>{"mngr"}</td>

      <td className="py-1">{12}</td>
      
    </tr>
  );
}
