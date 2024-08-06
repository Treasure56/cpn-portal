import { Invoice, Students } from "@/types";
import Link from "next/link";
import { paths } from "@/utils";
import { PiInvoiceFill } from "react-icons/pi";


export default function TableRow({_id, amount, student_id, date,  ...props }:Invoice) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{student_id}</td>
      <td>
        {amount}
      </td>
      <td>{date}</td>
      <td>
      <div className="flex gap-2 justify-end">
          <Link href={paths.adminInvoice(_id)} className=" btn-delete !px-3 !py-1.5 inline-flex items-center gap-1"><PiInvoiceFill />Invoice</Link>
        </div>
      </td>      
    </tr>
  );
}
