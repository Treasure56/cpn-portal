import { InvoiceDetailedlus } from "@/types";
import Link from "next/link";
import { paths } from "@/utils";
import { PiInvoiceFill } from "react-icons/pi";
import { formatDate, formatNumber } from "@/functions/helpers";


export default function TableRow({ _id, student_id, date, createdAt, ...props }: InvoiceDetailedlus) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">
        {props.payment_plan_id.user_id.fullname}
      </td>
      <td>
        {formatNumber(props.payment_plan_id.amount, true)}
      </td>
      <td>{formatDate(createdAt)}</td>
      <td>
        <div className="flex gap-2 justify-end">
          <Link href={paths.managerInvoice(_id)} className=" btn-delete !px-3 !py-1.5 inline-flex items-center gap-1"><PiInvoiceFill />Invoice</Link>
        </div>
      </td>
    </tr>
  );
}
