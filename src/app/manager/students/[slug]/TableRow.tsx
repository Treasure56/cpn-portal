import { Payments, PaymentsDetailed } from "@/types";
import { formatDate, formatNumber } from "@/functions/helpers";
import { FcDocument } from "react-icons/fc";
import Link from "next/link";
import { paths } from "@/utils";

export default function TableRow({
  _id,
  amount,
  createdAt,
  payment_date,
  user_id: student_id,
  payment_plan_id: plan_id,
  ...props
}: PaymentsDetailed) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      {/* <td className="py-1 flex flex-col">
        <p className="font-[500]">{"name"}</p>
        <p>{"johndoe@it.com"}</p>
      </td> */}
      <td>{formatNumber(amount, true)}</td>
      <td>{plan_id.course_id?.title}</td>
      <td>{formatDate(payment_date)}</td>
      <td> 
        <div className="flex gap-2 justify-end">
          <Link href={paths.managerSinglePayment(_id)} className=" btn-delete !px-3 !py-1.5 inline-flex items-center gap-1"><FcDocument /> Receipt</Link>
        </div>
      </td>
    </tr>
  );
}