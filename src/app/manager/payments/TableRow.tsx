import { PaymentsDetailedlus } from "@/types";
import { formatNumber, formatDate } from "@/functions/helpers";
import { FcDocument } from "react-icons/fc";
import Link from "next/link";
import { paths } from "@/utils";
import { FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";

export default function TableRow({
  _id,
  amount,
  createdAt,
  payment_date: paid_at,
  user_id: student_id,
  payment_plan_id: plan_id,
  ...props
}: PaymentsDetailedlus) {
  const student = plan_id[0].user_id
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex flex-col">
      <p className="font-[500]">{!student ? "----" : student.fullname}</p>
      <p>{!student ? "----" : student.email}</p>
      </td>
      <td>{formatNumber(amount, true)}</td>
      <td>{plan_id[0].course_id?.title}</td>
      <td>{formatDate(paid_at)}</td>
      <td>
        <div className="flex gap-2 justify-end">
          <Link href={paths.managerSinglePayment(_id)} className=" btn-delete !px-3 !py-1.5 inline-flex items-center gap-1"><FcDocument /> Receipt</Link>
        </div>
      </td>
      <td>
         <div className="flex gap-2 justify-end">
                  {/* <EditModal
                    payments={{
                      _id,
                      amount,
                      createdAt,
                      payment_date: paid_at,
                      user_id: student_id,
                      payment_plan_id: plan_id,
                      ...props,
                    }}
                  >
                    <button className="btn-edit">
                      <FaEdit />
                    </button>
                  </EditModal> */}
                  {/* <DeleteModal students={{_id, email, center_id, fullname: full_name, phone, course_id, reg_date, student_id, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteModal> */}
                </div>
      </td>
    </tr>
  );
}
