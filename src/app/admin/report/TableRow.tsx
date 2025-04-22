import { Centers, PaymentPlanDetailed } from "@/types";
import { Suspense } from "react";

export type AdminTableProps = {
  _id: string;
};
export default function TableRow({_id, amount, paid, pending, student, course, }: PaymentPlanDetailed & Record<string, any>) {
  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">{student.fullname}</td>
      <td>{student.student_id}</td>
      <td>{student.center.name}</td>
      <td>{course.title}</td>
      <td>{amount}</td>
      <td>{paid}</td>
      <td>{pending}</td>
      {/* <table>
        <button>{student.isactive}</button>
      </table> */}
    </tr>
  );
}
