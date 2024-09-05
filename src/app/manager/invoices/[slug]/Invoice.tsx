import { PageTitle } from "@/components/admin";
import { AppLogo } from "@/components/navbar";
import PdfScript from "@/components/PdfScript";
import { formatDate, formatNumber } from "@/functions/helpers";
import { centerDummy, courseDummy, studentDummy } from "@/utils/dummy";
import { InvoiceDetailedlus } from "@/types";

export default async function InvoicePdf({
  _id,
  amount,
  createdAt,
  payment_plan_id,
  student_id,
 date,
 disclaimer,
 due_date,
 message,
 voucher_number,

}: InvoiceDetailedlus) {
  const student = payment_plan_id.user_id;
  const course = payment_plan_id.course_id;

  return (
    <>
    <PdfScript title={`invoice_${voucher_number}_${student.fullname}`} />
      <div
        id="html-content"
        className=" flex flex-col gap-3 aspect-[3/4] bg-light p-20 w-[794px]"
      >
        <h3 className="border-b-nuetral-100 border-b py-10 font-[600]">
          Invoice
        </h3>

        <div className="flex justify-between border-b-nuetral-100 border-b py-10">
          <AppLogo toWebsite />
          <div className="flex flex-col text-sm text-right">
            <p className="font-[500]"> Center Point</p>
            <p>{student.center.name}</p>
            <p>{student.center.location}</p>
          </div>
        </div>

        <div className="flex justify-between text-sm text-end">
          <div className="flex flex-col">
            <p className="font-[500] upercase text-start">To</p>
            <p className=" uppercase font-[500]">{student.fullname}</p>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Voucher No:</p>
              <p className="text-neutral-500">{voucher_number}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]"> Date:</p>
              <p className="text-neutral-500">{formatDate(createdAt)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Due date:</p>
              <p className="text-neutral-500"> {formatDate(due_date)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <p className="font-[500]">Transaction Charge:</p>
              <p className="text-neutral-500">{"N0.00"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col py-10">
          <div className="grid grid-cols-8 bg-light border p-4 font-[500]">
            <p className="col-span-4">Course</p>
            <p className="col-span-4">Amount</p>
          </div>
          <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-4 ">{course?.title}</p>
            <p className="col-span-4 "> {formatNumber(amount, true)}</p>
          </div>
        <div className="grid grid-cols-8 gap-2 border-b-nuetral-100 border-b py-2 ">
            <p className="col-span-4 text-right">Total: Dr.</p>
            <p className="col-span-2 text-neutral-500">
              {formatNumber(amount, true)}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-[500]">Disclaimer</p>
          <p className="text-sm">{disclaimer}</p>
        </div>
        
      </div>
    </>
  );
}
