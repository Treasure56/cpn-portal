import { StudentDetailed, Students } from "@/types";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import Link from "next/link";
import { paths } from "@/utils";
import { FcDocument } from "react-icons/fc";
import CreateInvoice from "./CreateInvoice";

export default function TableRow(student: StudentDetailed) {
  const {
    _id,
    email,
    center: center_id,
    fullname: full_name,
    phone,
    course_id,
    reg_date,
    student_id,
    plan,
    ...props
  } = student;

  return (
    <tr className=" text-black-400 font-[400] text-sm text-neutral-text bg-light border-b first-of-type:bg-red-400">
      <td className="py-1 flex gap-2 items-center">
        <Link href={paths.managerSingleStudent(_id)}>{full_name}</Link>
      </td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{student_id}</td>
      <td>{reg_date}</td>
      <td className="flex flex-col gap-1">
        {plan.map((p, i) => (
          p.course_id && (
            <div key={i} className="flex gap-1 justify-between">
              <span>{p.course_id?.title}</span>
              <CreateInvoice student={student} index={i}>
                <button className="btn-edit">
                  <FcDocument />
                </button>
              </CreateInvoice>
            </div>
          )))}
      </td>
      <td>
        <div className="flex gap-2 justify-end">
          <EditModal
            students={{
              _id,
              email,
              plan,
              center: center_id,
              fullname: full_name,
              phone,
              course_id,
              reg_date,
              student_id,
              ...props,
            }}
          >
            <button className="btn-edit">
              <FaEdit />
            </button>
          </EditModal>
          {/* <DeleteModal students={{_id, email, center_id, fullname: full_name, phone, course_id, reg_date, student_id, ...props }}><button className="btn-delete"><RiDeleteBinLine /></button></DeleteModal> */}
        </div>
      </td>
    </tr>
  );
}
